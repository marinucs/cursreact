import React, { Component } from 'react';

class ClassComponent extends Component {

    // Warning: Useless constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1> Sóc un component de classe </h1>
                <h1> Props Variable: { this.props.propsFunctional1 } </h1>
                <h1> Props String: { this.props.propsFunctional2String } </h1>
                <h1> Props Number: { this.props.propsFunctional3Number } </h1>
                <h1> Props Objecte: { this.props.propsFunctional4Object.nom } </h1>
            </>
        )
    }

}
export default ClassComponent;