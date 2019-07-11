import React,{ Component } from 'react';
import Button from '../../components/Controls/Button/Button';
import { connect } from 'react-redux';

class Counter extends  Component {

    state = {
        counter :0,
        results: [],
        buttons: {
            increment: 'Add',
            decrement: 'Subtract',
            incBy10: 'Increment By 10',
            decBy15: 'Decrement By 15'
        }
    };

    clickedHandler = (type) => {

        let oldCounter = this.state.counter;
        let newCounter;
        switch(type){
            case 'increment':
                console.log("case:increment");
                newCounter = this.incrementHandler(oldCounter);
                console.log(newCounter);
                break;
            case 'decrement':
                console.log("case:decrement");
                newCounter = this.decrementHandler(oldCounter);
                break;
            case 'incBy10':
                console.log("case:incBy10");
                newCounter = this.incBy10Handler(oldCounter);
                break;
            case 'decBy15':
                console.log("case:decBy15");
                newCounter = this.decBy15Handler(oldCounter);
                break;
            default:
                newCounter = oldCounter;
        }

        this.setState({counter:newCounter});
    };

    incrementHandler(counter) {
        console.log("Increment Handler"+counter);
        return counter+1;
    };

    decrementHandler(counter) {
        return counter-1;
    };

    incBy10Handler(counter) {
        return counter+10;
    };

    decBy15Handler(counter) {
        return counter-15;
    };



    render() {

        let buttons = this.state.buttons;

        let buttonsMap = Object.keys(buttons).map((key) => {
            //return [key,buttons[key]]
           // return (<Button key={key} clicked={() => this.clickedHandler(key)} label={buttons[key]}/>);
            return (<Button key={key} clicked={() => this.props.onIncrementCounter(key)} label={buttons[key]}/>);
        });

        //console.log(buttonsMap);

        return(
            <div>
                <p>Counter: <b>{this.props.counter}</b></p>
                {buttonsMap}
                <hr/>
                <ul>
                    <li align="left">hello</li>
                </ul>
            </div>
        );
    };

}

const mapStateToProps = state => {
    return {
      counter: state.counter
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: (key) => dispatch({type: key})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
