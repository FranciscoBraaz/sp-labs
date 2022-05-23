import React from 'react';
import './styles.css';

export function CaseSkeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton__item skeleton__item--title" />
      <div className="skeleton__item skeleton__item--description" />
      <div className="skeleton__item skeleton__item--description" />
      <div className="skeleton__item skeleton__item--description" />
      <div className="skeleton__item skeleton__item--description" />
    </div>
  );
}
