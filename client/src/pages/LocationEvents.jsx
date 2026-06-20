import React, { useState, useEffect } from "react";
import Event from "../components/Event";
import "../css/LocationEvents.css";
import LocationsAPI from "../services/LocationsAPI";

const LocationEvents = ({ index }) => {
  const [location, setLocation] = useState({});
  const [events, setEvents] = useState([]);

  useEffect(()=>{
const fetchLocationData = async () => {
      try {
        const data = await LocationsAPI.getLocationById(index);
        if (data) {
          setLocation(data);       
          setEvents(data.events);  
        }
      } catch (error) {
        console.error("Error fetching location events details:", error);
      }
    };

    fetchLocationData();
  }, [index])

  return (
    <div className="location-events">
      <header>
       <div className="location-info">
          <h2>{location.name}</h2>
        </div>
      </header>

      <main>
        {events && events.length > 0 ? (
          events.map((event) => (
            <Event
              key={event.id}
              name={event.name}
              location={event.location}
              duration={event.duration}
              image={event.image}
            />
          ))
        ) : (
          <h2>
            <i className="fa-regular fa-calendar-xmark fa-shake"></i>{" "}
            {"No events scheduled at this location yet!"}
          </h2>
        )}
      </main>
    </div>
  );
};

export default LocationEvents;
