import React, { Component } from 'react';
import Home from './Home';
import style from './style.css'
class App extends Component {
    render() {
        return (
            <div className={style["body"]}>
                <Home/>
            </div>
        );
    }
}

export default App;