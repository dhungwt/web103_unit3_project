import { pool } from "../config/database.js";

const getLocations = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM locations ORDER BY id ASC");
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getLocationById = async (req, res) => {
 try {
    const locationId = req.params.locationId;
    
    // location from locations table
    const locationResult = await pool.query("SELECT name FROM locations WHERE id=$1", [locationId]);
    const locationName = locationResult.rows[0]?.name;

    if (!locationName) {
      return res.status(404).json({ error: "Location not found" });
    }

    // all events in a location
    const eventsResult = await pool.query("SELECT * FROM events WHERE location=$1", [locationName]);
    
    // Return both the location name and its events to the frontend
    res.status(200).json({
      name: locationName,
      events: eventsResult.rows
    });
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  getLocations,
  getLocationById,
};
