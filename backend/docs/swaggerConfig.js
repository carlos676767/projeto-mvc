import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

export default class SwaggerConfig {
  static App(app) {
    const docs = swaggerJsDoc(this.options());
    app.use(`/docs`, swaggerUi.serve, swaggerUi.setup(docs));
  }

   static  options() {
    return {
      definition: {
        openapi: "3.0.0",
        info: {
          title: "Api em mvc para estudos",
          version: "1.0.0",
          description: "Documentação de API utilizando Swagger com Node.js",
        },
      },
      apis: ["../routes/*.js"],
    };
  }

}

