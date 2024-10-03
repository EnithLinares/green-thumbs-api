import express from "express";
import cors from "cors";
import plantRoutes from "./routes/plants.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public/images"));
app.use("/plants", plantRoutes);

app.listen(8080, () => {
  console.log(`Server Started on http://localhost:8080`);
  console.log("Press CTRL + C to stop server");
});
