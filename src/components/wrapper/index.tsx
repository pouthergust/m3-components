import React from 'react';
import './style.css';

function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="wrapperMyLocation">{children}</div>;
}

export default Wrapper;