import React, { Component } from 'react';
import style from './style.css';
class Title extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={style["second-title"]}>
                {this.props.title}
            </div>
        );
    }
}

export default Title;