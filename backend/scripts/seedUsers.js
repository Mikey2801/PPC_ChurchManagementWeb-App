import { query, getClient } from '../config/database.js';
import { hashPassword } from '../utils/password.js';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Seed initial admin and treasurer users
 * Default passwords: 'admin123' and 'treasurer123' (should be changed in production)
 */
const seedUsers = async () => {
  try {
    console.log('Starting user seeding...');

    const client = await getClient();

    try {
      // Start transaction
      await client.query('BEGIN');

      // Get role IDs
      const adminRoleResult = await client.query(
        "SELECT role_id FROM role WHERE role_name = 'Admin'"
      );
      const treasurerRoleResult = await client.query(
        "SELECT role_id FROM role WHERE role_name = 'Treasurer'"
      );

      if (adminRoleResult.rows.length === 0) {
        throw new Error('Admin role not found. Please run seedRoles.js first.');
      }
      if (treasurerRoleResult.rows.length === 0) {
        throw new Error('Treasurer role not found. Please run seedRoles.js first.');
      }

      const adminRoleId = adminRoleResult.rows[0].role_id;
      const treasurerRoleId = treasurerRoleResult.rows[0].role_id;

      // Default passwords (should be changed in production!)
      const adminPassword = 'admin123';
      const treasurerPassword = 'treasurer123';

      // Hash passwords
      const adminPasswordHash = await hashPassword(adminPassword);
      const treasurerPasswordHash = await hashPassword(treasurerPassword);

      // Create Admin user
      console.log('\nCreating Admin user...');
      
      // First, check if admin member already exists
      let adminMemberResult = await client.query(
        `SELECT member_id FROM member 
         WHERE email_address = 'admin@church.local' 
         LIMIT 1`
      );

      let adminMemberId;
      if (adminMemberResult.rows.length > 0) {
        adminMemberId = adminMemberResult.rows[0].member_id;
        console.log('  - Admin member already exists');
      } else {
        // Create admin member
        const memberResult = await client.query(
          `INSERT INTO member (
            last_name, first_name, middle_name, 
            birthdate, gender, contact_number, 
            email_address, address
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
          RETURNING member_id`,
          [
            'Admin',
            'System',
            '',
            '1990-01-01',
            'M',
            '00000000000',
            'admin@church.local',
            'Church Administration'
          ]
        );
        adminMemberId = memberResult.rows[0].member_id;
        console.log('  ✓ Admin member created');
      }

      // Create or update admin user_account
      let adminUserResult = await client.query(
        `SELECT user_id FROM user_account WHERE email_address = 'admin@church.local' LIMIT 1`
      );

      let adminUserId;
      if (adminUserResult.rows.length > 0) {
        adminUserId = adminUserResult.rows[0].user_id;
        // Update password hash
        await client.query(
          `UPDATE user_account SET password_hash = $1 WHERE user_id = $2`,
          [adminPasswordHash, adminUserId]
        );
        console.log('  ✓ Admin user account updated');
      } else {
        // Create admin user_account
        const userResult = await client.query(
          `INSERT INTO user_account (member_id, email_address, password_hash, is_active)
           VALUES ($1, $2, $3, $4)
           RETURNING user_id`,
          [adminMemberId, 'admin@church.local', adminPasswordHash, true]
        );
        adminUserId = userResult.rows[0].user_id;
        console.log('  ✓ Admin user account created');
      }

      // Assign Admin role
      await client.query(
        `INSERT INTO user_role (user_id, role_id)
         VALUES ($1, $2)
         ON CONFLICT (user_id, role_id) DO NOTHING`,
        [adminUserId, adminRoleId]
      );
      console.log('  ✓ Admin role assigned');

      // Create Treasurer user
      console.log('\nCreating Treasurer user...');
      
      let treasurerMemberResult = await client.query(
        `SELECT member_id FROM member 
         WHERE email_address = 'treasurer@church.local' 
         LIMIT 1`
      );

      let treasurerMemberId;
      if (treasurerMemberResult.rows.length > 0) {
        treasurerMemberId = treasurerMemberResult.rows[0].member_id;
        console.log('  - Treasurer member already exists');
      } else {
        // Create treasurer member
        const memberResult = await client.query(
          `INSERT INTO member (
            last_name, first_name, middle_name, 
            birthdate, gender, contact_number, 
            email_address, address
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
          RETURNING member_id`,
          [
            'Treasurer',
            'System',
            '',
            '1990-01-01',
            'M',
            '00000000000',
            'treasurer@church.local',
            'Church Administration'
          ]
        );
        treasurerMemberId = memberResult.rows[0].member_id;
        console.log('  ✓ Treasurer member created');
      }

      // Create or update treasurer user_account
      let treasurerUserResult = await client.query(
        `SELECT user_id FROM user_account WHERE email_address = 'treasurer@church.local' LIMIT 1`
      );

      let treasurerUserId;
      if (treasurerUserResult.rows.length > 0) {
        treasurerUserId = treasurerUserResult.rows[0].user_id;
        // Update password hash
        await client.query(
          `UPDATE user_account SET password_hash = $1 WHERE user_id = $2`,
          [treasurerPasswordHash, treasurerUserId]
        );
        console.log('  ✓ Treasurer user account updated');
      } else {
        // Create treasurer user_account
        const userResult = await client.query(
          `INSERT INTO user_account (member_id, email_address, password_hash, is_active)
           VALUES ($1, $2, $3, $4)
           RETURNING user_id`,
          [treasurerMemberId, 'treasurer@church.local', treasurerPasswordHash, true]
        );
        treasurerUserId = userResult.rows[0].user_id;
        console.log('  ✓ Treasurer user account created');
      }

      // Assign Treasurer role
      await client.query(
        `INSERT INTO user_role (user_id, role_id)
         VALUES ($1, $2)
         ON CONFLICT (user_id, role_id) DO NOTHING`,
        [treasurerUserId, treasurerRoleId]
      );
      console.log('  ✓ Treasurer role assigned');

      // Commit transaction
      await client.query('COMMIT');
      
      console.log('\nUser seeding completed successfully!');
      console.log('\nDefault credentials:');
      console.log('  Admin: admin@church.local / admin123');
      console.log('  Treasurer: treasurer@church.local / treasurer123');
      console.log('\n⚠️  WARNING: Change these passwords in production!');
      
    } catch (error) {
      // Rollback transaction on error
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }

    process.exit(0);
  } catch (error) {
    console.error('Error seeding users:', error);
    process.exit(1);
  }
};

// Run the seed function
seedUsers();

