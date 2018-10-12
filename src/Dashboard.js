import React from 'react';
import ToAdopt from './ToAdopt';
import {connect} from 'react-redux';

class Dashboard extends React.Component {

  onAdoptPet() {
    console.log(`You've Adopted : `);
  }

  render() {
    return (
      <div className="parent">
        <section className="catToAdopt">
          <ToAdopt animal={this.props.dog} onAdoptPet={this.onAdoptPet}/>
        </section >
        <section className="dogToAdopt">
          <ToAdopt animal={this.props.cat} onAdoptPet={this.onAdoptPet}/> 
        </section>
      </div> 
    );
  }
}

const mapStateToProps = state => {
  return {
    dog: state.dog.data,
    cat: state.cat.data
  }
}

export default connect(mapStateToProps)(Dashboard);