import React from "react";
import { Route, Switch } from 'react-router-dom';
import { Landing } from '../pageListAsync';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    );
  };
};

export default App;
