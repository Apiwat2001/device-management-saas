import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function DeviceDetail() {

  const navigate = useNavigate();
  const { id } = useParams();

  const [device, setDevice] = useState(null);

  const loadDevice = async () => {

    try {

      const res = await api.get(`/devices/${id}`);

      setDevice(res.data);

    } catch(err) {

      console.log(err.response?.data);

    }

  };

  useEffect(() => {

    loadDevice();

  }, []);

  if (!device) return <div>Loading...</div>;

  return (

    <div>

      <h1>Device Detail</h1>

      <p><b>Name:</b> {device.name}</p>

      <p><b>Serial:</b> {device.serialNumber}</p>

      <p><b>Status:</b> {device.status}</p>

      <p><b>ID:</b> {device.id}</p>

      <br/>

      <button
        onClick={() => navigate(`/devices/edit/${device.id}`)}
      >
        Edit Device
      </button>

      <button
        style={{marginLeft:"10px"}}
        onClick={() => navigate("/devices")}
      >
        Back
      </button>

    </div>

  );

}

export default DeviceDetail;