import React from 'react';
import ReactDOM from 'react-dom';

var AmigosContenedor = React.createClass({
    getInitialState: function(){
        return {
            nombre: 'Felipe Uribe',
            amigos: ['Daniel', 'Juan', 'Pepito']
        }
    },
    funcionAgregaAmigo: function(txt){
        this.state.amigos.push(txt)
        this.setState({
            amigos: this.state.amigos
        })
    },
    render: function(){
        return(
            <div>
                <h3>{this.state.nombre}</h3>
                <AddAmigo  funcionAgregaAmigo={this.funcionAgregaAmigo}/>
                <ListaAmigos lista={this.state.amigos} />
            </div>
        )
    }
})

var AddAmigo = React.createClass({
    getInitialState: function(){
        return{
            inputText: ''
        }
    },
    updateAmigo: function(e){
        this.setState({
            inputText : e.target.value
        })        
    },
    btnAddAmigo: function(){
        this.props.funcionAgregaAmigo(this.state.inputText)
        this.setState({
            inputText: ''
        })

    },
    render: function(){
        return(
                <div>
                    <input type="text" value={this.state.inputText} onChange={this.updateAmigo}/>
                    <button onClick={this.btnAddAmigo}>add</button>
                </div>
            )
    }

})

var ListaAmigos = React.createClass({
    render: function(){
        var listItems = this.props.lista.map(function(amigo){
            return <li>{amigo}</li>
        })
        return(
                <ul>{listItems}</ul>
            )
    }
})

ReactDOM.render( <AmigosContenedor / > ,
  document.getElementById('app')
)
