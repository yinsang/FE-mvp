module.exports = {
    "extends": "standard",
    "plugins":["html", "react"],
    "rules":{
        // 解决react报错
        "react/jsx-uses-react":2,
        // 解决var App 报错
        "react/jsx-uses-vars":2,
    }
};