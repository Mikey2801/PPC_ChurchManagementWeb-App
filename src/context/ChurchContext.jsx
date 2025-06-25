import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import api from '../services/api';

const ChurchContext = createContext();

export const useChurch = () => {
  return useContext(ChurchContext);
};

export const ChurchProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [ministries, setMinistries] = useState([]);
  const [members, setMembers] = useState([]);
  const [baptismalRecords, setBaptismalRecords] = useState([]);
  const [massSchedules, setMassSchedules] = useState([]);
  const [donations, setDonations] = useState([]);
  const [certificateRequests, setCertificateRequests] = useState([]);

  // Fetch all church data
  const fetchChurchData = async () => {
    if (!currentUser) return;
    
    try {
      setLoading(true);
      // Fetch data in parallel
      const [ministriesRes, membersRes, baptismRes, massRes, donationRes, certRes] = await Promise.all([
        api.get('/ministries'),
        api.get('/members'),
        api.get('/baptismal-records'),
        api.get('/mass-schedules'),
        api.get('/donations'),
        api.get('/certificate-requests')
      ]);

      setMinistries(ministriesRes.data);
      setMembers(membersRes.data);
      setBaptismalRecords(baptismRes.data);
      setMassSchedules(massRes.data);
      setDonations(donationRes.data);
      setCertificateRequests(certRes.data);
    } catch (error) {
      console.error('Error fetching church data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChurchData();
  }, [currentUser]);

  // Ministry functions
  const addMinistry = async (ministry) => {
    try {
      const res = await api.post('/ministries', ministry);
      setMinistries([...ministries, res.data]);
      return res.data;
    } catch (error) {
      console.error('Error adding ministry:', error);
      throw error;
    }
  };

  // Member functions
  const addMember = async (member) => {
    try {
      const res = await api.post('/members', member);
      setMembers([...members, res.data]);
      return res.data;
    } catch (error) {
      console.error('Error adding member:', error);
      throw error;
    }
  };

  // Baptismal records functions
  const addBaptismalRecord = async (record) => {
    try {
      const res = await api.post('/baptismal-records', record);
      setBaptismalRecords([...baptismalRecords, res.data]);
      return res.data;
    } catch (error) {
      console.error('Error adding baptismal record:', error);
      throw error;
    }
  };

  // Mass schedule functions
  const addMassSchedule = async (schedule) => {
    try {
      const res = await api.post('/mass-schedules', schedule);
      setMassSchedules([...massSchedules, res.data]);
      return res.data;
    } catch (error) {
      console.error('Error adding mass schedule:', error);
      throw error;
    }
  };

  // Donation functions
  const addDonation = async (donation) => {
    try {
      const res = await api.post('/donations', donation);
      setDonations([...donations, res.data]);
      return res.data;
    } catch (error) {
      console.error('Error adding donation:', error);
      throw error;
    }
  };

  // Certificate request functions
  const addCertificateRequest = async (request) => {
    try {
      const res = await api.post('/certificate-requests', request);
      setCertificateRequests([...certificateRequests, res.data]);
      return res.data;
    } catch (error) {
      console.error('Error adding certificate request:', error);
      throw error;
    }
  };

  const value = {
    loading,
    ministries,
    members,
    baptismalRecords,
    massSchedules,
    donations,
    certificateRequests,
    addMinistry,
    addMember,
    addBaptismalRecord,
    addMassSchedule,
    addDonation,
    addCertificateRequest,
    refreshData: fetchChurchData
  };

  return (
    <ChurchContext.Provider value={value}>
      {!loading && children}
    </ChurchContext.Provider>
  );
};

export default ChurchContext;
