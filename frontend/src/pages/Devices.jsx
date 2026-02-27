import { useEffect, useState } from "react";
import api from "../services/api";

function Devices() {

  const [devices, setDevices] = useState([]);
  const [name, setName] = useState("");
  const [serialNumber, setSerialNumber] = useState("");

  const deleteDevice = async (id) => {

    try {

      await api.delete(`/devices/${id}`);

      loadDevices();

    } catch(err) {

      console.log(err.response?.data);

    }

  };

  const loadDevices = async () => {

    const res = await api.get("/devices");

    setDevices(res.data);

  };

  const addDevice = async () => {

    try {

      await api.post("/devices", {
        name: name,
        serialNumber: serialNumber
      });

      setName("");
      setSerialNumber("");

      loadDevices();

    } catch (err) {

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
          display: "flex",
          justifyContent: "space-between",
          width: "400px",
          marginBottom: "10px"
        }}
      >

        <div>
          {d.name} - {d.serialNumber}
        </div>

        <button onClick={() => deleteDevice(d.id)}>
          Delete
        </button>

      </div>

    ))}

    </div>

  );

}

export default Devices;