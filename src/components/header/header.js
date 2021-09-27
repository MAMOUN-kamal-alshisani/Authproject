import React from "react";
import { Navbar, Alignment, Button } from "@blueprintjs/core";
class Header extends React.Component {
    // Must be called contextType
    // then, we will have access to this.context
    // static contextType = ThemeContext;

    render() {
        return (
            <header>
                <Navbar>
                    <Navbar.Group align={Alignment.LEFT}>
                        <Navbar.Heading> 
                    
                      <Button text ='Home'/>
                        </Navbar.Heading>
                    </Navbar.Group>
                </Navbar>
            </header>
        )
    }
}

export default Header;

