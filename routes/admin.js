const Router = require("koa-router");
const ctrl = require("../controllers").admin;


const router = new Router();

router.get("/admin", ctrl.getAdminInfo);
router.post("/admin", ctrl.adminLogin);
router.put("admin/", ctrl.updateAdminPassword);

module.exports = router.routes();