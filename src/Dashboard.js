import React from 'react';
import ToAdopt from './ToAdopt';
import {connect} from 'react-redux';
import {fetchDog, adoptDog} from './actions/dog';
import {fetchCat, adoptCat} from './actions/cat';


class Dashboard extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchDog()); 
    this.props.dispatch(fetchCat());
  }

  onAdoptDog() {
    this.props.dispatch(adoptDog());
  }

  onAdoptCat() {
    this.props.dispatch(adoptCat());
  }

  render() {
    return (
      <div className="parent">
        <section className="dogToAdopt">
          <ToAdopt animal={this.props.dog} onAdoptPet={this.onAdoptDog}/>
        </section >
        <section className="catToAdopt">
          <ToAdopt animal={this.props.cat} onAdoptPet={this.onAdoptCat}/> 
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