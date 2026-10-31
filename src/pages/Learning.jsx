import {Link,useParams} from 'react-router-dom';
import {CheckCircle2,ChevronRight,BookOpen,Play,ChevronDown,ChevronUp,ListChecks} from 'lucide-react';
import {useState} from 'react';
import {lessons} from '../data/courses';
import {useApp} from '../context/AppContext';
import {PageTitle} from '../components/UI';

function Detail({l}){
 const{progress,completeLesson}=useApp(); const done=progress.lessons.includes(l.id); const [expanded,setExpanded]=useState({});
 return <>
  <div className="backline"><Link to="/learning">← All modules</Link></div>
  <PageTitle eyebrow={`${l.level.toUpperCase()} MODULE`} title={l.module} description={l.definition} action={<button className={`btn ${done?'success':'primary'}`} onClick={()=>completeLesson(l.id)}><CheckCircle2 size={16}/>{done?'Completed':'Mark complete'}</button>}/>
  <div className="lesson-layout"><article className="panel lesson-body">
   <div className="curriculum-intro"><b>What you will learn</b><p>{l.explanation}</p><div className="curriculum-tags"><span>{l.subtopics.length} main topics</span><span>{l.subtopics.reduce((n,s)=>n+s.mini.length,0)} mini-topics</span><span>{l.level}</span></div></div>
   <h2>Core syntax</h2><pre className="code-block">{l.syntax}</pre><h2>Complete example</h2><pre className="code-block">{l.code}</pre><h2>Expected output</h2><pre className="output-block">{l.output}</pre><h2>Code explanation</h2><ol>{l.lines.map((x,i)=><li key={i}>{x}</li>)}</ol>
   <div className="pharmacy-callout"><b>Pharmacy connection</b><p>{l.pharmacy}</p></div>
   <div className="curriculum-section-heading"><div><h2>Topics, subtopics and mini-topics</h2><p>Open each topic to study its explanation, syntax, code and output.</p></div><ListChecks size={22}/></div>
   {l.subtopics.map((s,i)=><section className="subtopic-card" key={s.title}><button className="subtopic-toggle" onClick={()=>setExpanded(v=>({...v,[i]:!v[i]}))}><span className="subtopic-number">{String(i+1).padStart(2,'0')}</span><span className="subtopic-title-wrap"><b>{s.title}</b><small>{s.mini.length} mini-topics</small></span>{expanded[i]?<ChevronUp/>:<ChevronDown/>}</button>{expanded[i]&&<div className="subtopic-content"><p>{s.detail}</p><h4>Mini-topics covered</h4><ul className="mini-topic-list">{s.mini.map((m,j)=><li key={j}>{m}</li>)}</ul><h4>Syntax</h4><pre className="code-block">{s.syntax}</pre><h4>Example code</h4><pre className="code-block">{s.code}</pre><h4>Expected output</h4><pre className="output-block">{s.output}</pre></div>}</section>)}
   <h2>Practice questions</h2><ul>{l.practices.map((x,i)=><li key={i}>{x}</li>)}</ul><div className="pharmacy-callout"><b>Mini assignment</b><p>{l.assignment}</p></div>
   <div className="lesson-actions"><Link className="btn primary" to="/editor"><Play size={15}/> Try in Python editor</Link><Link className="btn" to="/quiz">Take course quiz</Link></div>
  </article><aside className="panel lesson-aside"><h3>Course curriculum</h3>{lessons.map((x,i)=><Link className={`module-link ${x.id===l.id?'selected':''}`} to={`/learning/${x.id}`} key={x.id}><span>{String(i+1).padStart(2,'0')}</span>{x.module}{progress.lessons.includes(x.id)&&<CheckCircle2 size={14}/>}</Link>)}</aside></div>
 </>;
}
export default function Learning(){const{id}=useParams();if(id){const l=lessons.find(x=>x.id===id);return l?<Detail l={l}/>:<div className="panel">Lesson not found. <Link to="/learning">Return to learning</Link></div>}return <><PageTitle eyebrow="COMPLETE PYTHON CURRICULUM" title="Python Learning" description="A structured course from absolute basics to Python data analysis and pharmacy-related programming."/><div className="course-banner"><div><span className="hero-tag">{lessons.length} COMPLETE MODULES</span><h2>Learn every concept step by step.</h2><p>Each module contains main topics, subtopics, mini-topics, explanations, syntax, code, output, practice and a mini assignment.</p></div><BookOpen size={55}/></div><div className="curriculum-overview"><b>Curriculum coverage</b><span>{lessons.reduce((n,l)=>n+l.subtopics.length,0)} detailed subtopics</span><span>{lessons.reduce((n,l)=>n+l.subtopics.reduce((m,s)=>m+s.mini.length,0),0)} mini-topics</span><span>{lessons.length} modules</span></div><div className="module-grid">{lessons.map((l,i)=><Link to={`/learning/${l.id}`} className="module-card" key={l.id}><div className="module-card-top"><span className="module-index">{String(i+1).padStart(2,'0')}</span><span className="level-tag">{l.level}</span></div><h3>{l.module}</h3><p>{l.definition}</p><div className="module-card-meta">{l.subtopics.length} topics · {l.subtopics.reduce((n,s)=>n+s.mini.length,0)} mini-topics</div><div className="module-card-bottom">Open module <ChevronRight size={16}/></div></Link>)}</div></>}
