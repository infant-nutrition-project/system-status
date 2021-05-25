import React, { Component } from "react";

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="/" className="navbar-brand">DIAPER System Status</a>
                    </div>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent;