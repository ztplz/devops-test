/**
 *  管理员 controllers
 */

const models = require("../models");
const Sequelize = require("sequelize");

const getAdminInfo = async (ctx) => {
    try {
        const admin = await models.admin.findById(1);
        ctx.body = {
            success: true,
            data: {
                admin: admin
            }
        }
    } catch (error) {
        ctx.status = 500;
        ctx.body = {
            success: false,
            message: "查询失败"
        }
    }
   
}

// 管理员登录
const adminLogin = async (ctx) => {
    const { admin_id, password } = ctx.request.body;
    if (admin_id === undefined || password === undefined) {
        ctx.status = 400;
        ctx.body = {
            success: false,
            message: "账号或密码不能为空"
        }

        return;
    }

    const admin = await models.admin.findById(1);

    if (admin_id !== admin.admin_id || password !== admin.password) {
        ctx.status = 400;
        ctx.body = {
            success: false,
            message: "账号或密码不对"
        }

        return;
    }

    ctx.status = 200;
    ctx.body = {
        success: true,
        message: "登录成功"
    }
}

const updateAdminPassword = async (ctx) => {
    const { password } = ctx.request.body;
    console.log(password);
    if (password === undefined) {
        ctx.status = 400;
        ctx.body = {
            success: false,
            message: "请输入密码"
        }
        
        return;
    }

    try {
        await models.admin.update({
            password: password
        }, {
            where: {
                id: 1,
            }
        });
        ctx.body = {
            success: true,
            message: "管理员信息修改成功"
        }
    } catch(error) {
        console.log(error);
        if (error.name === "SequelizeValidationError") {
            ctx.status = 400;
            ctx.body = {
                success: false,
                message: "错误格式"
            }

            return;
        }
        
        ctx.status = 500;
        ctx.body = {
            success: false,
            message: "更新管理员密码失败"
        }
    }
}

module.exports = {
    getAdminInfo,
    adminLogin,
    updateAdminPassword,
}