import React from 'react';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="parent">
      <section className="catToAdopt">
      <toAdopt />
      </section >
      
      <section className="dogToAdopt">
      <toAdopt /> 
      </section>
      
      </div> 
    )
  }
}