import { BrowserRouter,Routes,Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Devices from "./pages/Devices";
import DeviceDetail from "./pages/DeviceDetail";
import EditDevice from "./pages/EditDevice";

function App(){

 return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>}/>

<Route path="/dashboard" element={<Dashboard/>}/>

<Route path="/devices" element={<Devices/>}/>

<Route path="/devices/:id" element={<DeviceDetail/>}/>

<Route path="/devices/edit/:id" element={<EditDevice/>}/>

</Routes>

</BrowserRouter>

)

}

export default App