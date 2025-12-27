import { query } from '../config/database.js';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Create all required database tables
 */
const createTables = async () => {
  try {
    console.log('========================================');
    console.log('Creating database tables...');
    console.log('========================================\n');

    // Create member table
    console.log('Creating member table...');
    await query(`
      CREATE TABLE IF NOT EXISTS member (
        member_id BIGSERIAL PRIMARY KEY,
        last_name VARCHAR(30),
        first_name VARCHAR(30),
        middle_name VARCHAR(30),
        birthdate DATE,
        gender CHAR(1),
        contact_number VARCHAR(11),
        email_address VARCHAR(50),
        address TEXT
      )
    `);
    console.log('✓ Member table created');

    // Create role table
    console.log('Creating role table...');
    await query(`
      CREATE TABLE IF NOT EXISTS role (
        role_id BIGSERIAL PRIMARY KEY,
        role_name VARCHAR(30) UNIQUE NOT NULL
      )
    `);
    console.log('✓ Role table created');

    // Create user_account table
    console.log('Creating user_account table...');
    await query(`
      CREATE TABLE IF NOT EXISTS user_account (
        user_id BIGSERIAL PRIMARY KEY,
        member_id BIGINT UNIQUE REFERENCES member(member_id) ON DELETE CASCADE,
        email_address VARCHAR(50) UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        is_active BOOLEAN DEFAULT TRUE
      )
    `);
    console.log('✓ User_account table created');

    // Create user_role table (many-to-many relationship)
    console.log('Creating user_role table...');
    await query(`
      CREATE TABLE IF NOT EXISTS user_role (
        user_id BIGINT REFERENCES user_account(user_id) ON DELETE CASCADE,
        role_id BIGINT REFERENCES role(role_id) ON DELETE CASCADE,
        PRIMARY KEY (user_id, role_id)
      )
    `);
    console.log('✓ User_role table created');

    console.log('\n========================================');
    console.log('All tables created successfully!');
    console.log('========================================\n');

    process.exit(0);
  } catch (error) {
    console.error('\n========================================');
    console.error('Error creating tables:', error.message);
    console.error('========================================');
    process.exit(1);
  }
};

// Run the function
createTables();

