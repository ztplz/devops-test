const Koa = require("koa");
const path = require("path");
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");


const routes = require("./routes");

const app = new Koa();

// 使用logger
app.use(logger());
app.use(bodyParser());

app.use(routes.routes());

app.listen(3000);