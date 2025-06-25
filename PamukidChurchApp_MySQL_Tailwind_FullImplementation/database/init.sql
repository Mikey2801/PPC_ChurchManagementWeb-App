
-- MySQL schema for PamukidChurchApp
CREATE DATABASE IF NOT EXISTS churchdb;
USE churchdb;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('member', 'admin') DEFAULT 'member',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- More tables like baptism_events, class_requests, certificates, etc.
