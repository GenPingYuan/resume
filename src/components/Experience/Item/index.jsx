import React, { Component } from 'react';
import Skill from './Skill';
import style from './style.css';
class Item extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const experience = this.props.experience;
        return (
            <div className={style.project}>
               <div>
                    <div className={style.label}>
                        项目名称:
                    </div>
                    <div>
                        {experience.projectName}
                    </div>
                </div>
                <div>
                    <div className={style.label}>
                        项目周期:
                    </div>
                    <div>
                        {experience.time}
                    </div>
                </div>
                <div>
                    <div className={style.label}>
                        运用技术:
                    </div>
                    <div className={style.skillList}>
                        <Skill skillArr={experience.skill}/>
                    </div>
                </div>

                <div>
                    <div className={style.label}>
                        项目描述:
                    </div>
                    <div>
                        {experience.description}
                    </div>
                </div>

                <div>
                    <div className={style.label}>
                        我负责的模块:
                    </div>
                    <div>
                        {/* { experience.mywork} */}
                        <div dangerouslySetInnerHTML={{__html:experience.mywork}}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;