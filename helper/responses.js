"use strict";

const fs = require("fs");

module.exports = JSON.parse(fs.readFileSync("./helper/responses.json"));