
import React,{useState, useEffect} from 'react';
import axios from 'axios';


export default function  ({setData}) {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [weight, setWeight] = useState('');

    const getdata =()=>{
         axios.get('http://localhost:8080/api/delivery/findall')
        .then(res=>setData(res.data))
        .catch(err=>{console.log(err)})
        
    }

    const postData =  () => {
        axios.post(`http://localhost:8080/api/delivery/create`, {
            from,
            to,
            weight})
        .then(res => {
           getdata();
        })
        .catch(err => {console.log(err)})    
       
}

    return (
        <div>
         
<div class="flex items-center ">
  <div class="flex gap-7 items-baseline	">
    <input type="text" onChange={(e) => setFrom(e.target.value)} placeholder="From" class="block mb-2 bg-gray-100 p-2 rounded-lg border-2 border-indigo-500 shadow-md focus:outline-none focus:border-indigo-600" />
    <input type="text"  onChange={(e) => setTo(e.target.value)} placeholder="To" class="block mb-2 bg-gray-100 p-2 rounded-lg border-2 border-indigo-500 shadow-md focus:outline-none focus:border-indigo-600" />
    <input type="text"  onChange={(e) => setWeight(e.target.value)} placeholder="Weight" class="block mb-2 bg-gray-100 p-2 rounded-lg border-2 border-indigo-500 shadow-md focus:outline-none focus:border-indigo-600" />
    <button onClick={postData} class="bg-blue-500 	 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"> Save </button>
   
  </div>
</div>
     
  
      </div>
    );
    

  
  
}
