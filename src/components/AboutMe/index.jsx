import React, { Component } from 'react';
import Title from '../Title';
import Item from './Item';
import style from "./style.css";
class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "我的信息"
        }
    }

    render() {
        const resume = this.props.resume;
        return (
            <div className={style["about-me"]}>
                <div className={style.top}>
                    <Title title={this.state.title}/>
                </div>
                <div className={style["resume-info"]}>
                    <Item icon="user-name" label="姓名:" value={resume.name}/>
                    <Item icon="sexm" label="性别:" value={resume.sex}/>
                    <Item icon="age" label="生日:" value={resume.age}/>
                    <Item icon="experience" label="目前工作:" value={resume.job}/>
                    <Item icon="school1" label="毕业院校:" value={resume.school}/>
                    <Item icon="school" label="学历:" value={resume.degree}/>
                    <Item icon="date" label="毕业时间:" value={resume.graduation}/>
                    <Item icon="date" label="工作时间:" value={resume.workTime}/>
                    <Item icon="phone" label="手机号码:" value={resume.phone}/>
                    <Item icon="email" label="邮箱:" value={resume.email}/>
                </div>
                
            </div>
        );
    }
}

export default AboutMe;