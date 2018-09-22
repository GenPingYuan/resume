import React, { Component } from 'react';
import style from './style.css';
import randomColor from '../../util/randomColor';
class No extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const color = randomColor();
        return (
            <div>
                <div className={style.number} style={{borderColor: color, color: color}}>
                    {this.props.number}
                </div>
            </div>
        );
    }
}

export default No;