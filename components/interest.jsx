import React from 'react';

export default class Interest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: ''
    };
  }

  componentDidMount() {
    this.props.onGetInterest();
  }

  render() {
    return(
      <div>
        <div className="row">
          <div className="col-md-1 top-padding"></div>
          <div id="contact" className="col-md-10 contact-me-section top-padding text-center">
            Add your name to the list above!
          </div>
          <div className="col-md-1 top-padding"></div>
        </div>

        

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 contact-me-section text-center">
            <hr style={{width: 1}} />
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5 contact-me-section">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" id="input-text" placeholder="Name" onChange={e => this.setState({ name: e.target.value })} />
                <input type="text" className="form-control" id="input-text" placeholder="Email" onChange={e => this.setState({ email: e.target.value })} />
                <input type="text" className="form-control" id="input-text" placeholder="Phone Number" onChange={e => this.setState({ phone: e.target.value })} />
                <button type="submit" className="btn btn-primary" onClick={() => this.props.onAddToInterest(this.state.name, this.state.email, this.state.phone)}>Submit</button>
              </div>
            </form>
          </div>
          <div style={{fontSize: 18}} className="col-md-5 contact-me-section text-center">
            <p>Want to get in touch with me?  Be it to request more info about myself or my experience, to ask for my resume, tips on how to solve your sudoku, random questions about the universe and the meaning of life, or even if only for some nice Fika here in stunning San Francisco... just feel free to drop me a line anytime.</p>
           <br/>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    );
  }
} 

