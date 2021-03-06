var React = require('react');
var io = require('socket.io-client');

var Header = require('./parts/header');

// var Router = require('react-router');
// var RouteHandler = Router.RouteHandler;

var APP = React.createClass({

	getInitialState(){

		return {
			status : 'disconnected',
			title : ''
		}
	},

	componentWillMount(){

		this.socket = io('http://localhost:3000');
		this.socket.on('connect',this.connect);
		this.socket.on('disconnect',this.disconnect);
		this.socket.on('welcome',this.welcome);

	},

	connect(){
		this.setState({status:'connected'});
	},

	disconnect(){
		this.setState({status:'disconnected'});

	},

	welcome(serverState){

		this.setState({title:serverState.title});


	},

	render() {
		return (

			<div >
				<div className={this.state.status==='connected' ? 'online' : 'offline'}>

					<Header title={this.state.title} status={this.state.status}  />
					

				</div>
				<div>
				         {React.cloneElement(this.props.children, {data: this.state})}
				</div>

				
				
			</div>

		);
	}
});

module.exports = APP;