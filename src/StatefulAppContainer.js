import React, { Component } from 'react';
import { Grid } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import StatefulSidebarMenu from "./StatefulSidebarMenu";
import ViewContainer from "./ViewContainer";
import { routes } from './routes';

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
        const route = routes.stateful.filter((route) => {
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
                    <ViewContainer routes={routes.stateful}/>
                </Grid.Column>
            </Grid>
        );
    }
}

export default withRouter(props => <StatefulAppContainer {...props} />);
