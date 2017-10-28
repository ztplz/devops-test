/**
 *  日志配置
 */

const path = require("path");

const errorLogPath = path.resolve(__dirname, "../logs/error/error");

const responseLogPath = path.resolve(__dirname, "../logs/response/response");

module.exports = {
    "appenders": [
        // 错误日志
        {
            "category": "errorLogger",
            "type": "dateFile",
            "filename": errorLogPath,
            "alwaysIncludePattern":true,       
            "pattern": "-yyyy-MM-dd-hh.log"
        },
        
        // 响应日志
        {
            "category": "responseLogger",
            "tyoe": "dataFile",
            "filename": responseLogPath,
            "alwaysIncludePattern":true,       
            "pattern": "-yyyy-MM-dd-hh.log"
        }
    ],

    "levels": {
        "errorLogger": "ERROR",
        "responseLogger": "ALL"
    }
}