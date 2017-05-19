import React from 'react';

const profileStyle = {
  paddingTop: 45,
  marginTop: 24
};

export default class Profile extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  componentWillMount(){
    document.body.style.backgroundColor = "#A9A9A9";
  }
  
  componentWillUnmount(){
    document.body.style.backgroundColor = null;
  }

  componentDidMount() {
    this.props.onGetInterest();
  }

  render() {
  	const { teacher, image_url, description, motto } = this.props.data;

    return (
      <div>
        <div style={ profileStyle } className="row">
          <div className="col-md-1 add-padding"></div>
          <div className="col-md-10 about-me add-padding">
            <div id="about" className="col-md-7 add-padding bio-position text-center">
              <p style={{fontSize: 20}}>{teacher}</p>
              <p>{description}</p>
              <hr/>
              <p>{motto}</p>
            </div>
            <div className="col-md-3">
              <a href="#">
                <img className="img-responsive profile-pic" src={image_url} alt="A picture of me." />
              </a>
            </div>
          </div>
          <div className="col-md-1 add-padding"></div>
        </div>
      </div>
    );
  }
}