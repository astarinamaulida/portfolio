import React, {FC} from 'react';
import './App.css';
import { About } from './components/About/About';

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <About description="Hi, my name is Asta!" />
      </header>
    </div>
  );
}

export default App;
