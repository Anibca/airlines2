import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../Flights.css';

const initialData = {
    loading:false,
    page:0, 
    data:{
 totalPassengers:0,
 totalPages:0,
   data:[],
    },
    success:true,
    error:false,
}

const Flights = () => {
  const [data,setData] = useState(initialData);
    useEffect(
        ()=>{
            getData();
        },[data.page]
    );

    const getData = async()=>{
    if(data.page<data.data.totalPages || data.page==0){
        try{
     setData(prev=>{return {
                ...prev,
                loading:true,
}}); 

 const dataServer = await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${data.page}&size=20`);
            
   setData(prev=>{return {
                ...prev,
                loading:false,
                success:false,
                data:dataServer.data,
                error:false,
            }});
            
        }catch(e){
            setData(prev=>{return {
                ...prev,
                loading:false,
                success:false,
                error:false,
            }});}}}
  return (
    <div className='table'>
        {/* {
            data.data?.data?.map( ele => <p>{ele?.name}</p>
            )
        } */}
        <h1>Table of {data.data.totalPassengers} passengers</h1>
        <h1>total count of pages:{data.data.totalPages}</h1>

        <div className='pagination'>
           <div className='prev'>
               <button onClick={()=>
            setData(prev=>{return {
                ...prev,
                page:prev.page>0 ?prev.page-1:0
            }})}>PREVIOUS</button>
            </div> 
            <p>
                Page : {data.page}
            </p>
            <div className='prev'>
                <button onClick={()=>
            setData(prev=>{return {
                ...prev,
                page:prev.page<prev.data.totalPages ?prev.page+1:prev.page
            }})}>NEXT</button>
            </div> 
        </div>
        <table> 
            <thead>
                <tr>
       <th>USER_NAME</th>
         <th>Total number of trips</th>
         <th>AIRLINE_DETAILS</th>
                </tr>
            </thead>
            <tbody>
                {
    data.loading?[1,2,3,4,5,6,7,8,9,0].map(
                        ele => <tr>
                         <td key={ele}><div className='loading'></div></td>
                 <td><div className='loading'></div></td>
                         <td><button>Check Airline</button></td>
                        </tr>
                    ):
                    data.data?.data?.map(
                        ele => <tr key={ele?.id}>
                      <td>{ele?.name }</td>
                     <td>{ele?.trips}</td>
           <td><button>Check Airline</button></td> </tr>) }</tbody>
</table>
<div>  
</div>
 </div>
  )
}
export default Flights;