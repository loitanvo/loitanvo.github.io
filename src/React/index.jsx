// Import the React and ReactDOM dom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Testcomponent, TestClass } from './testcomponent';

// Create a react component
const App = () => {
    console.log('hello world');
    return <TestClass name="Loi" />;
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
); 