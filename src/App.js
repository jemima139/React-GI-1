//VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with your basic information for example name, number, date of birth and etc. This div should be hard-coded to prepare for the Medium Challenge.
//import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <p>Name: Jemima</p>
//         <p>Number: 704-123-4567</p>
//         <p>Date of Birth: July 29, 1997</p>
//         <p>FavoriteFood: 'Dumplings'</p>

//       </div>
//     );
//   }
// }

// export default App;

//EASY: Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set ‘this.state’ to an empty object inside of the ‘App’ class. Inside of ‘this.state’ create a ‘person’ property and set it to an empty object
//import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {}
//     };
//   }

//   render() {
//     return (
//       <div>
//      <p>Name: Jemima</p>
//         <p>Number: 704-123-4567</p>
//         <p>Date of Birth: July 29, 1997</p>
//         <p>FavoriteFood: 'Dumplings'</p>
//       </div>
//     );
//   }
// }

// export default App;

//MEDIUM To HARD:

import React, { Component } from 'react';
import BasicInfo from './BasicInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
      {
        Name: 'Jemima',
        Number: '704-123-4567',
        DOB: 'July 29, 1997',
        FavoriteFood: 'Dumplings'
        
      }, 

      {
        Name: 'Mei',
        Number: '704-321-7654',
        DOB: 'January 19, 1988',
        FavoriteFood: 'Burger'

      }, 

      {
        Name: 'Ponyo',
        Number: '704-456,1230',
        DOB: 'June 21, 1993',
        FavoriteFood: 'French Toast'
      },

      {
        Name: 'Howl',
        Number: '704-123-6754',
        DOB: 'October 15, 2000',
        FavoriteFood: 'Sushi'

      }, 

   {   Name: 'Haku',
        Number: '704-213-5467',
        DOB: 'November 04, 1997',
        FavoriteFood: 'Pizza'
      }
    ]
    };
  }

  render() {
    return (
      <div>
        {this.state.person.map((person, index)=>(
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

export default App;
