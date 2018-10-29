import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import { Route } from "react-router-dom";

class ViewContainer extends Component {
    render() {
        const { routes } = this.props;

        return (
            <Segment>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        name={route.name}
                        component={route.content}
                    />
                ))}
            </Segment>
        );
    }
};

export default ViewContainer;
