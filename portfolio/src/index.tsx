import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/Home';

const App: React.FC = () => (
  <>
    <HomePage />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));