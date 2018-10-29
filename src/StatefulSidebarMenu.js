import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const MenuItem = ({activeItem, to, name, text, handleMenuClick }) => {
    return (
        <Link to={to}
              name={name}
              className={activeItem === name ? "item active" : "item"}
              onClick={() => handleMenuClick(name)}>
            {text}
        </Link>
    );
};

class StatefulSidebarMenu extends Component {
    render() {
        const { activeItem, handleMenuClick } = this.props;

        return (
            <Menu pointing vertical>
                <MenuItem to="/viewD" name="viewD" text="View D" activeItem={activeItem} handleMenuClick={handleMenuClick}/>
                <MenuItem to="/viewE" name="viewE" text="View E" activeItem={activeItem} handleMenuClick={handleMenuClick}/>
                <MenuItem to="/viewF" name="viewF" text="View F" activeItem={activeItem} handleMenuClick={handleMenuClick}/>
            </Menu>
        );
    }
};

export default StatefulSidebarMenu;
