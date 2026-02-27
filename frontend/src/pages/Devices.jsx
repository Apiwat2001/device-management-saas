import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Devices() {

  const navigate = useNavigate();
  const [devices, setDevices] = useState([]);
  const [name, setName] = useState("");
  const [serialNumber, setSerialNumber] = useState("");

  const loadDevices = async () => {
    const res = await api.get("/devices");
    setDevices(res.data);
  };

  const addDevice = async () => {

    try {

      await api.post("/devices", {
        name,
        serialNumber
      });

      setName("");
      setSerialNumber("");

      loadDevices();

    } catch(err) {

      console.log(err.response?.data);

    }

  };

  const deleteDevice = async (id) => {

    try {

      await api.delete(`/devices/${id}`);

      loadDevices();

    } catch(err) {

      console.log(err.response?.data);

    }

  };

  useEffect(() => {
    loadDevices();
  }, []);

  return (

    <div>

      <h1>Devices</h1>

      <input
        placeholder="Device name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        placeholder="Serial Number"
        value={serialNumber}
        onChange={(e)=>setSerialNumber(e.target.value)}
      />

      <button onClick={addDevice}>
        Add Device
      </button>

      <hr/>

      {devices.map(d => (

        <div 
          key={d.id}
          style={{
            marginBottom: "10px",
            border: "1px solid gray",
            padding: "10px"
          }}
        >

          <div>
            <b>{d.name}</b>
          </div>

          <div>
            Serial: {d.serialNumber}
          </div>

          <br/>

          <button
            onClick={() => navigate(`/devices/${d.id}`)}
          >
            View Details
          </button>

          <button
            style={{marginLeft:"10px"}}
            onClick={() => deleteDevice(d.id)}
          >
            Delete
          </button>

        </div>

      ))}

    </div>

  );

}

export default Devices;