import React from 'react';
import AirJordan1 from "./models/sneakers/AirJordan1";
import AdidasBadBunny from "./models/sneakers/AdidasBadBunny";

export default function ListItems(props) {
    return (
        <group>
            <AirJordan1 scale={[5, 5, 5]} position={[0,0,0]}/>
            <AdidasBadBunny scale={[20, 20, 20]} rotation={[0, 60, 0]} position={[0, -5, 20]}/>
        </group>
    )
}
