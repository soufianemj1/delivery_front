import BasicTable from '../components/manager/table';
import React,{useState, useEffect} from 'react';
import ComposedTextField from '../components/manager/formdelivery';
import Sidebar from '../components/sidebar';
import useFetch from '../useFetch';


function Delivery() {
  const {data, error, loading,setData} = useFetch('http://localhost:8080/api/delivery/findall');
  return  <div className='flex'>
    
    < Sidebar />
    <div className="container mx-auto w-3/4">
    
    
    <div className='py-10 flex justify-center '>< ComposedTextField setData={setData} /></div>
    
    <div>
    < BasicTable data={data} setData={setData}/>
    </div>
    
  
  </div>
  </div>
  
}

export default Delivery;

