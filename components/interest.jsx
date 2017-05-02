import React from 'react';

export default class Interest extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  componentDidMount() {
  	console.log('INSIDE OF componentDidMount');
    this.props.onGetInterest();
  }

  render() {

  	console.log(this.props);
  	const { interested, skills, teacher } = this.props.interest;
  	// console.log('*******');
  	// console.log(skills);

  	return (
  		<div>
  			<h1>Skill Up Today</h1>
  			<div className="bg-warning">
  				<div className="row">
  					<div className="col-sm-4 col-md-2">
  						<div className="col-sm-8 col-md-10">
              	<b>Teacher: </b>{teacher}
            	</div>
  					</div>
  				</div>
  			</div>
  			<div className="bg-info">
  				<div className="row">
  					<div className="col-sm-4 col-md-2">
  						<b>Skills offered:</b>
  						<div className="col-sm-8 col-md-10">
  							<ul>
	  							{
	  								skills ? skills.map(skill => 
	  									{
	  										return <li>{skill}</li>
	  									}) : []
	  							}
  							</ul>
            	</div>
  					</div>
  				</div>
  			</div>
  			<div className="bg-warning">
  				<div className="row">
  					<div className="col-sm-4 col-md-2">
  						<b>People who are interested:</b>
  						<div className="col-sm-8 col-md-10">
  							<ul>
  							{
  								interested ? interested.map(person => 
	  								{
	  									return <li>{person}</li>
	  								}) : []
  							}
  							</ul>
            	</div>
  					</div>
  				</div>
  			</div>
  			<div className="bg-info">
  				<div className="row">
  					<div className="col-sm-4 col-md-2">
  						<form>
							  <label>
							    Name:
							    <input type="text" name="name" />
							  </label>
							  <input type="submit" value="Submit" />
							</form>
  					</div>
  				</div>
  			</div>
  		</div>
  	);
  }
} 









