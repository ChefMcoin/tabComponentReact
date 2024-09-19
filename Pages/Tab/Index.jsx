import React from 'react';
import TabPartails from './Partials/Index';

export default function Tab({ activeTab, switchTab }) {
  return (
    <div>
      <TabPartails activeTab={activeTab} switchTab={switchTab} />
    </div>
  );
}
