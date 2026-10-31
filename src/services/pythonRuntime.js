let runtime;
export async function runPython(code,stdin=''){
 if(!runtime){runtime=import('https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.mjs').then(m=>m.loadPyodide()).catch(e=>{runtime=null;throw e})}
 const py=await runtime, output=[];
 py.setStdout({batched:s=>output.push(s)});py.setStderr({batched:s=>output.push(s)});
 py.runPython(`import sys, io\nsys.stdin = io.StringIO(${JSON.stringify(stdin)})`);
 let timer;
 try{const result=await Promise.race([py.runPythonAsync(code),new Promise((_,rej)=>{timer=setTimeout(()=>rej(new Error('Execution timed out after 5 seconds.')),5000)})]);if(result!==undefined&&result!==null)output.push(String(result));return {output:output.join('\n').trim(),error:null}}
 catch(e){return {output:output.join('\n').trim(),error:e.message||String(e)}}finally{clearTimeout(timer)}
}