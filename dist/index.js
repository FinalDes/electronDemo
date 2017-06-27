"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var win = null;
electron_1.app.on("ready", function () {
    win = new electron_1.BrowserWindow({
        backgroundColor: "#FFFFFF",
        height: 600,
        width: 800,
    });
});
//# sourceMappingURL=index.js.map