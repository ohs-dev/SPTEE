//@ts-nocheck
/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.ts` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import { Event } from 'electron';
import './styles/index.css';

// File info
//const form = document.querySelector('#some-form');
//const outPath = document.querySelector('#fileSaveAs');
//const fileOpen = document.querySelector('#fileOpen');
const fileInput = document.querySelector('#fileInput');
const filePath = document.querySelector('#filepath');
const fileName = document.querySelector('#filename');

// Header nav
const navbtnGlobals = document.querySelector('#nav_globals');
const navbtnBots = document.querySelector('#nav_bots');
const navbtnMaps = document.querySelector('#nav_maps');
const navbtnQuests = document.querySelector('#nav_quests');
const navbtnTraders = document.querySelector('#nav_traders');
const navbtnPlayer = document.querySelector('#nav_player');

// Aside nav
const abtnGlobals = document.querySelector('#a_globals');
const abtnPlayer = document.querySelector('#a_player');
const abtnBots = document.querySelector('#a_bots');
const abtnMaps = document.querySelector('#a_maps');
const abtnTraders = document.querySelector('#a_traders');
const abtnQuests = document.querySelector('#a_quests');

fileInput.addEventListener('change', openFile);


function openFile(e) {

  // null check on FileList
  if (e.target.files[0]) {
    // select the first file, if multiple selected.

    /** @type {File} */
    const file = e.target.files[0];

    const acceptedFileTypes = [
      "application/json"
    ];

    const exampleImages = [
      'image/gif',
      'image/png',
      'image/jpeg'
    ];

    if (acceptedFileTypes.includes(file['type'])) {

      console.log('file is valid.');

      fileName.textContent = file.name;
      //filePath.textContent = "";
    } else {
      console.log('Unsupported file type.');
      fileName.textContent = "{Invalid File}";
    }
  }
}

function showGlobalsPage(e) {

}

function showBotsPage(e) {

}

function showPlayerPage(e) {

}

function showTradersPage(e) {

}

function showQuestsPage(e) {

}

function showMapsPage(e) {

}

// Event Listeners for navigation
navbtnGlobals.addEventListener('click', showGlobalsPage);
navbtnBots.addEventListener('click', showBotsPage);
navbtnMaps.addEventListener('click', showMapsPage);
navbtnQuests.addEventListener('click', showQuestsPage);
navbtnTraders.addEventListener('click', showTradersPage);
navbtnPlayer.addEventListener('click', showPlayerPage);

// Event listeners for aside
abtnGlobals.addEventListener('click', showGlobalsPage);
abtnBots.addEventListener('click', showBotsPage);
abtnMaps.addEventListener('click', showMapsPage);
abtnQuests.addEventListener('click', showQuestsPage);
abtnTraders.addEventListener('click', showTradersPage);
abtnPlayer.addEventListener('click', showPlayerPage);

console.log(
  '👋 This message is being logged by "renderer.ts", included via Vite',
);

/* 
Using hidden file input element using click() event

-- html --

<input type="file" id="fileElem" multiple accept="image/*" />
<button id="fileSelect" type="button">Select some files</button>
  
-- js --

const fileSelect = document.getElementById("fileSelect");
const fileElem = document.getElementById("fileElem");

// the button
fileSelect.addEventListener("click", (e) => {
  
  // the hidden input
  if (fileElem) {
    fileElem.click();
  }
});

*/