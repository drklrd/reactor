var React = require('react');

var Speaker = React.createClass({

	render(){
		return (
			 <h1>Speaker{this.props.data.status}</h1>
		)
	}
});

module.exports= Speaker;	