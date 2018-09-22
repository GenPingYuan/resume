import React, { Component } from 'react';
import style from './style.css';
class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const skill = this.props.skill;
        return (
            <div className={style["skill-item"]}>
                <div>
                    <div className={style["skill-icon"]}>
                        <img src={skill.icon}/>
                    </div>
                    <div className={style["skill-name"]}>
                        {skill.name}
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;