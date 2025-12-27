import { query } from '../config/database.js';

/**
 * Middleware to check if user has required role(s)
 * Must be used after authenticate middleware
 * @param {string|string[]} allowedRoles - Single role name or array of role names
 */
export const requireRole = (allowedRoles) => {
  // Convert single role to array for consistent handling
  const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];

  return async (req, res, next) => {
    try {
      // Ensure user is authenticated (should be set by authenticate middleware)
      if (!req.user || !req.user.user_id) {
        return res.status(401).json({
          success: false,
          message: 'Authentication required',
        });
      }

      const userId = req.user.user_id;

      // Query user's roles from database
      const result = await query(
        `SELECT r.role_name 
         FROM user_role ur
         JOIN role r ON ur.role_id = r.role_id
         WHERE ur.user_id = $1`,
        [userId]
      );

      const userRoles = result.rows.map(row => row.role_name);

      // Check if user has any of the required roles
      const hasRequiredRole = roles.some(role => userRoles.includes(role));

      if (!hasRequiredRole) {
        return res.status(403).json({
          success: false,
          message: `Access denied. Required role(s): ${roles.join(', ')}`,
        });
      }

      // Attach user roles to request object for use in route handlers
      req.user.roles = userRoles;

      // Continue to next middleware or route handler
      next();
    } catch (error) {
      console.error('Error in requireRole middleware:', error);
      return res.status(500).json({
        success: false,
        message: 'Error checking user permissions',
      });
    }
  };
};

/**
 * Middleware to check if user has any of the specified roles
 * This is an alias for requireRole for clarity
 */
export const requireAnyRole = requireRole;

/**
 * Middleware to check if user has all of the specified roles
 * @param {string[]} requiredRoles - Array of role names (all must be present)
 */
export const requireAllRoles = (requiredRoles) => {
  return async (req, res, next) => {
    try {
      if (!req.user || !req.user.user_id) {
        return res.status(401).json({
          success: false,
          message: 'Authentication required',
        });
      }

      const userId = req.user.user_id;

      // Query user's roles from database
      const result = await query(
        `SELECT r.role_name 
         FROM user_role ur
         JOIN role r ON ur.role_id = r.role_id
         WHERE ur.user_id = $1`,
        [userId]
      );

      const userRoles = result.rows.map(row => row.role_name);

      // Check if user has ALL required roles
      const hasAllRoles = requiredRoles.every(role => userRoles.includes(role));

      if (!hasAllRoles) {
        return res.status(403).json({
          success: false,
          message: `Access denied. Required all roles: ${requiredRoles.join(', ')}`,
        });
      }

      req.user.roles = userRoles;
      next();
    } catch (error) {
      console.error('Error in requireAllRoles middleware:', error);
      return res.status(500).json({
        success: false,
        message: 'Error checking user permissions',
      });
    }
  };
};

