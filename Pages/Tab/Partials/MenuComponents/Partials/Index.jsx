import React from 'react';
import MenuButton from './MenuButton';

export default function MenuPartials({ activeTab, switchTab }) {
  return (
    <div className="flex flex-col py-3 px-2 items-start gap-1">
      <p className="px-3 mb-2 text-sm opacity-60">Workspace</p>
      <MenuButton activeTab={activeTab} switchTab={switchTab} />
    </div>
  );
}
