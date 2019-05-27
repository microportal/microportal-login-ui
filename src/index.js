import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './App';

const topBar = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
    domElementGetter,
});

export function bootstrap(props) {
    return topBar.bootstrap(props);
}

export function mount(props) {
    return topBar.mount(props);
}

export function unmount(props) {
    return topBar.unmount(props);
}

function domElementGetter() {
    return document.getElementById("microportal");
}
