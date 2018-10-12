import React from 'react';
import ToAdopt from './ToAdopt';
import {connect} from 'react-redux';
import {fetchDog, adoptDog} from './actions/dog';
import {fetchCat, adoptCat} from './actions/cat';


class Dashboard extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchDog()); 
    this.props.dispatch(fetchCat());
  }

  onAdoptDog() {
    console.log('did it run?')
    this.props.dispatch(adoptDog());
  }

  onAdoptCat() {
    this.props.dispatch(adoptCat());
  }

  render() {
    let dogError;
    let catError;

    if (this.props.dogError) {
      dogError = <p>The dog could not load properly.</p>
    }

    if (this.props.catError) {
      catError = <p>The cat could not load properly.</p>
    }

    if (this.props.dog && this.props.cat) {
      return (
        <main className="parent">
          <section className="dogToAdopt">
            <ToAdopt animal={this.props.dog} onAdoptPet={() => this.onAdoptDog()}/>
          </section >
          <section className="catToAdopt">
            <ToAdopt animal={this.props.cat} onAdoptPet={() => this.onAdoptCat()}/> 
          </section>
        </main> 
      );
    } else if (this.props.dogError || this.props.catError) {
      return <p>{dogError} {catError}</p>
    } else {
      return <p>Loading...</p>
    }
  }
}

const mapStateToProps = state => {
  return {
    dogError: state.dog.error,
    catError: state.cat.error,
    dog: state.dog.data,
    cat: state.cat.data
  }
}

export default connect(mapStateToProps)(Dashboard);