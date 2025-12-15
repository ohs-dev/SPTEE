const path = require('node:path');
const { app, BrowserWindow, Menu } = require('electron/main');

const isMac = process.platform === 'darwin';
const isDev = process.env.NODE_ENV !== 'production';

// Initiate renderer
const createMainWindow = () => {
  const mainWin = new BrowserWindow({
    title: 'SPTEnlightened',
    width: 1800,
    height: 1000
  });

  // Open chromium dev tools if in dev mode
  if (isDev) {
    // webContents represents everything displayed within
    //   the browser window except border,title,status?
    mainWin.webContents.openDevTools();
  }
  
  
  //console.log(__dirname);
  // C:\Users\Oliver\Dev\src\web\SPTEnlightened
  
  mainWin.loadFile(path.join(__dirname, './index.html'));
};

// Call renderer when main process is ready,
// browser windows can't be created before ready event
app.whenReady().then(() => {

  createMainWindow();

  // Initialize custom menu from template
  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);


  // MacOS 'darwin' hack.  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });

});

// Menu template
const menu = [
  ...(isMac ? [{
    label: app.name,
    submenu: [
      {
        label: 'About',
        // no parentheses or it will fire
        //   immediately
        click: createAboutWindow
      },
    ]
  }] : []),
  {
    /* label: 'File',
    submenu: [
      {
        label: 'Quit',
        click: () => app.quit(),
        accelerator: 'CmdOrCtrl+W'
      }
    ] */
    role: 'fileMenu'
  },
  ...(!isMac ? [
    {
      label: 'Help',
      submenu: [
        {
          label: 'About',
          click: createAboutWindow
        },
      ]
    }
  ] : [])
];

// Force-close electron when app is closed.
app.on('window-all-closed', () => {
  if (!isMac) app.quit();
});

function createAboutWindow() {
  const aboutWin = new BrowserWindow({
    title: 'About this app.',
    width: 1800,
    height: 1000,
  });

  aboutWin.loadFile(path.join(__dirname, './src/pages/BotConfig.html'));
}