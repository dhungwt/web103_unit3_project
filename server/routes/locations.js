import express from "express";
import locationsController from "../controllers/locations.js";

const router = express.Router();

console.log("locationsController object looks like:", locationsController);

router.get("/", locationsController.getlocations);

router.get("/:locationId", locationsController.getlocationById);

export default router;
