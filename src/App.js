
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import { useMemo } from 'react';
import Paragraph from './pages/Paragraph';
import ChatBot from './pages/ChatBot';
import { createTheme,CssBaseline, ThemeProvider} from '@mui/material';
import {themeSettings} from './theme';
import Summary from './pages/Summary';
import { Toaster } from 'react-hot-toast';
import Jsconverter from './pages/Jsconverter';
import ScifiImage from './pages/ScifiImage';
import Register from './pages/signUp';

function App() {
  const theme=useMemo(()=>createTheme(themeSettings()),[])

  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Navbar/>
    <Toaster/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/summary' element={<Summary/>}/>
      <Route path='/paragraph' element={<Paragraph/>} />
      <Route path='/chatbot' element={<ChatBot/>} />
      <Route path='/jsConverter' element={<Jsconverter/>}/>
      <Route path='/scifiImage' element={<ScifiImage/>}/>
      
    </Routes>
    </ThemeProvider>
    </>
  );
}
export default App;
