import React from 'react';
import"../styles/Invoice.css";
import Notes from "./invoicer/Notes";
import Footer from "./invoicer/Footer";
import Table from "./invoicer/Table";
import Header from "./invoicer/Header";
import MainDetails from "./invoicer/MainDetails";
import ClientDetails from "./invoicer/ClientDetails";
import Dates from "./invoicer/Dates";







function Invoice() {


    const handlePrint = () => {
        window.print()
    }
  return (
    <div>
      <main className='m-10 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow'>
      
      <div>
      <Header handlePrint={handlePrint} />

      <MainDetails />

      <ClientDetails />

       <Dates />

    
       <Table />

         <Notes />

        <Footer />
         
       

      </div>
             
                      
      </main>
    </div>
  )
}

export default Invoice