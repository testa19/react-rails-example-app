process.env.NODE_ENV = process.env.NODE_ENV || "development";
const util = require("util");
const { merge } = require("shakapacker");
const baseConfig = require("./base");

const developmentConfig = {
  mode: "development",
  devtool: false
};

const config = merge(baseConfig, developmentConfig);
console.log(util.inspect(config, { depth: null, colors: true }));
module.exports = config;
