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
  const oldPlants = readPlants();
  const newPlantObject = {
    id: oldPlants.length,
    name: name,
    species: species,
    watering: watering,
    sunlight: sunlight,
    image: `${species}.png`,
  };
  oldPlants.push(newPlantObject);
  const newPlants = JSON.stringify(oldPlants);
  fs.writeFileSync("./data/plants.json", newPlants);
  res.send(newPlants);
});

export default router;
