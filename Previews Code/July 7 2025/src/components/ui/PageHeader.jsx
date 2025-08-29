import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

const PageHeader = ({ title, breadcrumbs = [], actions }) => {
  return (
    <div className="mb-6">
      {/* Breadcrumbs */}
      {breadcrumbs.length > 0 && (
        <nav className="flex mb-4" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="inline-flex items-center">
                {index > 0 && (
                  <FiChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                )}
                {index < breadcrumbs.length - 1 ? (
                  <Link
                    to={crumb.path}
                    className="text-sm font-medium text-gray-500 hover:text-green-600"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-sm font-medium text-gray-400">
                    {crumb.label}
                  </span>
                )}
              </li>
            )}
          </ol>
        </nav>
      )}
      
      {/* Title and Actions */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            {title}
          </h1>
          {breadcrumbs.length > 0 && (
            <p className="mt-2 text-sm text-gray-500">
              {breadcrumbs[breadcrumbs.length - 1].description || ''}
            </p>
          )}
        </div>
        
        {actions && (
          <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
            {Array.isArray(actions) ? (
              <div className="flex space-x-3">
                {actions.map((action, index) => (
                  <div key={index} className="ml-3">
                    {action}
                  </div>
                ))}
              </div>
            ) : (
              <div className="ml-3">
                {actions}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
  actions: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default PageHeader;
