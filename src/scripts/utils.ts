import * as fs from 'node:fs';

export namespace Utils {

  /** Tests if a file exists at the given path.
   * @param path {string} The relative path with filename & extension
   * @returns boolean;
    */
  export function fileExists(path: string): boolean {
    if (fs.existsSync(`${path}`)) return true;
    else return false;
  }

  /** Checks if a .json file exists and reads data from file
 * @param path {string} The relative path with filename & extension
 */
  export function readJSONFile(filePath: string): any {
    if (fileExists(filePath)) return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }

  /** Writes data to a .json file. Overwrites file if it already exists.
 * 
 * @param filepath {string} The relative path with filename & extension
 * @param data {string} data to write in the file.
 * @returns `boolean`
 */
  export function writeJSONFile(filepath: string, data: any): boolean {

    // TODO: VERIFY FILE IS NOT ALREADY BEING WRITTEN (MULTIPLE CONSECUTIVE ATTEMPTS)
    try {
      // Tests user has write-access
      fs.accessSync(filepath, fs.constants.W_OK);
      fs.writeFileSync(`${filepath}`, JSON.stringify(data), 'utf-8');

      console.log(`Wrote data successfully to: (${filepath})`);

      return true;

    } catch (err: Error | any) {
      console.log(`Error writing to .json file: ${err.message}`);
      return false;
    }
  }

}



/* #region Array, object value helpers */


/**
 * Creates a new Map from an object's properties.
 * @param {Object} obj - a non-primitive object. "[Object object]"
 * @returns {Map} 
 */
export function convertToMap(obj: any) {
  const m = new Map();
  if (typeof obj === "object") {
    for (const [key, val] of Object.entries(obj)) {
      m.set(key, val);
    };
  }
  return m;
}

/* #endregion */

/* #region Object:Property Search */

// Recursively search an object for a keyname within all nested objects
export function findKey(keyname: string, obj: any): any {

  if (obj.hasOwnProperty(keyname)) {
    return obj[keyname];
  }

  for (let p in obj) {
    if (obj.hasOwnProperty(p)) {
      const val = obj[p];

      // If the value is an object (and not null), recurse into it
      if (typeof val === 'object' && val !== null) {
        const result = findKey(keyname, val);
        // If a result is found in a nested object, return it immediately
        if (result !== undefined) {
          return result;
        }
      }
    }
  }
}

/* #endregion */


/* #region ---  Code Examples  --- */

/* ## -- Array.prototype.reduce() -- ## */


// Adds all array elements
const sumFE = [622, 189, 283].reduce((acc, val) =>
  acc + val
);
// 1094

/* From Wes Bos,  questionable? */
const addEvenMinusOdd = [622, 189, 283].reduce((acc, val) => {
  if (val % 2 === 0) return acc + val;
  return acc - val;
}, 0);
// 150

const addEvensOnly = [10, 20, 11, 3].reduce((acc, val) => {
  if (val % 2 === 0) return acc + val;
  return acc;
});
// 30


/* #endregion */


// -----  Old PC wlan  -----
// realtek rtl881ce