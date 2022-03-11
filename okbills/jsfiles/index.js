const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen : true, 
    icon : 'images/oklabs.png' ,
    webPreferences: {
      nodeIntegration: true ,
      enableRemoteModule: true ,
    }
  })
  win.loadFile('./uicomponents/signin.html')
  win.webContents.openDevTools()
}
app.allowRendererProcessReuse = false;
app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
