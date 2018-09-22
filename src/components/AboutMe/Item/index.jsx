import React, { Component } from 'react';
import Icon from '../../Icon';
import style from './style.css';
class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Icon icon={this.props.icon}/>
                {/* <i className={"iconfont icon-" + this.props.icon }></i> */}
                <span className={style.label}>{this.props.label}</span>
                <span className={style.value}>{this.props.value}</span>
            </div>
        );
    }
}

export default Item;