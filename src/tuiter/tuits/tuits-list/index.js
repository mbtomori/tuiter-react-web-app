/* eslint-disable */

import React from "react";
import { useSelector } from "react-redux";
import TuitItem from "./tuit-item";
import TuitStats from "./tuit-stats";
import "./index.css"

const TuitsList = () => {
    const tuitsArray = useSelector(
        (state) => state.tuitItems)
    return (
        <ul className="list-group">
            {
                tuitsArray.map(tuit =>
                    <li className="list-group-item">
                        <TuitItem
                        key={tuit._id}
                        tuit={tuit}/>
                    </li>
                )
            }

        </ul>
    );
};
export default TuitsList;