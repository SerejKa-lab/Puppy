import React from 'react';
import './App.css';
import Item from './Item';

class App extends React.Component {

    componentDidMount(){
        setInterval(this.setNewActiveItem, 1000);
    }

    state = {
        items:[
            {id: 0},
            {id: 1},
            {id: 2},
            {id: 3},
            {id: 4},
            {id: 5},
            {id: 6},
            {id: 7},
            {id: 8}
        ],
        activeItem: 5,
        counter: 0,
        disabled: false        
    }

    winNumber = 10;

    getItemsArray = () => this.state.items.map( el => {
        return(
            (this.state.activeItem === el.id) 
            ? <Item key = {el.id} increaseCounter = { this.increaseCounter.bind(this) } active /> 
            : <Item key = { el.id} increaseCounter = { null } />
        )
    });

    setNewActiveItem = () => {
        let newItem = Math.floor( Math.random()*9 );
        this.setState( { activeItem: newItem } )
    }
    
    Counter = () => {
        return ( this.state.disabled )
        && <div className = 'counter' >Win!!!</div>
        || <div className = 'counter' >{ this.state.counter }</div>
    }

    increaseCounter() {
        if (this.state.disabled ){
            this.setState( { disabled: false } )
        }
        if ( this.state.counter < this.winNumber-1 ) {
        this.setState( { counter: this.state.counter + 1 } );
        this.audio.play();
        } else {
            this.setState( { counter: this.state.counter + 1 } );
            this.audio.play();
            this.setState({ disabled: true })
        }

    }
     
    
    resetCounter = () => {
        this.setState( { disabled: false, counter: 0 } )
    }
    
        
    render() {
        return(
            <div className = 'app' >
                { this.getItemsArray() }
                <audio  ref={(audioTag) => { this.audio = audioTag }} src = '../laj-schenka.mp3' />
                <div className = 'counterPanel'>
                    <this.Counter />
                    <button onClick = { this.resetCounter }>Reset</button>
                </div>
            </div>
        )
    }
}


export default App;
