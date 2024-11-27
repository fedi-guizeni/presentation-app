import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import store from './store';
import SlideShow from './components/SlideShow';
import ControlView from './views/ControlView';
import PresentView from './views/PresentView';
import EditView from './views/EditView';


function App() {
  return (
    <Provider store={store}>
      <Router>
    
        <div>
          <div className="navigation">
            <Link to="/">Home</Link>
            <Link to="/control">Control</Link>
            <Link to="/present">Present</Link>
            <Link to="/edit">Edit</Link>
          </div>
          
          <Routes>
            <Route path="/control" element={<ControlView />} />
            <Route path="/present" element={<PresentView />} />
            <Route path="/edit" element={<EditView />} />
            <Route path="/" element={<SlideShow />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;