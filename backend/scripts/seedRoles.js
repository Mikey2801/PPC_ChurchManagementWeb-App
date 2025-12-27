import { query } from '../config/database.js';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Seed the role table with default roles: Admin, Treasurer, Member
 */
const seedRoles = async () => {
  try {
    console.log('Starting role seeding...');

    // Define the roles to insert
    const roles = ['Admin', 'Treasurer', 'Member'];

    // Insert each role (using ON CONFLICT to avoid errors if role already exists)
    for (const roleName of roles) {
      try {
        await query(
          `INSERT INTO role (role_name) 
           VALUES ($1) 
           ON CONFLICT (role_name) DO NOTHING`,
          [roleName]
        );
        console.log(`✓ Role '${roleName}' seeded successfully`);
      } catch (error) {
        // Check if it's a unique constraint violation (role already exists)
        if (error.code === '23505') {
          console.log(`- Role '${roleName}' already exists, skipping...`);
        } else {
          throw error;
        }
      }
    }

    console.log('Role seeding completed successfully!');
    
    // Verify the roles were inserted
    const result = await query('SELECT role_id, role_name FROM role ORDER BY role_name');
    console.log('\nCurrent roles in database:');
    result.rows.forEach(row => {
      console.log(`  - ${row.role_name} (ID: ${row.role_id})`);
    });

    process.exit(0);
  } catch (error) {
    console.error('Error seeding roles:', error);
    process.exit(1);
  }
};

// Run the seed function
seedRoles();

