import React from 'react';
import Footer from './footer';
import Header from './header';
import PetHomePage from './myHomePage';


const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        {/* เพิ่ม PetHomePage ลงในส่วนของเนื้อหา */}
        <PetHomePage 
          fullName="Mr. khettawan Hoysang" 
          studentId="026630491014-1" 
          contact="khettawan.hoy@rmutto.ac.th" 
        />
        
      </main>
      <Footer />
    </>
  );
};

export default App;
