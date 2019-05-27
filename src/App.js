import React from 'react';
import {Provider} from 'react-redux';
import Login from "./login/Login";
import {setEventDistributor} from "./eventDistributor";

export default class App extends React.Component {

    state = {
        store: this.props.store,
        globalEventDistributor: this.props.globalEventDistributor,
    }

    componentDidMount() {
        setEventDistributor(this.state.globalEventDistributor)
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        if (this.state.store && this.state.globalEventDistributor) {
            return (
                <Provider store={this.state.store}>
                    <Login/>
                </Provider>
            )
        }

        return <div/>;
    }
}
