const { app, BrowserWindow } = require('electron')

let win

function createMainWin(){
  win = new BrowserWindow({width: 600, height: 600, backgroundColor: '#323', resizable: false, frame: process.platform !== 'darwin'})
  win.loadURL(`https://copper-test-1.herokuapp.com/`)
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', () => createMainWin())

app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  console.log('activate')
  //if(win === null) createMainWin()
})
