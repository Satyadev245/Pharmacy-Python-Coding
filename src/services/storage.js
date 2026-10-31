const DB='pharmapy-db'; const VERSION=1;
function openDB(){return new Promise((resolve,reject)=>{const r=indexedDB.open(DB,VERSION);r.onupgradeneeded=()=>{if(!r.result.objectStoreNames.contains('programs'))r.result.createObjectStore('programs',{keyPath:'id'})};r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)})}
export async function saveProgram(p){const db=await openDB();return new Promise((res,rej)=>{const tx=db.transaction('programs','readwrite');tx.objectStore('programs').put(p);tx.oncomplete=()=>res(true);tx.onerror=()=>rej(tx.error)})}
export async function getPrograms(){const db=await openDB();return new Promise((res,rej)=>{const r=db.transaction('programs').objectStore('programs').getAll();r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
export async function clearPrograms(){const db=await openDB();return new Promise((res,rej)=>{const tx=db.transaction('programs','readwrite');tx.objectStore('programs').clear();tx.oncomplete=()=>res(true);tx.onerror=()=>rej(tx.error)})}
export function readState(){try{return JSON.parse(localStorage.getItem('pharmapy-state')||'{}')}catch{return {}}}
export function writeState(s){localStorage.setItem('pharmapy-state',JSON.stringify({...s,version:1}))}
