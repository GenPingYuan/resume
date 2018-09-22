import React, { Component } from 'react';
import Head from '../../components/Head';
import AboutMe from '../../components/AboutMe';
import Dividing from '../../components/Dividing';
import Skill from '../../components/Skill';
import Experience from '../../components/Experience';

import skillList from '../../contants/skill';
import experience from '../../contants/experience';
const info = require("../../contants/myselyInfo");

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resume: {},
            skill: [],
            experience: []
        }
    }

    
    componentWillMount() {
        this.setState({
            resume: info[0],
            skill: skillList,
            experience
        })
    }
    
    render() {
        return (
            <div>
                <Head resume={this.state.resume}/>
                <AboutMe resume={this.state.resume}/>
                <Dividing/>
                <Skill skill={this.state.skill}/>
                <Dividing/>
                <Experience experience={this.state.experience}/>
            </div>
        );
    }
}

export default Home;