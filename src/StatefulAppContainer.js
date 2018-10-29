import React, { Component } from 'react';
import { Grid, Header } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import StatefulSidebarMenu from "./StatefulSidebarMenu";
import ViewContainer from "./ViewContainer";

const ViewD = () => <Header size="large">View D</Header>;
const ViewE = () => <Header size="large">View E</Header>;
const ViewF = () => <Header size="large">View F</Header>;

const routes = [
    {
        name: "viewD",
        path: "/viewD",
        content: ViewD,
    },
    {
        name: "viewE",
        path: "/viewE",
        content: ViewE,
    },
    {
        name:"viewF",
        path: "/viewF",
        content: ViewF,
    }
];

class StatefulAppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeView: "",
        };

        this.getRouteName = this.getRouteName.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.setActiveMenuItem = this.setActiveMenuItem.bind(this);
    }

    componentDidMount() {
        this.setActiveMenuItem();
    }

    getRouteName(pathname = this.props.location.pathname) {
        const route = routes.filter((route) => {
            return route.path === pathname;
        })[0];
        return (route ? route.name : null);
    }

    handleMenuClick(name) {
        this.setState({ activeView: name});
    }

    setActiveMenuItem() {
        const routeName = this.getRouteName();
        if (routeName) {
            this.setState({activeView: routeName});
        }
    }

    render() {
        return (
            <Grid>
                <Grid.Column width={3}>
                    <StatefulSidebarMenu activeItem={this.state.activeView}
                                         handleMenuClick={this.handleMenuClick}/>
                </Grid.Column>
                <Grid.Column stretched width={10}>
                    <ViewContainer routes={routes}/>
                </Grid.Column>
            </Grid>
        );
    }
}

export default withRouter(props => <StatefulAppContainer {...props} />);
