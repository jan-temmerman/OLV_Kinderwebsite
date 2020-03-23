import React from 'react';
import { useLocation } from 'react-router-dom';

export default function BackButton() {
  const location = useLocation();
  return (
    <>
      <a href={`/${location.pathname.split('/')[1]}/spelletjes`} className="backButton"><img src="/homepage/terug.svg" alt="Ga terug" /></a>
    </>
  );
}
