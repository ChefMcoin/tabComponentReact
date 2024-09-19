import React from 'react';
import Button from '../../../../../Components/Button';
import { useTabs } from '../../../../../ContextApi/TabProvider';
import { GiftOutlined, UsergroupDeleteOutlined } from '@ant-design/icons';
import {
  AppWindow,
  Bell,
  Briefcase,
  CircleUser,
  FolderClosed,
  Gift,
  GitFork,
  Hash,
  NotebookTabs,
  OctagonMinus,
  Shield,
  SlidersHorizontal,
  User,
  Volume2,
  Webhook,
} from 'lucide-react';

export default function MenuPartials({ activeTab, switchTab }) {
  return (
    <div className="flex flex-col py-3 px-2 items-start gap-1">
      <p className="px-3 mb-2 text-sm opacity-60">Workspace</p>
      <Button
        onClick={() => switchTab('Tab 1')}
        className={`flex w-full px-2 rounded-md text-sm font-bold mb-2 py-1 ${
          activeTab === 'Tab 1'
            ? 'bg-gray-200 text-black'
            : 'bg-white text-black'
        }`}
      >
        <span className="pr-3 opacity-60 ">
          <Briefcase size={18} />
        </span>{' '}
        General
      </Button>
      <Button
        className={`flex w-full px-2 rounded-md text-sm font-bold mb-2 py-1 ${
          activeTab === 'Tab 2'
            ? 'bg-gray-200 text-black'
            : 'bg-white text-black'
        }`}
        onClick={() => switchTab('Tab 2')}
      >
        <span className=" pr-3 opacity-60 ">
          {' '}
          <User size={18} />
        </span>{' '}
        Members
      </Button>
      <Button
        className={` flex w-full px-2 rounded-md text-sm font-bold mb-2 py-1 ${
          activeTab === 'Tab 3'
            ? 'bg-gray-200 text-black'
            : 'bg-white text-black'
        }`}
        onClick={() => switchTab('Tab 3')}
      >
        <span className="pr-3 opacity-60 ">
          {' '}
          <FolderClosed size={18} />
        </span>{' '}
        Groups
      </Button>
      <Button
        className={`flex w-full px-2 rounded-md text-sm font-bold mb-2 py-1 ${
          activeTab === 'Tab 4'
            ? 'bg-gray-200 text-black'
            : 'bg-white text-black'
        }`}
        onClick={() => switchTab('Tab 4')}
      >
        <span className=" pr-3 opacity-60 ">
          <Hash size={18} />
        </span>{' '}
        Phone Number
      </Button>
      <Button
        className={` flex w-full px-2 rounded-md text-sm font-bold mb-2 py-1 ${
          activeTab === 'Tab 5'
            ? 'bg-gray-200 text-black'
            : 'bg-white text-black'
        }`}
        onClick={() => switchTab('Tab 5')}
      >
        <span className="  pr-3 opacity-60 ">
          {' '}
          <AppWindow size={18} />
        </span>{' '}
        Plan & Billings
      </Button>
      <Button
        className={` flex w-full px-2 rounded-md text-sm font-bold mb-2 py-1 ${
          activeTab === 'Tab 6'
            ? 'bg-gray-200 text-black'
            : 'bg-white text-black'
        }`}
        onClick={() => switchTab('Tab 6')}
      >
        <span className=" pr-3 opacity-60 ">
          <Shield size={18} />
        </span>{' '}
        Trust
      </Button>
      <Button
        className={` flex w-full px-2 rounded-md text-sm font-bold mb-2 py-1 ${
          activeTab === 'Tab 7'
            ? 'bg-gray-200 text-black'
            : 'bg-white text-black'
        }`}
        onClick={() => switchTab('Tab 7')}
      >
        <span className=" pr-3 opacity-60 ">
          {' '}
          <NotebookTabs size={18} />
        </span>{' '}
        Contacts
      </Button>
      <Button
        className={`flex w-full px-2 rounded-md text-sm font-bold mb-2 py-1 ${
          activeTab === 'Tab 8'
            ? 'bg-gray-200 text-black'
            : 'bg-white text-black'
        }`}
        onClick={() => switchTab('Tab 8')}
      >
        <span className=" pr-3 opacity-60 ">
          {' '}
          <OctagonMinus size={18} />
        </span>{' '}
        Blocklist
      </Button>
      <Button
        className={` flex w-full px-2 rounded-md text-sm font-bold mb-2 py-1 ${
          activeTab === 'Tab 9'
            ? 'bg-gray-200 text-black'
            : 'bg-white text-black'
        }`}
        onClick={() => switchTab('Tab 9')}
      >
        <span className="  pr-3 opacity-60 ">
          {' '}
          <GitFork size={18} />
        </span>{' '}
        Integrations
      </Button>
      <Button
        className={` flex w-full px-2 rounded-md text-sm font-bold mb-2 py-1 ${
          activeTab === 'Tab 10'
            ? 'bg-gray-200 text-black'
            : 'bg-white text-black'
        }`}
        onClick={() => switchTab('Tab 10')}
      >
        <span className=" pr-3 opacity-60 ">
          {' '}
          <Webhook size={18} />
        </span>{' '}
        Webhooks
      </Button>
      <p className="px-3 mb-2 text-sm opacity-60 mt-5">Your Account</p>
      <Button
        className={` flex w-full px-2 rounded-md text-sm font-bold mb-2 py-1 ${
          activeTab === 'Tab 11'
            ? 'bg-gray-200 text-black'
            : 'bg-white text-black'
        }`}
        onClick={() => switchTab('Tab 11')}
      >
        <span className=" pr-3 opacity-60 ">
          {' '}
          <CircleUser size={18} />
        </span>{' '}
        Profile
      </Button>
      <Button
        className={` flex w-full px-2 rounded-md text-sm font-bold mb-2 py-1 ${
          activeTab === 'Tab 12'
            ? 'bg-gray-200 text-black'
            : 'bg-white text-black'
        }`}
        onClick={() => switchTab('Tab 12')}
      >
        <span className=" pr-3 opacity-60 ">
          {' '}
          <SlidersHorizontal size={18} />
        </span>{' '}
        Preference
      </Button>
      <Button
        className={` flex w-full px-2 rounded-md text-sm font-bold mb-2 py-1 ${
          activeTab === 'Tab 13'
            ? 'bg-gray-200 text-black'
            : 'bg-white text-black'
        }`}
        onClick={() => switchTab('Tab 13')}
      >
        <span className="  pr-3 opacity-60 ">
          {' '}
          <Volume2 size={18} />
        </span>{' '}
        Audio settings
      </Button>
      <Button
        className={` flex w-full px-2 rounded-md text-sm font-bold mb-2 py-1 ${
          activeTab === 'Tab 14'
            ? 'bg-gray-200 text-black'
            : 'bg-white text-black'
        }`}
        onClick={() => switchTab('Tab 14')}
      >
        <span className="pr-3 opacity-60 ">
          <Bell size={18} />
        </span>{' '}
        Notifications
      </Button>
      <Button
        className={`flex w-full px-2 rounded-sm text-sm font-bold mb-2 py-1  ${
          activeTab === 'Tab 15'
            ? 'bg-gray-200 text-black'
            : 'bg-white text-black'
        }`}
        onClick={() => switchTab('Tab 15')}
      >
        <span className="pr-3 opacity-60 ">
          {' '}
          <Gift size={18} />
        </span>{' '}
        Referrals
      </Button>
    </div>
  );
}
