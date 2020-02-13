import React from 'react';
import {Route} from 'react-router-dom';

import AddTodo from './Components/AddTodo/AddTodo'
import List from './Components/List/List'
import Edit from './Components/Edit/Edit'
function Routes() {
    return (
      <>
        <Route exact path="/list" component={List}/>
        <Route exact path="/" >
          <AddTodo/>
          <List/>
        </Route>
        <Route exact path="/edit" component={Edit}/>
      </>
    )
}
export default Routes;