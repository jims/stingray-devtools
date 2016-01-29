/** @babel */

import {app, BrowserWindow, hideInternalModules} from "electron";
import path from "path";

hideInternalModules();

let mainWindow = null;
app.on('window-all-closed', () => app.quit());

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        icon: path.resolve(path.join(__dirname, "..", "resources", "stingray.ico")),
        width: 1440,
        height: 900,
        preload: path.join(__dirname, "app.js")
    });

    mainWindow.loadURL('about:blank');
    mainWindow.on('closed', () => app.quit());
    mainWindow.show();
});
