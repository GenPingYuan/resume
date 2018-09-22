import React, { Component } from 'react';
import icon from '../../static/font/iconfont.css';
class Icon extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <i className={icon.iconfont + " " + icon["icon-" + this.props.icon]}></i>
        );
    }
}

export default Icon;