import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Javascript from './components/Javascript';
import JsLibs from './components/Javascript/Libraries';
import JsFrameworks from './components/Javascript/Frameworks';
import FrontEnd from './components/Front-End';
import FeStyleSheets from './components/Front-End/StyleSheets';
import FeFrameworks from './components/Front-End/Frameworks';
import BackEnd from './components/Back-End'
import BeDb from './components/Back-End/Databases'

import './App.scss';

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
