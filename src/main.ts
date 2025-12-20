import { app, BrowserWindow } from 'electron';
import path from 'node:path';
import started from 'electron-squirrel-startup';

// Data imports
import { loadBotConfigFile, loadHandbook, loadItemTemplates, loadLocaleInfo, loadPmcConfigFile, loadPricesTemplate, loadQuestTemplates, loadTraderConfigFile, loadTraderTemplates } from './dataBuilder';

// System flags
const isMac = process.platform === 'darwin';
const isDev = process.env.NODE_ENV !== 'production';

// SPT data files
const loc_Locale = path.join(__dirname, "../../data/database/locales/global/en.json");
const loc_templateItems = path.join(__dirname, "../../data/database/templates/items.json");
const loc_traders_dir = path.join(__dirname, "../../data/database/traders/");
const loc_locations_dir = path.join(__dirname, "../../data/database/locations/");
const loc_quests = path.join(__dirname, "../../data/database/templates/quests.json");
const loc_prices = path.join(__dirname, '../../data/database/templates/prices.json');
const loc_handbook = path.join(__dirname, '../../data/database/templates/handbook.json');


// TODO: Change user locale option
let defaultLocale = 'en';

const traders = loadTraderTemplates();
const templateItems = loadItemTemplates(loc_templateItems);
const questDict = loadQuestTemplates(loc_quests);
const prices = loadPricesTemplate(loc_prices);
const handbook = loadHandbook(loc_handbook);
// TODO: Locations
loadLocaleInfo(loc_Locale);

const botCfg = loadBotConfigFile();
const pmcCfg = loadPmcConfigFile();
const traderCfg = loadTraderConfigFile();

//const localeDict = loadLocaleInfo(loc_Locale);

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    title: 'SPTEnlightened',
    width: 1600,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`),
    );
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
