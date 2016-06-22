import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Home extends React.Component{
	constructor(props) {
    	super(props);
    	this.state = {open: false};
	}

	handleLeftIconClick(e){
		this.setState({open: !this.state.open})
	}

	render(){
		return(
			<div>
			    <AppBar title="Title" onLeftIconButtonTouchTap={this.handleLeftIconClick.bind(this)} iconClassNameRight="muidocs-icon-navigation-expand-more"/>
				<div className="row">
					<RaisedButton label=	"Default" />
				</div>
				<Drawer open={this.state.open}>
		          <MenuItem>Menu Item</MenuItem>
		          <MenuItem>Menu Item 2</MenuItem>
		        </Drawer>
			</div>
		)
	}
}

export default Home