import React from 'react'
import "../../Styles/cooking.css";
import icon_random from "../../assets/icons/icon_random.svg";

const RandomComponent = ({ width = 20, onRandomClick }) => {
    return (
        <div className='randomComponent hover:bg-[#F1F3F4] mt-1' onClick={onRandomClick}>
            <img src={icon_random} style={{ width: width, height: width }} loading="lazy" />
        </div>
    )
}

export default RandomComponent
