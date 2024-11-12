import React, { useState } from 'react'
import EmojiView from './EmojiView'
import RandomComponent from './RandomComponent';

const EmojiComponent = ({ emoji, isSelected, emojiClicked,randomClicked }) => {

    return (
        <div className='emojiComponent m-2'>
            <EmojiView
                emoji={emoji}
                width={70}
                isSelected={isSelected}
                emojiClicked={emojiClicked} />

            <RandomComponent onRandomClick={randomClicked} />
        </div>
    )
}

export default EmojiComponent

