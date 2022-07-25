import React from 'react';

const FunctionalComponent = (props) => {
    return (
        <>
            <h1> Sóc un component funcional </h1>
            <h1> Props Variable: { props.propsFunctional1 } </h1>
            <h1> Props String: { props.propsFunctional2String } </h1>
            <h1> Props Number: { props.propsFunctional3Number } </h1>
            <h1> Props Objecte: { props.propsFunctional4Object.nom } </h1>
        </>
    )
}

export default FunctionalComponent;