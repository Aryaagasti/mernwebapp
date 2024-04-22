import React, { useState, useEffect } from 'react';
import { useAuth } from '../store/auth';
import axios from 'axios'
import '../index.css';

function Service() {


  const {service} = useAuth()

  const [services, setServices] = useState([]);

  const getServicesData = async () => {
    try {
      const response = await axios.get("/api/data/service");
      if (response.status === 200) {
        setServices(response.data.msg);
      }
    } catch (error) {
      console.log(`Service frontend error: ${error}`);
    }
  };

  useEffect(()=>{
    getServicesData()
  })


  return (
<section className='section-services'>
  <div className="service">
    <h1 className='main-heading'>Services</h1>
  </div>
  <div className="container grid grid-three-cols">
    {services?.map((service, index) => (
      <div className="card" key={index}>
        <img src="/public/web-design-3839587-3202981.png" alt={service.service} className="card-image" />
        <div className="card-details">
          <h2 className="card-heading">{service.service}</h2>
          <p className="card-description">{service.description}</p>
          <p className="card-price">Price: {service.price}</p>
          <p className="card-provider">Provider: {service.provider}</p>
        </div>
      </div>
    ))}
  </div>
</section>

  );
}

export default Service;
