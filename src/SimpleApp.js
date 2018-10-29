import React, { Component } from 'react';
import { Header, Menu, Grid } from "semantic-ui-react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import ViewContainer from './ViewContainer';

const ViewA = () => <Header size="large">View A</Header>;
const ViewB = () => <Header size="large">View B</Header>;
const ViewC = () => <Header size="large">View C</Header>;

const SidebarMenu = () => {
    return (
        <Menu pointing vertical>
            <NavLink to="/viewA" name="viewA" className="item" activeClassName="active">View A</NavLink>
            <NavLink to="/viewB" name="viewB" className="item" activeClassName="active">View B</NavLink>
            <NavLink to="/viewC" name="viewC" className="item" activeClassName="active">View C</NavLink>
        </Menu>
    );
};

const routes = [
    {
        path: "/viewA",
        content: ViewA
    },
    {
        path: "/viewB",
        content: ViewB,
    },
    {
        path: "/viewC",
        content: ViewC,
    }
];

export default class SimpleApp extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Grid>
                        <Grid.Column width={3}>
                            <SidebarMenu/>
                        </Grid.Column>
                        <Grid.Column stretched width={10}>
                            <ViewContainer routes={routes}/>
                        </Grid.Column>
                    </Grid>
                </Router>
            </div>
        );
    }
};
