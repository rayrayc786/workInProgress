import React from 'react';
import Header from '../Header/Header';
import DynamicBreadcrumb from '../DynamicBreadCrumb/DynamicBreadCrumb';

const Layout = ({ children }) => {
  return (
    <div className='px-4 sm:px-6 md:px-12 lg:px-20 xl:px-[100px] 2xl:px-[150px]'>
      {/* Common Header */}
      <Header />


      {/* Main Content (Page content) */}
      <main>
      <DynamicBreadcrumb/>
        {children}
      </main>

      {/* Optionally, you can add a Footer here */}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
