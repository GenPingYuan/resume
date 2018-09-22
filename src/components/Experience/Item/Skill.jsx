import React, { Component } from 'react';
import skill from '../../../contants/skill';
import style from './style.css'
class Skill extends Component {
    constructor(props){
        super(props);
        console.log(style);
    }
    render() {
        return (
            <div>
                {
                    this.props.skillArr.map((item,index)=>{
                        return skill.map((fil,findex) => {
                            if(fil.name === item) {
                                return <img className={style.skillIcon} key={findex} src={fil.icon} alt={fil.name}/>
                            }
                        })
                    })
                }
            </div>
        );
    }
}

export default Skill;