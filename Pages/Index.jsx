import React from 'react';
import Tab from './Tab/Index';
import TabContent from './Tab/Partials/AllContent/TabContent';

export default function PagesTab({ switchTab, activeTab }) {
  return (
    <div>
      <Tab activeTab={activeTab} switchTab={switchTab} />
    </div>
  );
}
