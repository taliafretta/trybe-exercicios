import React from 'react';
import Image from './Image';
import staringCat from './starinCat.jpg';

class App extends React.Component {
  render() {
    return (
      <main>
        <Image source={staringCat} alternativeText={"Cute cat staring"} />
      </main >
    );
  }
}

export default App;
