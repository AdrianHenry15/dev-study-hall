import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Javascript from './components/Javascript';
import JsLibs from './components/Javascript/Libraries/JsLibs';
import JsFrameworks from './components/Javascript/Frameworks/JsFrames';
import FrontEnd from './components/Front-End/FrontEnd';
import FeStyleSheets from './components/Front-End/StyleSheets/FeStyles';
import FeFrameworks from './components/Front-End/Frameworks/FeFrames';
import BackEnd from './components/Back-End/BackEnd'
import BeDb from './components/Back-End/Databases/BeDb'

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/javascript" element={<Javascript />} />
          <Route path="/javascript/jsLibs" element={<JsLibs />} />
          <Route path="/javascript/jsFrameworks" element={<JsFrameworks />} />
          <Route path="/front-end" element={<FrontEnd />} />
          <Route path="/front-end/feStylesheets" element={<FeStyleSheets />} />
          <Route path="/front-end/feFrameworks" element={<FeFrameworks />} />
          <Route path="/back-end" element={<BackEnd />} />
          <Route path="/back-end/beDb" element={<BeDb />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
