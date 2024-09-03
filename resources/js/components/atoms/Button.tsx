
import React, { ReactNode, MouseEventHandler } from 'react';
import classNames from 'classnames';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, type = 'button' }) => (
  <button
  className={classNames(
    'px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none',
    className
  )}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
