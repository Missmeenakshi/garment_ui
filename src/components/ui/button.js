import React from 'react';

export function Button({ children, className = '', onClick, variant = 'default' }) {
  const base = 'inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-100',
  };
  return (
    <button className={`${base} ${variants[variant] || ''} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
