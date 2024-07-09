
//MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. (This challenge should not change the look of the page)

// import React from 'react';

// class BasicInfo extends React.Component {
//   render() {
//     const { Name, Number, DOB, FavoriteFood } = this.props.person;
//     return (
//       <div>
//         <p>Name: {Name}</p>
//         <p>Number: {Number}</p>
//         <p>Date of Birth: {DOB}</p>
//         <p>Favorite Food: {FavoriteFood}</p>
//       </div>
//     );
//   }
// }

// export default BasicInfo;

//HARD: Now that you have a basic react app to display one person’s worth of information, now modify the app to iterate over an array of people’s basic information, while still keeping the new list of contacts in the top-level of state.
//(Optional: add styling to space out each person’s info)


import React from 'react';
import './App.css'; 

class BasicInfo extends React.Component {
  render() {
    const { Name, Number, DOB, FavoriteFood } = this.props.person;
    return (
      <div className="basic-info-container">
        <p>Name: {Name}</p>
        <p>Number: {Number}</p>
        <p>Date of Birth: {DOB}</p>
        <p>Favorite Food: {FavoriteFood}</p>
      </div>
    );
  }
}

export default BasicInfo;
