$("#addconversion").click(function()
{
    const modelPath = path.join('file://' ,__dirname,'add_conversion.html')
    let win = new BrowserWindow({
        alwaysOnTop:true,
        width :600,
        height : 320,
        icon : 'images/oklabs.png',
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule : true,
            titlebar: false
          },
          minimizable:false,
          movable:false,
          resizable:false,
          skipTaskbar:true,
          frame:false,
    })
    win.on('close',function(){ win = null})
    win.loadURL(modelPath)
    win.show()	 
});