import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Card = ({
  children,
  title,
  subtitle,
  headerAction,
  footer,
  className = '',
  noPadding = false,
  hoverable = false,
  rounded = 'lg',
  shadow = 'sm',
  border = false,
  ...props
}) => {
  const cardClasses = classNames(
    'bg-white',
    {
      'rounded-lg': rounded === 'lg',
      'rounded-md': rounded === 'md',
      'rounded-xl': rounded === 'xl',
      'rounded-full': rounded === 'full',
      'shadow-sm': shadow === 'sm',
      'shadow': shadow === 'md',
      'shadow-md': shadow === 'lg',
      'shadow-lg': shadow === 'xl',
      'shadow-none': shadow === 'none',
      'border border-gray-200': border,
      'transition-shadow duration-200 hover:shadow-md': hoverable,
    },
    className
  );

  const paddingClass = noPadding ? '' : 'p-6';
  const headerPaddingClass = noPadding ? 'px-6 pt-6' : '';
  const bodyPaddingClass = noPadding ? '' : 'px-6';
  const footerPaddingClass = noPadding ? 'px-6 pb-6' : '';

  return (
    <div className={cardClasses} {...props}>
      {(title || subtitle || headerAction) && (
        <div className={classNames('flex items-center justify-between mb-4', headerPaddingClass)}>
          <div>
            {title && (
              <h3 className="text-lg font-medium text-gray-900">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="mt-1 text-sm text-gray-500">
                {subtitle}
              </p>
            )}
          </div>
          {headerAction && <div>{headerAction}</div>}
        </div>
      )}
      
      <div className={classNames('flex-1', bodyPaddingClass, {
        [paddingClass]: !title && !subtitle && !headerAction && !footer
      })}>
        {children}
      </div>
      
      {footer && (
        <div className={classNames('mt-4 pt-4 border-t border-gray-200', footerPaddingClass)}>
          {footer}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  headerAction: PropTypes.node,
  footer: PropTypes.node,
  className: PropTypes.string,
  noPadding: PropTypes.bool,
  hoverable: PropTypes.bool,
  rounded: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'full']),
  shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
  border: PropTypes.bool,
};

export default Card;
