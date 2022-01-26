import React, { Component } from 'react';
import NavigationBar from '../common/NavigationBar';

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <p>Home</p>
            </div>
        );
    }
}

export default Home;