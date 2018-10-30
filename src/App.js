import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import SimpleApp from './SimpleApp';
import StatefulApp from './StatefulApp';
import './styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <SimpleApp/>
                <Divider/>
                <StatefulApp/>
            </div>
        );
    }
};

export default App;
