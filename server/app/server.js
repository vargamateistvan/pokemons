const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const history = require("connect-history-api-fallback");
const cors = require("cors");

const connectMongodb = require("./connect-database");

module.exports = (host, port) => {
  // Routes
  const auth = require("./routes/auth");
  const pokemon = require("./routes/pokemons");

  // Create express instance
  const app = express();
  const router = new express.Router();

  // Use CORS
  const corsOptions = {
    origin: "*",
  };

  app.use(cors(corsOptions));

  // Router config
  app.use(bodyParser.urlencoded({ extended: true })); // Parse application/x-www-form-urlencoded
  app.use(bodyParser.json()); // Parse application/json

  // Require routes
  app.use(auth);
  app.use(pokemon);

  connectMongodb();

  // History fallback api
  router.use(history());
  router.use("/", express.static(path.join(__dirname, "../../client/dist")));

  return app.listen(port, host, () => {
    console.info(`Pokemon server started on ${host}:${port}`);
  });
};
