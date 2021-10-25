import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/'
import News from '../pages/News'
import Discs from '../pages/Discs'
import Artists from '../pages/Artists'

export default () =>
  <BrowserRouter>
    <Switch name='http://localhost:3000'>
      <Route exact path='/' component={Home}/>
      <Route exact path='/news' component={News}/>
      <Route exact path='/discs' component={Discs}/>
      <Route exact path='/artists' component={Artists}/>
    </Switch>
  </BrowserRouter>