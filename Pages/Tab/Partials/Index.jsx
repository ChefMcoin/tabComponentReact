import React from 'react';
import MenuComponent from './MenuComponents/Index';
import TabContent from './AllContent/TabContent';

export default function TabPartails({ activeTab, switchTab }) {
  return (
    <div className="flex">
      <MenuComponent activeTab={activeTab} switchTab={switchTab} />
      <TabContent activeTab={activeTab} />
    </div>
  );
}
