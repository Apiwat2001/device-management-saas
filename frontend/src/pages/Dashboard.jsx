import { useEffect,useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard(){

 const navigate = useNavigate();

 const [devices,setDevices] = useState([])

 const loadDevices = async()=>{

 try{

 const res = await api.get("/devices")

 setDevices(res.data)

 }catch(err){

 console.log(err.response?.data)

 }

 }

 useEffect(()=>{

 loadDevices()

 },[])

 return(

<div>

<h1>Dashboard</h1>

<hr/>

<h3>Total Devices</h3>

<h2>{devices.length}</h2>

<br/>

<button
onClick={()=>navigate("/devices")}
>

Go to Devices

</button>

<hr/>

<h3>Device List</h3>

{

devices.map(d=>(

<div key={d.id}>

{d.name}

</div>

))

}

</div>

)

}