import React from 'react';

export default class Interest extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  componentDidMount() {
    this.props.onGetInterest();
  }

  render() {
  	const { interested, skills, teacher } = this.props.data;

  	return (
     <div>
        <div className="row">
          <div className="col-md-1 top-padding"></div>
          <div id="portfolio" className="col-md-10 skills-section top-padding text-center">
            Skills
          </div>
          <div className="col-md-1 top-padding"></div>
        </div>

        

        <div className="row">
          <div className="col-md-1 top-padding"></div>
          <div className="col-md-10 skills-section top-padding text-center">
            <p style={{fontSize: 18}}><u>My Skills</u></p>
          </div>
          <div className="col-md-1 top-padding"></div>
        </div>

        <div className="row">
          <div className="col-md-1 top-padding"></div>
          <div className="col-md-10 skills-section text-center">
            <ul className="skills-list">
              {skills ? skills.map(skill => (<li><a className="skill" href="#">{skill}</a></li>)) : <li>no skills listed</li> }
            </ul>
          </div>
          <div className="col-md-1 top-padding"></div>
        </div>

        <div className="row">
          <div className="col-md-1 top-padding"></div>
          <div className="col-md-10 skills-section top-padding text-center">
            <p style={{fontSize: 18}}><u>People who are interested</u></p>
          </div>
          <div className="col-md-1 top-padding"></div>
        </div>

        <div className="row">
          <div className="col-md-1 top-padding"></div>
          <div className="col-md-10 skills-section text-center">
            <ul className="skills-list">
              <li><a className="skill" href="#">Mark Zuckerberg</a></li>
              <li><a className="skill" href="#">Elon Musk</a></li>
              <li><a className="skill" href="#">Sam Altman</a></li>
            </ul>
          </div>
          <div className="col-md-1 top-padding"></div>
        </div>
      </div>

  		
  	);
  }
} 

