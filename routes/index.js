const Router = require("koa-router");
const admin = require("./admin");

const router = new Router();
const api = new Router();

api.use(admin);

router.use('/api/v1', api.routes())

module.exports = router;