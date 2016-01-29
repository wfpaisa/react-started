import React from 'react';
import ReactDOM from 'react-dom';

var Lista = React.createClass({
	render: function(){
		var itemLi = function(){
			return<li>uno</li>
		}

		return <ul>{itemLi()}</ul>
	}
})

ReactDOM.render( < Lista / > ,
  document.getElementById('app')
)
