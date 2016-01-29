import React from 'react';
import ReactDOM from 'react-dom';


//  Click en boton
var LikeButton = React.createClass({

  getInitialState: function() {
    return {
      liked: false,
    }
  },
  btnClick: function(event) {
    this.setState({
      liked: !this.state.liked
    })
  },
  render: function() {

    var text = this.state.liked ? 'Activo' : 'DesActivo'

    return ( < p onClick = {
        this.btnClick
      } >
      Estado: {
        text
      } < /p>
    )
  }
})

ReactDOM.render( < LikeButton / > ,
  document.getElementById('app')
)
