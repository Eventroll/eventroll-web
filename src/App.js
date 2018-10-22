import React, {Component} from 'react';
import './App.css';
import DangerButton from "./components/ui/buttons/dangerButton";


class App extends Component {

    constructor(props) {
        super(props);
        this.emptyFunction = this.emptyFunction.bind(this);
    }

    emptyFunction() {

    }

    render() {
        return <DangerButton buttonName='Danger Button' onClick={this.emptyFunction()}/>
    }
}


export default App;
