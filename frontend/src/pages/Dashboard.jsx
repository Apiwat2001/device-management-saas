import { useEffect,useState } from "react";
import api from "../services/api";

export default function Dashboard(){

 const [devices,setDevices] = useState([])

 const loadDevices = async()=>{

 const res = await api.get("/devices")

 setDevices(res.data)

 }

 useEffect(()=>{

 loadDevices()

 },[])

 return(

<div>

<h1>Dashboard</h1>

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