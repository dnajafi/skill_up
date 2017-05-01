import React from 'react';

export default class Interest extends React.Component {

	constructor() {
    super();
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

  	return (
  		<div>
  			<h1>Skill Up Today</h1>
  			<div className="bg-warning">
  				<div className="row">
  					<div className="col-sm-4 col-md-2">
  						<b>Teacher:</b>
  						<div className="col-sm-8 col-md-10">
              	{teacher}
            	</div>
  					</div>
  				</div>
  			</div>

  		</div>
  	);



  }

} 