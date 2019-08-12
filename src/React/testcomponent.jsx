import React from 'react';

// Create a react component
export const Testcomponent = (props) => {
    return <div>Hi {props.name}!</div>;
};

export class TestClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div></div>
    }
}