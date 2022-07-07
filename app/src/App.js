import React from 'react'
import Navbar from './components/navbar'
import TextForm from './components/textbox';


function App() {
  return (
    <>
    <Navbar title="SENA"/>
    <div className='container my-3'>
      <TextForm heading="Capitalize Here"/>
    </div>
    
    </>
  );
}

export default App;
