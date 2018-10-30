import React, { Component } from 'react';
import { Menu, Grid } from "semantic-ui-react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import ViewContainer from './ViewContainer';
import { routes } from './routes';

const SidebarMenu = () => {
    return (
        <Menu pointing vertical>
            <NavLink to="/viewA" name="viewA" className="item" activeClassName="active">View A</NavLink>
            <NavLink to="/viewB" name="viewB" className="item" activeClassName="active">View B</NavLink>
            <NavLink to="/viewC" name="viewC" className="item" activeClassName="active">View C</NavLink>
        </Menu>
    );
};

export default class SimpleApp extends Component {
    render() {
        return (
            <div className="App">
                <h1>SimpleApp</h1>
                <Router>
                    <Grid>
                        <Grid.Column width={3}>
                            <SidebarMenu/>
                        </Grid.Column>
                        <Grid.Column stretched width={10}>
                            <ViewContainer routes={routes.simple}/>
                        </Grid.Column>
                    </Grid>
                </Router>
            </div>
        );
    }
};
