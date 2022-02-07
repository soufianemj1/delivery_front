// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Button from '@mui/material/Button';
import useFetch from '../../useFetch'

import React,{useState, useEffect} from 'react';
import { log } from '@craco/craco/lib/logger';



export default function BasicTable({data,setData}) {

    const getdata =()=>{
         axios.get('http://localhost:8080/api/delivery/findall')
        .then(res=>setData(res.data))
        .catch(err=>{console.log(err)})
        
    }
    function deleteData(id){
      let isExecuted = confirm("Are you sure to delete this delivery?");
      if(isExecuted){
      axios.delete('http://localhost:8080/api/delivery/delete/'+id)
      .then(res=>getdata())
      .catch(err=>{console.log(err)})
      }
    }
 
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Delivery id</TableCell>
            <TableCell align="right">From</TableCell>
            <TableCell align="right">To</TableCell>
            <TableCell align="right">Weight</TableCell>
            <TableCell align="right">Distance</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((element) => (
            <TableRow
              key={element._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {element._id}
              </TableCell>
              <TableCell align="right">{element.from}</TableCell>
              <TableCell align="right">{element.to}</TableCell>
              <TableCell align="right">{element.weight} Kg</TableCell>
              <TableCell align="right">{element.distance} Km</TableCell>
              <TableCell align="right">{element.price} Dh</TableCell>
              <TableCell align="center">
              <Button onClick={()=>deleteData(element._id)} href="">Delete</Button>
              <Button href="">Update</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
