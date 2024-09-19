import React from 'react';
import { useTabs } from '../../../../ContextApi/TabProvider';
import ContentComponent from '../ContentComponent/Index';

const TabContent = ({ activeTab }) => {
  // const activeTab = useTabs();
  // const { activeTab } = useTabs(); // Get activeTab from context
  console.log('active tab:', activeTab);
  const tabContent = [
    {
      id: 'Tab 1',
      title: 'Tab 1 Content',
      content: 'This is the content for Tab 1.',
    },
    {
      id: 'Tab 2',
      title: 'Tab 2 Content',
      content: 'This is the content for Tab 2.',
    },
    {
      id: 'Tab 3',
      title: 'Tab 3 Content',
      content: 'This is the content for Tab 3.',
    },
    {
      id: 'Tab 4',
      title: '',
      content: <ContentComponent />,
    },
    {
      id: 'Tab 5',
      title: 'Tab 5 Content',
      content: 'This is the content for Tab 5.',
    },
    {
      id: 'Tab 6',
      title: 'Tab 6 Content',
      content: 'This is the content for Tab 6.',
    },
    {
      id: 'Tab 7',
      title: 'Tab 7 Content',
      content: 'This is the content for Tab 7.',
    },
    {
      id: 'Tab 8',
      title: 'Tab 8 Content',
      content: 'This is the content for Tab 8.',
    },
    {
      id: 'Tab 9',
      title: 'Tab 9 Content',
      content: 'This is the content for Tab 9.',
    },
    {
      id: 'Tab 10',
      title: 'Tab 10 Content',
      content: 'This is the content for Tab 10.',
    },
    {
      id: 'Tab 11',
      title: 'Tab 11 Content',
      content: 'This is the content for Tab 11.',
    },
    {
      id: 'Tab 12',
      title: 'Tab 12 Content',
      content: 'This is the content for Tab 12.',
    },
    {
      id: 'Tab 13',
      title: 'Tab 13 Content',
      content: 'This is the content for Tab 13.',
    },
    {
      id: 'Tab 14',
      title: 'Tab 14 Content',
      content: 'This is the content for Tab 14.',
    },
    {
      id: 'Tab 15',
      title: 'Tab 15 Content',
      content: 'This is the content for Tab 15.',
    },
  ];

  return (
    <div className=" w-full">
      {tabContent.map(tab => {
        return (
          activeTab === tab.id && (
            <div key={tab.id} className="border-gray-200 border-2">
              <h2>{tab.title}</h2>
              <p>{tab.content}</p>
            </div>
          )
        );
      })}
    </div>
  );
};

export default TabContent;
