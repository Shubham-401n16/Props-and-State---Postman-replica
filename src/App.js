import React from 'react';
import RESTy from './components/RESTy';
import './components/styles.scss';

function App() {
    return (
        <div className='App'>
            <header>
                <h1>RESTy</h1>
            </header>
            <div className="content">
                <RESTy />
            </div>
            <footer>Created by Shubham Majumdar</footer>
        </div>
    );
}

export default App;
