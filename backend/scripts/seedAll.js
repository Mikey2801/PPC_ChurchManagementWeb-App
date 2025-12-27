import { query } from '../config/database.js';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Master seed script that runs all seeding operations in the correct order
 */
const seedAll = async () => {
  try {
    console.log('========================================');
    console.log('Starting database seeding...');
    console.log('========================================\n');

    // Import and run seed scripts in order
    console.log('Step 1: Seeding roles...\n');
    const { default: seedRoles } = await import('./seedRoles.js');
    
    // Wait a bit to ensure roles are committed
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('\nStep 2: Seeding users...\n');
    const { default: seedUsers } = await import('./seedUsers.js');
    
    console.log('\n========================================');
    console.log('All seeding completed successfully!');
    console.log('========================================');
    
    process.exit(0);
  } catch (error) {
    console.error('\n========================================');
    console.error('Seeding failed:', error.message);
    console.error('========================================');
    process.exit(1);
  }
};

// Since the imported scripts call process.exit, we need to run them differently
// Let's use child_process or require them sequentially

// Actually, let's modify the approach - we'll execute the logic directly
import { getClient } from '../config/database.js';
import { hashPassword } from '../utils/password.js';

const runSeedAll = async () => {
  try {
    console.log('========================================');
    console.log('Starting database seeding...');
    console.log('========================================\n');
    
    // Verify tables exist (quick check)
    try {
      await query('SELECT 1 FROM role LIMIT 1');
    } catch (error) {
      if (error.code === '42P01') {
        console.log('⚠️  WARNING: Database tables not found!');
        console.log('Please run "npm run migrate" first to create the tables.');
        console.log('Or run "npm run setup:db" to create tables and seed data.\n');
        process.exit(1);
      }
      throw error;
    }

    // Step 1: Seed roles
    console.log('Step 1: Seeding roles...\n');
    const roles = ['Admin', 'Treasurer', 'Member'];
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
        if (error.code !== '23505') {
          throw error;
        }
        console.log(`- Role '${roleName}' already exists, skipping...`);
      }
    }

    // Step 2: Seed users
    console.log('\nStep 2: Seeding users...\n');
    
    const client = await getClient();
    try {
      await client.query('BEGIN');

      // Get role IDs
      const adminRoleResult = await client.query(
        "SELECT role_id FROM role WHERE role_name = 'Admin'"
      );
      const treasurerRoleResult = await client.query(
        "SELECT role_id FROM role WHERE role_name = 'Treasurer'"
      );

      const adminRoleId = adminRoleResult.rows[0].role_id;
      const treasurerRoleId = treasurerRoleResult.rows[0].role_id;

      const adminPassword = 'admin123';
      const treasurerPassword = 'treasurer123';
      const adminPasswordHash = await hashPassword(adminPassword);
      const treasurerPasswordHash = await hashPassword(treasurerPassword);

      // Admin user
      console.log('Creating Admin user...');
      let adminMemberResult = await client.query(
        `SELECT member_id FROM member WHERE email_address = 'admin@church.local' LIMIT 1`
      );
      let adminMemberId;
      if (adminMemberResult.rows.length > 0) {
        adminMemberId = adminMemberResult.rows[0].member_id;
      } else {
        const memberResult = await client.query(
          `INSERT INTO member (last_name, first_name, email_address, address, birthdate, gender, contact_number)
           VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING member_id`,
          ['Admin', 'System', 'admin@church.local', 'Church Administration', '1990-01-01', 'M', '00000000000']
        );
        adminMemberId = memberResult.rows[0].member_id;
      }

      let adminUserResult = await client.query(
        `SELECT user_id FROM user_account WHERE email_address = 'admin@church.local' LIMIT 1`
      );
      let adminUserId;
      if (adminUserResult.rows.length > 0) {
        adminUserId = adminUserResult.rows[0].user_id;
        await client.query(`UPDATE user_account SET password_hash = $1 WHERE user_id = $2`, [adminPasswordHash, adminUserId]);
      } else {
        const userResult = await client.query(
          `INSERT INTO user_account (member_id, email_address, password_hash, is_active)
           VALUES ($1, $2, $3, $4) RETURNING user_id`,
          [adminMemberId, 'admin@church.local', adminPasswordHash, true]
        );
        adminUserId = userResult.rows[0].user_id;
      }
      await client.query(
        `INSERT INTO user_role (user_id, role_id) VALUES ($1, $2) ON CONFLICT (user_id, role_id) DO NOTHING`,
        [adminUserId, adminRoleId]
      );
      console.log('  ✓ Admin user created/updated');

      // Treasurer user
      console.log('Creating Treasurer user...');
      let treasurerMemberResult = await client.query(
        `SELECT member_id FROM member WHERE email_address = 'treasurer@church.local' LIMIT 1`
      );
      let treasurerMemberId;
      if (treasurerMemberResult.rows.length > 0) {
        treasurerMemberId = treasurerMemberResult.rows[0].member_id;
      } else {
        const memberResult = await client.query(
          `INSERT INTO member (last_name, first_name, email_address, address, birthdate, gender, contact_number)
           VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING member_id`,
          ['Treasurer', 'System', 'treasurer@church.local', 'Church Administration', '1990-01-01', 'M', '00000000000']
        );
        treasurerMemberId = memberResult.rows[0].member_id;
      }

      let treasurerUserResult = await client.query(
        `SELECT user_id FROM user_account WHERE email_address = 'treasurer@church.local' LIMIT 1`
      );
      let treasurerUserId;
      if (treasurerUserResult.rows.length > 0) {
        treasurerUserId = treasurerUserResult.rows[0].user_id;
        await client.query(`UPDATE user_account SET password_hash = $1 WHERE user_id = $2`, [treasurerPasswordHash, treasurerUserId]);
      } else {
        const userResult = await client.query(
          `INSERT INTO user_account (member_id, email_address, password_hash, is_active)
           VALUES ($1, $2, $3, $4) RETURNING user_id`,
          [treasurerMemberId, 'treasurer@church.local', treasurerPasswordHash, true]
        );
        treasurerUserId = userResult.rows[0].user_id;
      }
      await client.query(
        `INSERT INTO user_role (user_id, role_id) VALUES ($1, $2) ON CONFLICT (user_id, role_id) DO NOTHING`,
        [treasurerUserId, treasurerRoleId]
      );
      console.log('  ✓ Treasurer user created/updated');

      await client.query('COMMIT');
      
      console.log('\n========================================');
      console.log('All seeding completed successfully!');
      console.log('========================================');
      console.log('\nDefault credentials:');
      console.log('  Admin: admin@church.local / admin123');
      console.log('  Treasurer: treasurer@church.local / treasurer123');
      console.log('\n⚠️  WARNING: Change these passwords in production!');
      
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }

    process.exit(0);
  } catch (error) {
    console.error('\n========================================');
    console.error('Seeding failed:', error);
    console.error('========================================');
    process.exit(1);
  }
};

runSeedAll();

