import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import SystemStatusComponent from "./SystemStatusComponent";

class App extends Component {
    render() {
        return (
            <>
                <HeaderComponent />
                <SystemStatusComponent />
            </>
        )
    }
}

export default App;