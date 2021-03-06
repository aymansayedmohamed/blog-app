var path = require('path');
import * as bodyParser from "body-parser"
import * as express from "express"

export let webRoutes = express.Router();

webRoutes.use(bodyParser.urlencoded({ extended: false }));
webRoutes.use(bodyParser.json());

webRoutes.use("/public", express.static(path.join(__dirname, './../../web/public')));
webRoutes.get('*', (_, res: express.Response) => {
  res.sendFile(path.join(__dirname + "./../../web/index.html"));
});