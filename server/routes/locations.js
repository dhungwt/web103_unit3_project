import express from "express";
import locationsController from "../controllers/locations.js";

const router = express.Router();

console.log("locationsController object looks like:", locationsController);

router.get("/", locationsController.getLocations);

router.get("/:locationId", locationsController.getLocationById);

export default router;
