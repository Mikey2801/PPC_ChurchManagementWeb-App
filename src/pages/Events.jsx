import React, { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Modal, 
  Button, 
  Chip, 
  Grid, 
  Paper, 
  ToggleButtonGroup, 
  ToggleButton, 
  Divider,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { 
  Close as CloseIcon,
  CalendarMonth as CalendarMonthIcon,
  EventAvailable as EventAvailableIcon,
  FilterAlt as FilterAltIcon
} from '@mui/icons-material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { format } from 'date-fns';

// Sample event data
const sampleEvents = [
  {
    id: 1,
    title: 'Sunday Worship Service',
    start: new Date().setHours(9, 0, 0),
    end: new Date().setHours(11, 0, 0),
    allDay: false,
    type: 'worship',
    description: 'Join us for our weekly worship service with communion on the first Sunday of each month.',
    location: 'Main Sanctuary',
    color: '#4caf50',
    recurring: 'weekly',
  },
  {
    id: 2,
    title: 'Bible Study',
    start: new Date().setDate(new Date().getDate() + 2),
    end: new Date().setDate(new Date().getDate() + 2),
    allDay: false,
    type: 'bible-study',
    description: 'Mid-week Bible study and prayer meeting.',
    location: 'Fellowship Hall',
    color: '#2196f3',
    recurring: 'weekly',
  },
  {
    id: 3,
    title: 'Youth Group',
    start: new Date().setDate(new Date().getDate() + 4),
    end: new Date().setDate(new Date().getDate() + 4),
    allDay: false,
    type: 'youth',
    description: 'Fun activities and Bible study for youth ages 12-18.',
    location: 'Youth Center',
    color: '#ff9800',
    recurring: 'weekly',
  },
  {
    id: 4,
    title: 'Men\'s Breakfast',
    start: new Date().setDate(new Date().getDate() + 7),
    end: new Date().setDate(new Date().getDate() + 7),
    allDay: false,
    type: 'mens-ministry',
    description: 'Monthly men\'s breakfast and fellowship.',
    location: 'Church Kitchen',
    color: '#3f51b5',
    recurring: 'monthly',
  },
  {
    id: 5,
    title: 'Women\'s Bible Study',
    start: new Date().setDate(new Date().getDate() + 10),
    end: new Date().setDate(new Date().getDate() + 10),
    allDay: false,
    type: 'womens-ministry',
    description: 'Weekly women\'s Bible study and prayer time.',
    location: 'Room 101',
    color: '#e91e63',
    recurring: 'weekly',
  },
];

// Event type options for filtering
const eventTypes = [
  { id: 'all', label: 'All Events', color: 'default' },
  { id: 'worship', label: 'Worship', color: 'success' },
  { id: 'bible-study', label: 'Bible Study', color: 'primary' },
  { id: 'youth', label: 'Youth', color: 'warning' },
  { id: 'mens-ministry', label: 'Men\'s Ministry', color: 'info' },
  { id: 'womens-ministry', label: 'Women\'s Ministry', color: 'secondary' },
];

const Events = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const calendarRef = useRef(null);
  const [events, setEvents] = useState(sampleEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [calendarView, setCalendarView] = useState(isMobile ? 'listMonth' : 'dayGridMonth');

  // Handle event click
  const handleEventClick = (clickInfo) => {
    setSelectedEvent({
      id: clickInfo.event.id,
      title: clickInfo.event.title,
      start: clickInfo.event.start,
      end: clickInfo.event.end,
      extendedProps: clickInfo.event.extendedProps,
    });
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  // Handle filter change
  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setActiveFilter(newFilter);
    }
  };

  // Handle view change
  const handleViewChange = (newView) => {
    setCalendarView(newView);
  };

  // Filter events based on active filter
  const filteredEvents = React.useMemo(() => {
    if (activeFilter === 'all') return events;
    return events.filter(event => event.type === activeFilter);
  }, [events, activeFilter]);

  // Format event time
  const formatEventTime = (date) => {
    if (!date) return '';
    return format(new Date(date), 'h:mm a');
  };

  // Format event date
  const formatEventDate = (date) => {
    if (!date) return '';
    return format(new Date(date), 'MMMM d, yyyy');
  };

  return (
    <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              color: 'primary.main',
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            Church Events
          </Typography>
          <Typography 
            variant="h5" 
            component="p" 
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto', mb: 3 }}
          >
            Stay updated with our upcoming events, services, and activities. Join us as we grow together in faith and fellowship.
          </Typography>
          
          {/* Event Type Filters */}
          <Box sx={{ mb: 4, overflowX: 'auto', py: 1 }}>
            <ToggleButtonGroup
              value={activeFilter}
              exclusive
              onChange={handleFilterChange}
              aria-label="event filter"
              sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
            >
              {eventTypes.map((type) => (
                <ToggleButton 
                  key={type.id} 
                  value={type.id}
                  sx={{ 
                    mx: 0.5, 
                    mb: 1,
                    borderRadius: '20px !important',
                    border: '1px solid',
                    borderColor: activeFilter === type.id ? 'primary.main' : 'divider',
                    color: activeFilter === type.id ? 'primary.main' : 'text.primary',
                    '&:hover': {
                      bgcolor: 'action.hover',
                    },
                  }}
                >
                  {type.label}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>

          {/* View Toggle */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <ToggleButtonGroup
              value={calendarView}
              exclusive
              onChange={(e, newView) => newView && handleViewChange(newView)}
              aria-label="calendar view"
              size="small"
            >
              <ToggleButton value="dayGridMonth" aria-label="month view">
                <CalendarMonthIcon sx={{ mr: 1 }} />
                <span>Month</span>
              </ToggleButton>
              <ToggleButton value="timeGridWeek" aria-label="week view">
                <EventAvailableIcon sx={{ mr: 1 }} />
                <span>Week</span>
              </ToggleButton>
              <ToggleButton value="listMonth" aria-label="list view">
                <FilterAltIcon sx={{ mr: 1 }} />
                <span>List</span>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>

        {/* Calendar */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: { xs: 1, sm: 2, md: 3 },
            borderRadius: 2,
            bgcolor: 'background.paper',
            mb: 6
          }}
        >
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            initialView={calendarView}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,listMonth',
            }}
            events={filteredEvents}
            eventClick={handleEventClick}
            eventContent={(eventInfo) => ({
              html: `
                <div style="padding: 4px; border-left: 4px solid ${eventInfo.event.backgroundColor || '#4caf50'}">
                  <div style="font-weight: 500; white-space: normal;">${eventInfo.event.title}</div>
                  ${eventInfo.event.allDay ? '' : `<div style="font-size: 0.85em;">${formatEventTime(eventInfo.event.start)}</div>`}
                </div>
              `
            })}
            height="auto"
            nowIndicator={true}
            editable={false}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={2}
            initialDate={new Date()}
            views={{
              dayGridMonth: {
                dayMaxEventRows: 3,
              },
              timeGridWeek: {
                dayMaxEventRows: 3,
              },
            }}
            eventTimeFormat={{
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
              meridiem: 'short',
            }}
            slotMinTime="06:00:00"
            slotMaxTime="22:00:00"
            allDaySlot={false}
            firstDay={1} // Start week on Monday
            locale="en"
            buttonText={{
              today: 'Today',
              month: 'Month',
              week: 'Week',
              day: 'Day',
              list: 'List',
            }}
          />
        </Paper>

        {/* Upcoming Events List (for mobile) */}
        {isMobile && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Upcoming Events
            </Typography>
            <Grid container spacing={2}>
              {filteredEvents.slice(0, 3).map((event) => (
                <Grid item xs={12} key={event.id}>
                  <Paper 
                    onClick={() => {
                      setSelectedEvent(event);
                      setIsModalOpen(true);
                    }}
                    sx={{ 
                      p: 2, 
                      cursor: 'pointer',
                      '&:hover': { bgcolor: 'action.hover' },
                      borderLeft: `4px solid ${event.color}`
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight="medium">
                      {event.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {formatEventDate(event.start)}
                      {!event.allDay && ` • ${formatEventTime(event.start)}`}
                      {event.end && ` - ${formatEventTime(event.end)}`}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>

      {/* Event Details Modal */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="event-details-title"
        aria-describedby="event-details-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '80%', md: '600px' },
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 2,
            p: { xs: 2, sm: 3, md: 4 },
            outline: 'none',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}
        >
          {selectedEvent && (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Typography id="event-details-title" variant="h4" component="h2" sx={{ fontWeight: 600 }}>
                  {selectedEvent.title}
                </Typography>
                <IconButton
                  aria-label="close"
                  onClick={handleCloseModal}
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'text.primary',
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              
              <Divider sx={{ my: 2 }} />
              
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">Date & Time</Typography>
                  <Typography variant="body1" gutterBottom>
                    {formatEventDate(selectedEvent.start)}
                    {!selectedEvent.allDay && (
                      <>
                        <br />
                        {formatEventTime(selectedEvent.start)}
                        {selectedEvent.end && ` - ${formatEventTime(selectedEvent.end)}`}
                      </>
                    )}
                  </Typography>
                </Grid>
                
                {selectedEvent.extendedProps?.location && (
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2" color="text.secondary">Location</Typography>
                    <Typography variant="body1" gutterBottom>
                      {selectedEvent.extendedProps.location}
                    </Typography>
                  </Grid>
                )}
                
                {selectedEvent.extendedProps?.recurring && (
                  <Grid item xs={12}>
                    <Chip 
                      label={`Recurring: ${selectedEvent.extendedProps.recurring}`}
                      color="primary"
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                )}
              </Grid>
              
              {selectedEvent.extendedProps?.description && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Description
                  </Typography>
                  <Typography variant="body1">
                    {selectedEvent.extendedProps.description}
                  </Typography>
                </Box>
              )}
              
              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                <Button 
                  variant="outlined" 
                  onClick={handleCloseModal}
                  startIcon={<CloseIcon />}
                >
                  Close
                </Button>
                <Button 
                  variant="contained" 
                  color="primary"
                  onClick={() => {
                    // Add to calendar functionality
                    console.log('Add to calendar:', selectedEvent);
                  }}
                >
                  Add to Calendar
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Events;