"use strict";
import express from "express";
import env, { parse } from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import SwaggerConfig from "./docs/swaggerConfig.js";

env.config();
class ExpressJs {
  static #api = express();
  static #parser = bodyParser.json();
  static #corsJs = cors();
  static #onfigExpress() {
    const port = process.env.PORT || 8080;
    this.#api.listen(port, () => {
      console.log(`server in port ${port}`);
    });
  }

  static startApi() {
    this.#api.use(this.#parser);
    this.#api.use(this.#corsJs);
    SwaggerConfig.App(this.#api)
    this.#onfigExpress()
  }
}

ExpressJs.startApi()
