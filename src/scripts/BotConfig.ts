/* interfaces */
//import type { IBotType } from "../models/spt/IBotType.js";
//import { Utils } from "./utils.js";

/* src\assets\spt\3.11.3\SPT_Data\Server\database\bots\types\bosskilla.json */
/* try {

  const currentBot = Utils.readJSONFile('../assets/spt/3.11.3/SPT_Data/Server/database/bots/types/bosskilla.json') as IBotType;

} catch (err) {
  console.log(JSON.stringify(err, null, 2));
} */


const $ = (s: string) => document.querySelector(s);
const $$ = (s: string) => Array.from(document.querySelectorAll(s));

// Editor panels
const wraps = Object.fromEntries($$('#webEditors .editor-wrap').map((w: HTMLElement | any) => {
  // _.dataset.pane is the `data-pane=_` attribute'
  return [w.dataset.pane, w]
})) as Record<string, HTMLElement>;

const diffTabs = $$('#difficultyTabs .tab') as HTMLButtonElement[];
const settingTabs = $$('#settingTabs .tab') as HTMLButtonElement[];


const editors = {
  Core: 'ed_core',
  Aiming: 'ed_aiming',
  Mind: 'ed_mind',
  Look: 'ed_look',
  Shoot: 'ed_shoot',
  Scattering: 'ed_scattering',
  Hearing: 'ed_hearing',
  Boss: 'ed_boss',
  Cover: 'ed_cover',
  Grendade: 'ed_grenade',
  Change: 'ed_change',
  Move: 'ed_move',
  Lay: 'ed_lay',
  Patrol: 'ed_patrol'
};



// Add Event listeners for tabs
settingTabs.forEach((e) => {
  if (e.tagName === "BUTTON") {
    e.addEventListener('click', () => {
      showPane(e.dataset.pane as string, 'settings')
    }, false);
  }
})

// Add Event listeners for tabs
diffTabs.forEach((e) => {
  e.addEventListener('click', () => {
    showPane(e.dataset.pane as string, 'difficulty');
  })
});





/* #region Functions */

// panel: Settings
//   $('#settingTabs .tab.active')
// panel: Difficulty
//   $('#diffTabs .tab.active')

function getActivePane(panel: string) {

  const t = $('#settingTabs .tab.active') as HTMLElement;
  return t ? t.dataset.pane : "html";
}

function showPane(name: string, type: string) {

  if (type === 'settings') {
    settingTabs.forEach(t => {
      if (t.dataset.pane === name) {
        t.classList.toggle('active', true);
      } else {
        t.classList.toggle('active', false);
      }
    });
  }

  if (type === 'difficulty') {
    diffTabs.forEach(t => {
      if (t.dataset.pane === name) {
        t.classList.toggle('active', true);
      }
      else {
        t.classList.toggle('active', false);
      }
    });
  }

  /* settingTabs.forEach(t => {
    if (t.name === name) {}
    const on = t.dataset.pane === name;
    t.classList.toggle('active', on);
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
  }); */

  requestAnimationFrame(() => {
    //const ed = editors[name as keyof typeof editors];
    /*     const ed = editors[name];
        if (ed && ed.resize) {
          ed.resize(true);
          ed.focus();
        } */
  });
}

function toggleCardPanel() {

  const panel = document.querySelector('div.card_panel') as HTMLElement;
  if (panel?.style.display != 'none') {
    panel.style.display = 'none';
  } else {
    panel.style.display = 'flex';
  }
}


/** Resturns a string with HTML specific chars `<>&"`
 *  escaped.
 * @param s {string} A string containing html tags or symbols.
  */
function escapeHtml(s: string) {
  s.replace(/[&<>"]/g, (c) => {
    const lookupTable = {
      '&': '&amp;',
      '<': "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
    return lookupTable[c as keyof typeof lookupTable];
  })
}


function log(msg: string, type = 'info'): void {
  const color = type === "error"
    ? "var(--err)" : type === "warn"
      ? "var(--warn)" : "var(--ok)";

  const time = new Date().toLocaleTimeString();

  const line = document.createElement('div');
  line.innerHTML = `<span style="color: ${color}">[${time}]</span> ${escapeHtml(msg)}`;


  /* out.appendChild(line);
  out.scrollTop = out.scrollHeight; */
}

/* #endregion */