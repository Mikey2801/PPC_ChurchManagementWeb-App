import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/sign-in-bg.png';
import logo from '../assets/PPC_logo-removebg-preview.png';

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    lastName: '',
    firstName: '',
    middleName: '',
    birthDate: '',
    gender: '',
    // Address
    street: '',
    townCity: '',
    province: '',
    // Contact
    phoneNumber: '',
    emailAddress: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration data:', formData);
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="input"
        />
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="input"
        />
        <input
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
          placeholder="Middle Name"
          className="input"
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            placeholder="Birth of Date"
            className="input"
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="input"
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 mt-8">Current Address</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          placeholder="Street/Barangay"
          className="input"
        />
        <input
          type="text"
          name="townCity"
          value={formData.townCity}
          onChange={handleChange}
          placeholder="Town/City"
          className="input"
        />
        <input
          type="text"
          name="province"
          value={formData.province}
          onChange={handleChange}
          placeholder="Province"
          className="input"
        />
      </div>

      <h2 className="text-2xl font-bold mb-6 mt-8">Contacts</h2>
      <div className="space-y-4">
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          className="input"
        />
        <input
          type="email"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          placeholder="Email Address (optional)"
          className="input"
        />
      </div>

      <div className="flex justify-between mt-8">
        <Link to="/login" className="btn btn-outline">
          Previous
        </Link>
        <button
          type="button"
          onClick={() => setStep(2)}
          className="btn btn-primary"
        >
          Next
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Create an account</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="input"
        />
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="input"
        />
        <input
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
          placeholder="Middle Name"
          className="input"
        />
      </div>

      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="btn btn-outline"
        >
          Previous
        </button>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Register
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex">
      {/* Left side - Background Image */}
      <div 
        className="hidden lg:block lg:w-2/3 relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/50 to-teal-400/50">
          <div className="flex flex-col items-center justify-center h-full text-white">
            <img src={logo} alt="PPC Logo" className="w-96 mb-8" />
            <h1 className="text-5xl font-bold mb-4">Pamukid Presbyterian Church</h1>
          </div>
        </div>
      </div>

      {/* Right side - Registration Form */}
      <div className="w-full lg:w-1/3 flex flex-col justify-center p-8 lg:p-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Registration Form</h2>
          <p className="text-gray-600">Please fill out the following information to register</p>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 ? renderStep1() : renderStep2()}
        </form>
      </div>
    </div>
  );
};

export default Register; 