import React from 'react';
import MenuPartials from './Partials/Index';

export default function MenuComponent({ activeTab, switchTab }) {
  return (
    <div className="w-1/6 min-h-screen">
      <MenuPartials activeTab={activeTab} switchTab={switchTab} />
    </div>
  );
}
