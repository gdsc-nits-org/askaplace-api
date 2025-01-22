import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import * as Middlewares from "./src/middlewares";
import * as Routers from "./src/routers";
import * as Constants from "./src/globals/constants";

const app = express();

// Middlewares
app
  .use(cors())
  .use(helmet())
  .use(morgan("dev"))
  .use(express.json())
  .use(express.urlencoded({ extended: true }));

// Routers
app.use(`${Constants.System.ROOT}/`, Routers.Health);
app.use(`${Constants.System.ROOT}/user`, Routers.User);
app.use(`${Constants.System.ROOT}/place`, Routers.Place);
app.use(`${Constants.System.ROOT}/review`, Routers.Review);
app.use(`${Constants.System.ROOT}/stay`, Routers.Stay);
app.use(`${Constants.System.ROOT}/tag`, Routers.Tag);
app.use(`${Constants.System.ROOT}/expense`, Routers.Expense);

// Error Handlers
app.use(Middlewares.Error.errorHandler);

app.listen(Constants.System.PORT, () => {
  console.log(`Server started on port ${Constants.System.PORT}`);
});
