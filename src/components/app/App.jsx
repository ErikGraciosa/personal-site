import React from 'react';
import ProjectList from '../projectCard/ProjectList';
import StaticData from '../staticData/StaticData';
import Footer from '../footer/Footer';
import './reset.css';
import './App.css';

export default function App() {
  return (
    <>
      <StaticData/>
      <ProjectList/>
      <Footer/>
    </>
  );
}
