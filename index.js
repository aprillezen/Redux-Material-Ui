import React from 'react'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Home from './app/Home'
import {green500,green600,green700} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green600,
    primary3Color: green700,

  }
});



injectTapEventPlugin()

render((
	 <MuiThemeProvider muiTheme={muiTheme}>
		<Home/>
	  </MuiThemeProvider>
	 ), document.getElementById('app')
)



