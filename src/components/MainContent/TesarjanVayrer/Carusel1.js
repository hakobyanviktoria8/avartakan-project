import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

export default function Carusel1(props){
    return(
        <UncontrolledCarousel items={props.items} />
    )
}

