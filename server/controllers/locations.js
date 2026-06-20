import { pool } from "../config/database.js";

const getLocations = async (req, res, error) => {
  try {
    const results = await pool.query("SELECT * FROM gifts ORDER BY id ASC");
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getLocationById = async (req, res, error) => {
  try {
    const selectQuery = `
      SELECT name, pricePoint, audience, image, description, submittedBy, submittedOn
      FROM gifts
      WHERE id=$1
    `;
    const locationId = req.params.locationId;
    const results = await pool.query(selectQuery, [locationId]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  getLocations,
  getLocationById,
};
