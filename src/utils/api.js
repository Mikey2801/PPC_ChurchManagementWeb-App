import axios from 'axios';

const API_BASE_URL = 'http://localhost/php-api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      // Handle different HTTP status codes
      const { status, data } = error.response;
      
      if (status === 401) {
        // Handle unauthorized access
        localStorage.removeItem('auth_token');
        window.location.href = '/login';
      } else if (status === 403) {
        console.error('Forbidden: You do not have permission to access this resource');
      } else if (status === 404) {
        console.error('Resource not found');
      } else if (status === 422) {
        // Handle validation errors
        return Promise.reject(data.errors || 'Validation failed');
      } else if (status >= 500) {
        console.error('Server error');
      }
      
      return Promise.reject(data.message || 'An error occurred');
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received from server');
      return Promise.reject('Unable to connect to the server. Please check your connection.');
    } else {
      // Something happened in setting up the request
      console.error('Error setting up request:', error.message);
      return Promise.reject('An error occurred while setting up the request');
    }
  }
);

// API methods
export const auth = {
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => api.post('/auth/logout'),
  me: () => api.get('/auth/me'),
};

export const members = {
  getAll: (params = {}) => api.get('/members', { params }),
  getById: (id) => api.get(`/members/${id}`),
  create: (data) => api.post('/members', data),
  update: (id, data) => api.put(`/members/${id}`, data),
  delete: (id) => api.delete(`/members/${id}`),
};

export const baptism = {
  getRecords: (params = {}) => api.get('/baptism/records', { params }),
  schedule: (data) => api.post('/baptism/schedule', data),
  getClasses: (params = {}) => api.get('/baptism/classes', { params }),
  createClass: (data) => api.post('/baptism/classes', data),
  updateClass: (id, data) => api.put(`/baptism/classes/${id}`, data),
  deleteClass: (id) => api.delete(`/baptism/classes/${id}`),
};

export const ministries = {
  getAll: (params = {}) => api.get('/ministries', { params }),
  getById: (id) => api.get(`/ministries/${id}`),
  create: (data) => api.post('/ministries', data),
  update: (id, data) => api.put(`/ministries/${id}`, data),
  delete: (id) => api.delete(`/ministries/${id}`),
  getMembers: (id) => api.get(`/ministries/${id}/members`),
  addMember: (ministryId, memberId) => api.post(`/ministries/${ministryId}/members/${memberId}`),
  removeMember: (ministryId, memberId) => api.delete(`/ministries/${ministryId}/members/${memberId}`),
};

export const massSchedule = {
  getAll: (params = {}) => api.get('/mass-schedule', { params }),
  getById: (id) => api.get(`/mass-schedule/${id}`),
  create: (data) => api.post('/mass-schedule', data),
  update: (id, data) => api.put(`/mass-schedule/${id}`, data),
  delete: (id) => api.delete(`/mass-schedule/${id}`),
  getAttendance: (id) => api.get(`/mass-schedule/${id}/attendance`),
  recordAttendance: (id, data) => api.post(`/mass-schedule/${id}/attendance`, data),
};

export const donations = {
  getAll: (params = {}) => api.get('/donations', { params }),
  create: (data) => api.post('/donations', data),
  getSummary: (params = {}) => api.get('/donations/summary', { params }),
  getTypes: () => api.get('/donation-types'),
};

export const certificates = {
  request: (data) => api.post('/certificates/request', data),
  getAllRequests: (params = {}) => api.get('/certificates/requests', { params }),
  getRequest: (id) => api.get(`/certificates/requests/${id}`),
  updateRequestStatus: (id, status) => api.put(`/certificates/requests/${id}/status`, { status }),
  generate: (type, data) => api.post(`/certificates/generate/${type}`, data, { responseType: 'blob' }),
};

export const reports = {
  attendance: (params = {}) => api.get('/reports/attendance', { params }),
  donations: (params = {}) => api.get('/reports/donations', { params }),
  membership: (params = {}) => api.get('/reports/membership', { params }),
};

export default api;
