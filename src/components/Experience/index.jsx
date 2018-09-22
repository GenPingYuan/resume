import React, { Component } from 'react';
import Title from '../Title';
import Item from './Item';
import No from '../No';
import style from './style.css';
class Experience extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "工作经验"
        }
    }
    render() {
        return (
            <div>
                <div className={style["top"]}>
                    <Title title={this.state.title}/>
                </div>
                <div className={style["content"]}>
                    {
                        this.props.experience.map((item,index) => {
                            return(
                                <span>
                                    <No number={index + 1}/>
                                    <Item key={index} experience={item}/>
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Experience;