import React, { useState } from 'react';
import { Box, Typography, Button, Dialog, DialogContent, DialogActions } from '@mui/material';
import Calendar from '../components/Calendar/Calendar';
import { format } from 'date-fns';

const MassAndEventSchedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [confirmedAttendance, setConfirmedAttendance] = useState(null);

  // Example highlighted dates (you would typically get these from your backend)
  const highlightedDates = [
    new Date(2024, 0, 7), // January 7th
    new Date(2024, 0, 14), // January 14th
    new Date(2024, 1, 14), // February 14th
  ];

  // Example event details (you would get this from your backend based on the selected date)
  const getEventDetails = (date) => {
    if (!date) return null;
    
    // Example event data
    return {
      type: format(date, 'EEEE'),
      time: format(date, 'EEEE') === 'Sunday' ? '09:00 am - 10:00 am' : '05:00 pm - 08:00 pm',
      pastor: format(date, 'EEEE') === 'Sunday' ? 'Pastor Kirby ajero Preza' : undefined
    };
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleMonthChange = (date) => {
    setCurrentDate(date);
  };

  const handleAttend = () => {
    setConfirmedAttendance(selectedDate);
  };

  const handleCancel = () => {
    setShowCancelDialog(true);
  };

  const handleConfirmCancel = () => {
    setConfirmedAttendance(null);
    setShowCancelDialog(false);
  };

  const eventDetails = getEventDetails(selectedDate);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 3, textAlign: 'center', fontWeight: 'medium' }}>
        Mass and Event Schedule
      </Typography>

      <Calendar
        currentDate={currentDate}
        selectedDate={selectedDate}
        highlightedDates={highlightedDates}
        onDateSelect={handleDateSelect}
        onMonthChange={handleMonthChange}
      />

      {!selectedDate && (
        <Typography 
          sx={{ 
            mt: 2, 
            textAlign: 'center',
            color: 'text.secondary'
          }}
        >
          Tap on a <span style={{ color: '#6bac7e', fontWeight: 'bold' }}>highlighted</span> date to view the schedule
        </Typography>
      )}

      {selectedDate && eventDetails && (
        <Box 
          sx={{ 
            mt: 3,
            p: 3,
            bgcolor: '#f8fff9',
            borderRadius: 4,
            maxWidth: 400,
            mx: 'auto'
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            {confirmedAttendance ? 'Attendance' : 'Event Schedule'}
          </Typography>
          
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'medium' }}>
            {eventDetails.type}
          </Typography>
          
          {eventDetails.pastor && (
            <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
              {eventDetails.pastor}
            </Typography>
          )}
          
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
            ({eventDetails.time})
          </Typography>

          {confirmedAttendance ? (
            <>
              <Typography sx={{ mb: 2 }}>
                Attendance confirmed for Mass
                <br />
                On
                <br />
                {format(confirmedAttendance, 'yyyy-MM-dd')}
              </Typography>
              <Button
                variant="outlined"
                onClick={handleCancel}
                sx={{
                  bgcolor: 'grey.300',
                  color: 'text.primary',
                  '&:hover': {
                    bgcolor: 'grey.400'
                  }
                }}
              >
                cancel
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              onClick={handleAttend}
              sx={{
                bgcolor: '#e8f5e9',
                color: '#2e7d32',
                '&:hover': {
                  bgcolor: '#c8e6c9'
                }
              }}
            >
              Attend
            </Button>
          )}
        </Box>
      )}

      <Button
        variant="contained"
        color="primary"
        sx={{ 
          mt: 3,
          display: 'block',
          mx: 'auto',
          bgcolor: '#6bac7e',
          '&:hover': {
            bgcolor: '#5a9b6d'
          }
        }}
        onClick={() => window.history.back()}
      >
        Back
      </Button>

      {/* Cancel Confirmation Dialog */}
      <Dialog
        open={showCancelDialog}
        onClose={() => setShowCancelDialog(false)}
        PaperProps={{
          sx: {
            borderRadius: 2,
            maxWidth: 320
          }
        }}
      >
        <DialogContent>
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
            Cancel Attendance?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
          <Button
            onClick={() => setShowCancelDialog(false)}
            sx={{
              bgcolor: 'grey.300',
              color: 'text.primary',
              '&:hover': {
                bgcolor: 'grey.400'
              },
              mr: 2
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirmCancel}
            sx={{
              bgcolor: '#e8f5e9',
              color: '#2e7d32',
              '&:hover': {
                bgcolor: '#c8e6c9'
              }
            }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MassAndEventSchedule; 