import React, { PureComponent } from 'react';
import Form from './Form';
import List from './List';

class App extends PureComponent {
  render() {
    return (
      <main>
        <Form />,
        <List />
      </main>
    );
  }
}

export default App;
