import React from 'react';

export default function ToAdopt(props) {

  //imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  // imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  // name: 'Fluffy',
  // sex: 'Female',
  // age: 2,
  // breed: 'Bengal',
  // story: 'Thrown on the street'
  return (
  <div>
    <header className="animalName"> 
      <h1> 
       {props.animal.name}
      </h1>
      <img src={props.animal.imageURL} alt={props.animal.imageDescription}/>
    </header>
    <main> 
      <dl>
        <dt>Sex</dt>
        <dd>{props.animal.sex}</dd>
        <dt>Age</dt>
        <dd>{props.animal.age}</dd>
        <dt>Breed</dt>
        <dd>{props.animal.breed}</dd>
        <dt>Story</dt>
        <dd>{props.animal.story}</dd>
      </dl>
      <button onClick={ () => props.onAdoptPet()}>Adopt</button>
    </main>
  </div>
  );
}