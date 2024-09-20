import React, { useState } from 'react';
import Button from '../../../../../../Components/Button';
import General from '../General/Index';
import International from '../International/Index';
import Record from '../Record/Index';
import { MessageSquareMore, PhoneCall, User, Workflow } from 'lucide-react';

export default function Details() {
  const [activeTab, setActiveTab] = useState('Tab 1');

  const others = (
    <div>
      <General />
      <International />
      <Record />
    </div>
  );

  const eachTab = [
    {
      id: 'Tab 1',
      content: others,
    },
    {
      id: 'Tab 2',
      content: 'This is the message page',
    },
    {
      id: 'Tab 3',
      content: 'This is the Users page',
    },
    {
      id: 'Tab 4',
      content: 'This is the integration page',
    },
  ];

  const switchTab = tab => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="flex w-full justify-between  border-2 rounded-md bg-gray-200 mt-3">
        <Button
          className={`border-2 w-2/6 rounded-md ${
            activeTab === 'Tab 1'
              ? 'bg-white text-purple-800 font-bold'
              : 'bg-gray-200'
          }`}
          onClick={() => switchTab('Tab 1')}
        >
          <PhoneCall size={18} className="inline mr-2 mb-2 mt-1 " />
          Calls
        </Button>
        <Button
          className={`border-1 w-2/6 rounded-md  ${
            activeTab === 'Tab 2' ? 'bg-white text-purple-800 font-bold' : ''
          }`}
          onClick={() => switchTab('Tab 2')}
        >
          <MessageSquareMore className="inline mr-2 mb-2 mt-1 " /> Messages
        </Button>
        <Button
          className={`border-2 w-2/6 rounded-md ${
            activeTab === 'Tab 3'
              ? 'bg-white text-purple-800 font-bold'
              : 'bg-gray-200'
          }`}
          onClick={() => switchTab('Tab 3')}
        >
          <User className="inline mr-2 mb-2 mt-1 " /> Users
        </Button>
        <Button
          className={`border-2 w-2/6 rounded-md ${
            activeTab === 'Tab 4'
              ? 'bg-white text-purple-800 font-bold'
              : 'bg-gray-200'
          }`}
          onClick={() => switchTab('Tab 4')}
        >
          <Workflow className="inline mr-2 mb-2 mt-1 " /> Integration
        </Button>
      </div>
      {eachTab.map(tab => {
        return activeTab === tab.id && <h1 key={tab.id}>{tab.content}</h1>;
      })}
    </>
  );
}
