import React, { Component } from 'react';
import Title from '../Title';
import Item from './Item';
import style from './style.css';
class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "技能"
        }
    }
    
    componentWillMount() {
        
    }
    
    render() {
        const skill = this.props.skill;
        return (
            <div className={style["skill-info"]}>
                <div className={style["top"]}>
                    <Title title={this.state.title}/>
                </div>
                <div className={style["skill"]}>
                    {skill.map((item,index) => {
                        return <Item key={index} skill={item}/>
                    })}
                </div>

            </div>
        );
    }
}

export default Skill;