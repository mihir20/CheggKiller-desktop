const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let window;

const createWindow = () =>{
    window = new BrowserWindow({icon:'ic_launcher.png'});
    window.maximize();
    window.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol: 'file:',
        slashes: true
    }))
}

app.on('ready', createWindow)