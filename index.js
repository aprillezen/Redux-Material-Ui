import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './modules/App'
import Home from './modules/Home'
import Student from './modules/Student'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin()

render((
	<MuiThemeProvider>
		<Router history={browserHistory} >
			<Route path="/" component={App}>
				<Route path="/home" component={Home} />
				<Route path="/student" component={Student} />
			</Route>
		</Router>
	 </MuiThemeProvider>
	 ), document.getElementById('app')
)


