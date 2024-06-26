import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
} from 'react-router-dom';
import Main from './Main';

const TITLE = "Fred's Personal Website"

function App() {
  return <BrowserRouter>
      <Route path="/" element={<App />}>
      </Route> 
    </BrowserRouter>
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);