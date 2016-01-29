import React from 'react';
import ReactDOM from 'react-dom';

//clase que crea la lista de tareas
var TodoList = React.createClass({
    render: function(){
    		self = this
        var createItem = function(itemText, index){

          return <li key={index}>{itemText} <span onClick={self.props.hclick.bind(null,index)}>x</span></li>

        }

        return <ul>{this.props.items.map(createItem)}</ul>
    }
})

//clase que crea el formulario y lo muestra junto con la lista de tareas
var FormApp = React.createClass({
    getInitialState: function()
    {
        return {
            text: '',
            items: ["a","b","c","d"]
        };
    },
    onChange: function(e)
    {
        this.setState({text: e.target.value});
    },
    removerElemento: function(index){

    	this.setState({
    		items : React.addons.update(this.state.items, {$splice: [[index, 1]]})
    	})

    },
    handleSubmit: function(e)
    {
        e.preventDefault();
        var nextItems = this.state.items.concat([this.state.text]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    },
    render: function()
    {
        return (
            <div>
                <h3>React Todo List</h3>
                <TodoList items={this.state.items} hclick={this.removerElemento}/>
                <form onSubmit={this.handleSubmit}>
                  <input type="text" onChange={this.onChange} value={this.state.text} />
                  <button type="submit">Add</button>
                </form>
            </div>
        );
    }
});

ReactDOM.render( <FormApp / > ,
  document.getElementById('app')
)
