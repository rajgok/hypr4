// src/App.tsx  
import React, { lazy, Suspense } from 'react';
import './App.css';
import useViewport from './components/useVPhook';

const MobileView = lazy(() => import('./components/USPmobile'));
const DesktopView = lazy(() => import('./components/USPdesktop'));


const App: React.FC = () => {
  const { width } = useViewport();
  const breakpoint = 868; // Define your breakpoint for mobile vs. desktop  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {width < breakpoint ? <MobileView /> : <DesktopView />}
    </Suspense>
  );
};

export default App;  
