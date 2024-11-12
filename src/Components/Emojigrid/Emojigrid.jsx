import React from 'react'
import CommonButton from '../Buttons/CommonButton';
import "../../Styles/emojiGrid.css";
import bg_emoji from "../../assets/images/bg_emojigrid.webp";
import { useNavigate } from 'react-router-dom';

const Emojigrid = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-row justify-center mt-5'>
            <div className='emojiGridContainer'>
                <div className='emojiGrid'>
                    <img
                        loading="lazy"
                        src={bg_emoji}
                        alt='Emoji Kitchen'
                        className='emojiGridImage' />
                </div>

                <CommonButton btnText={"Get Cooking"} onBtnClick={() => {
                    navigate('/cooking'); // replace '/next-page' with your desired route
                }} />

            </div>
        </div>
    )
}

export default Emojigrid
