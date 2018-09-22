import React, { Component } from 'react';
import me from "../../static/img/me.jpg";
import style from './style.css';

class Head extends Component {
    constructor(props){
        super(props);
        console.log(style);
    }
    

    
    render() {
        return (
            <div className={style.head} >
                <div className={style.left}>
                    <div className={style["left-info"]}>
                        <div className={style["head-image"]}>
                            <img src={me}/>
                        </div>
                        <div className={style.title}>{this.props.resume.title}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Head;