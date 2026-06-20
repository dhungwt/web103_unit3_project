import { pool } from "./database.js";
import "dotenv/config";
import eventData from "../data/events.js";
import locationData from "../data/locations.js";


const createEventsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        duration VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        submittedBy VARCHAR(255) NOT NULL,
        submittedOn TIMESTAMP NOT NULL
    )
`;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 events table created successfully");
  } catch (err) {
    console.error("⚠️ error creating events table", err);
  }
};

const seedEventsTable = async () => {
  await createEventsTable();

  eventData.forEach((event) => {
    const insertQuery = {
      text: "INSERT INTO events (name, location, duration, image, description, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    };
    const values = [
      event.name,
      event.location,
      event.duration,
      event.image,
      event.description,
      event.submittedBy,
      event.submittedOn,
    ];
    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting event", err);
        return;
      }

      console.log(`✅ ${event.name} added successfully`);
    });
  });
};


const createLocationsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS locations;

    CREATE TABLE IF NOT EXISTS locations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    )
`;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 locations table created successfully");
  } catch (err) {
    console.error("⚠️ error creating locations table", err);
  }
};

const seedLocationsTable = async () => {
  await createLocationsTable();

  locationData.forEach((location) => {
    const insertQuery = {
      text: "INSERT INTO locations (name) VALUES ($1)",
    };
    const values = [
      location.name
    ];
    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting event", err);
        return;
      }

      console.log(`✅ ${location.name} added successfully`);
    });
  });
};


seedEventsTable();
seedLocationsTable();
