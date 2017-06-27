import {app, BrowserWindow} from "electron";
let win = null;

app.on("ready", () => {
    win  = new BrowserWindow({
        backgroundColor: "#FFFFFF",
        height: 600,
        width: 800,
    });
});
