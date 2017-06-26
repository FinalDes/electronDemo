"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var win = null;
electron_1.app.on('ready', function () {
    win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#FFFFFF'
    });
});
//# sourceMappingURL=index.js.map