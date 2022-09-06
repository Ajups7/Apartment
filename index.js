const express = require("express");
const router = require("./routes");
const app = express();

app.get("/", (req, res) => {
   const result = res.send({ status: "live" }).status(200);
  });
  app.use(express.json());
  app.use(router);
  
  // app.listen(process.env.PORT, () => {
  //   console.log(`Server Running on ${process.env.PORT}`);
  // });

  const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));