import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/sign-in-bg.png';
import logo from '../assets/PPC_logo-removebg-preview.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('Member');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password, userType });
  };

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

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/3 flex flex-col justify-center p-8 lg:p-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Login</h2>
          <p className="text-gray-600">Welcome back! Please enter your details.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* User Type Selection */}
          <div>
            <label className="label" htmlFor="userType">
              User Type
            </label>
            <select
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="input"
            >
              <option value="Member">Member</option>
              <option value="Admin">Admin</option>
              <option value="Pastor">Pastor</option>
            </select>
          </div>

          {/* Username/Email Field */}
          <div>
            <label className="label" htmlFor="email">
              Username
            </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="Enter your username"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                Remember me?
              </label>
            </div>
            <Link to="/forgot-password" className="text-sm text-green-600 hover:text-green-500">
              Forgot your password?
            </Link>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-full py-3">
            Login
          </button>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-green-600 hover:text-green-500 font-medium">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login; 