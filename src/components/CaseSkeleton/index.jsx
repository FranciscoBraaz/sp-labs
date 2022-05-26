import React from 'react';
import './styles.scss';

export function CaseSkeleton() {
  const rows = Array.from(Array(4).keys());

  return (
    <div className="skeleton">
      <div className="skeleton__item skeleton__item--title" />
      {rows.map((row) => (
        <div key={row} className="skeleton__item skeleton__item--description" />
      ))}
    </div>
  );
}
