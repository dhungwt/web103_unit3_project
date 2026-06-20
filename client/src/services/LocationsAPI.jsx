const BASE_URL = "/api/locations";

const getAllLocations = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching locations: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("⚠️ LocationsAPI - getAllLocations failed:", error);
    return [];
  }
};

const getLocationById = async (locationId) => {
  try {
    const response = await fetch(`${BASE_URL}/${locationId}`);
    if (!response.ok) {
      throw new Error(
        `Error fetching location details: ${response.statusText}`,
      );
    }
    return await response.json();
  } catch (error) {
    console.error(
      `⚠️ LocationsAPI - getLocationById failed for ID ${locationId}:`,
      error,
    );
    return null;
  }
};

export default {
  getAllLocations,
  getLocationById,
};
