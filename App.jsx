import './App.css';
import { TabProvider } from './ContextApi/TabProvider';
import PagesTab from './Pages/Index';
import { useState } from 'react';
// import TabContent from './Pages/Tab/Partials/AllContent/TabContent';

function App() {
  const [activeTab, setActiveTab] = useState('Tab 1');

  const switchTab = tab => {
    setActiveTab(tab);
  };
  return (
    <>
      <TabProvider>
        <PagesTab activeTab={activeTab} switchTab={switchTab} />
      </TabProvider>
    </>
  );
}

export default App;
