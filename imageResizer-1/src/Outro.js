import 'mapbox-gl/dist/mapbox-gl.css';
// import { useState } from 'react';
import Map from 'react-map-gl';

function Outro() {
  
    return (
      <div className="App">
          <div className="p-5">
            <div className="container" id="contact">
              <div className="row g-4">
                <div className="col-md ">
                  <h2 className="text-center mb-4">Contact Info</h2>
                  <ul className="list-group list-group-flush lead">
                    <li className="list-group-item">
                      <span className="fw-bold">Location:</span> Chennai
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">Phone:</span> (91)00000-00000
                    </li>
                   
                    <li className="list-group-item">
                      <span className="fw-bold">Email: </span> 
                      sharmithavijayan77@gmail.com
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">LinkedIn: </span>
                       Sharmitha Vijayan
                    </li>
                  </ul>
                </div>
                <div className="col-md">
                <Map
                mapboxAccessToken='pk.eyJ1Ijoic2hpbGJoYSIsImEiOiJjbGQycDR6OXowYXc5M3FudHZtcXZjNzN3In0.xX7J3-REH_4Lzcjf7itS4Q'
      initialViewState={{
        longitude: 80.2391,
        latitude: 13.1031,
        zoom: 13
      }}
      style={{width: 500, height: 300, marginLeft:50}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
                </div>
              </div>
            </div>
          </div>
      
          
          <footer className="p-4 bg-dark text-white text-center position-relative">
            <div className="container">
              <p className="lead">Copyright &copy; 2023 Image Resizer</p>
                <p className='fs-6 text'>developed by Sharmitha Vijayan</p>

      
              <a href="#" className="position-absolute bottom-0 end-0 p-4">
                <i className="bi bi-arrow-up-circle h1"></i>
              </a>
            </div>
          </footer> 
      </div>
    );
  }
  
  export default Outro;