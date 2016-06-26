import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class App extends React.Component{
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
			    <AppBar 
			    	title="AcademBox" 
			    	onLeftIconButtonTouchTap={this.handleLeftIconClick.bind(this)} 
			    	showMenuIconButton={false}/>
				<div className="row">
					{this.props.children}
				</div>
				<Drawer 
					docked={false}
					width={200}
					open={this.state.open}
					onRequestChange={(open) => this.setState({open})} >
		          <MenuItem>Menu Item</MenuItem>
		          <MenuItem>Menu Item 2</MenuItem>
		        </Drawer>
			</div>
		)
	}
}

export default App