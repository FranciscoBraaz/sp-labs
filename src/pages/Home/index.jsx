import React from 'react';
import { Banner } from '../../components/Banner';
import { Cases } from '../../components/Cases';
import { Menu } from '../../components/Menu';

export function Home() {
  return (
    <div>
      <Menu />
      <Banner />
      <Cases />
    </div>
  );
}
