
const BASE_URL = '/api/events'

const getAllEvents = async () => {
  try {
    const response = await fetch(BASE_URL)
    if (!response.ok) {
      throw new Error(`Error fetching events: ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error("⚠️ eventsAPI - getAllevents failed:", error)
    return []
  }
}

const getEventById = async (eventId) => {
  try {
    const response = await fetch(`${BASE_URL}/${eventId}`)
    if (!response.ok) {
      throw new Error(`Error fetching event details: ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error(`⚠️ eventsAPI - geteventById failed for ID ${eventId}:`, error)
    return null
  }
}

export default {
  getAllEvents,
  getEventById
}