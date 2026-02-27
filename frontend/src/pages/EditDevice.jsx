import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import api from "../services/api";

function EditDevice(){

 const { id } = useParams();
 const navigate = useNavigate();

 const [name,setName] = useState("");
 const [serialNumber,setSerialNumber] = useState("");

 const loadDevice = async()=>{

   const res = await api.get(`/devices/${id}`);

   setName(res.data.name);
   setSerialNumber(res.data.serialNumber);

 };

 const updateDevice = async()=>{

   await api.put(`/devices/${id}`,{

     name,
     serialNumber

   });

   navigate("/devices");

 };

 useEffect(()=>{

   loadDevice();

 },[]);

 return(

<div>

<h1>Edit Device</h1>

<input
 value={name}
 onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
 value={serialNumber}
 onChange={(e)=>setSerialNumber(e.target.value)}
/>

<br/><br/>

<button onClick={updateDevice}>
 Save
</button>

</div>

);

}

export default EditDevice;