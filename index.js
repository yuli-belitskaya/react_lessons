import React, { Component } from 'react'

import Catalog from "./src/components/catalog";



class Header extends Component {
    render() {
        return (
            <div
                style={{ border: '1px solid #000', textAlign: 'center' }}
            >
                {this.props.children}
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Header>
                    <Catalog />
                </Header>
            </div>
        );
    }
}

export default App;