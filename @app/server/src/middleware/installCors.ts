import cors from "cors";
import { Express } from "express";

export default (app: Express) => {
  const isDev = process.env.NODE_ENV === "development";
  const port = process.env.WEB_PORT || 8000;

  if (isDev) {
    app.use(
      cors({
        origin: `http://localhost:${port}`,
        credentials: true,
      })
    );
  } else { // ! TODO:NB refactor and fix ! temp hack !
    console.warn("! using live cors ...")
    app.use(
      cors({
        origin: `http://localhost:${port}`,
        credentials: true,
      })
    );
  }
};
