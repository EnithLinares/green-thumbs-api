import express from "express";
import fs from "fs";
const plantsPath = "./data/plants.json";

const router = express.Router();

const readPlants = () => {
  const plantsData = fs.readFileSync(plantsPath);
  const plants = JSON.parse(plantsData);
  return plants;
};

router.get("/", function (req, res) {
  try {
    const plants = readPlants();
    res.json(plants);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", function (req, res) {
  const { name, species, watering, sunlight } = req.body;
  const newPlantObject = {
    id: plants.length,
    name: name,
    species: species,
    watering: watering,
    sunlight: sunlight,
    image: `${species}.png`,
  };
  const newPlantList = plants;
  newPlantList.push(newPlantObject);
  const newPlantsJson = JSON.stringify(newPlantList);
  fs.writeFileSync("./data/plants.json", newPlantsJson);
  res.send(newPlantsJson);
});

export default router;
