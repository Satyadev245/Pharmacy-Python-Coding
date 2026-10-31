import {Routes,Route,Navigate,Outlet} from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Learning from './pages/Learning';
import EditorPage from './pages/Editor';
import Practice from './pages/Practice';
import Pharmacy from './pages/Pharmacy';
import Quiz from './pages/Quiz';
import Start from './pages/Start';
import AdminPortal from './pages/AdminPortal';
import {Progress,Assignments,Projects,Leaderboard,Resources,Profile,SettingsPage,Backup} from './pages/OtherPages';
import {useApp} from './context/AppContext';
function StudentGate(){const{name}=useApp();return name?<Outlet/>:<Navigate to="/start" replace/>}
function Missing(){return <div className="panel"><h2>Page not found</h2><p>This route does not exist.</p></div>}
export default function App(){return <Routes><Route path="/start" element={<Start/>}/><Route path="/admin/*" element={<AdminPortal/>}/><Route element={<StudentGate/>}><Route element={<Layout/>}><Route index element={<Navigate to="/dashboard" replace/>}/><Route path="dashboard" element={<Dashboard/>}/><Route path="learning" element={<Learning/>}/><Route path="learning/:id" element={<Learning/>}/><Route path="editor" element={<EditorPage/>}/><Route path="practice" element={<Practice/>}/><Route path="pharmacy" element={<Pharmacy/>}/><Route path="quiz" element={<Quiz/>}/><Route path="assignments" element={<Assignments/>}/><Route path="projects" element={<Projects/>}/><Route path="progress" element={<Progress/>}/><Route path="leaderboard" element={<Leaderboard/>}/><Route path="resources" element={<Resources/>}/><Route path="profile" element={<Profile/>}/><Route path="settings" element={<SettingsPage/>}/><Route path="backup" element={<Backup/>}/></Route></Route><Route path="*" element={<Missing/>}/></Routes>}
