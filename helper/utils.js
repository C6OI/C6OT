"use strict";
module.exports = {
    getRandomFromArray: function(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    }
}