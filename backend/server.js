import express from "express";
import cors from "cors";
import products from "./routes/api/products";
import sales from "./routes/api/sales";

const app = express();
const PORT = 3001;

app.get("/", (_, res) =>
  res.send("<p>BEEP BOOP. Server is On. I AM A ROBOT</p>")
);

app.use(
  cors({
    origin: true,
  })
);

app.use("/api/products", products);
app.use("/api/sales", sales);

app.listen(PORT, () => {
  console.log("running on port " + PORT);
});
