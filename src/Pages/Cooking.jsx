import React, { useEffect, useState } from 'react'
import "../Styles/cooking.css"
import EmojiComponent from '../Components/EmojiComponents/EmojiComponent'
import ResultComponent from '../Components/EmojiComponents/ResultComponent'
import { useSelector } from 'react-redux';
import EmojiView from '../Components/EmojiComponents/EmojiView';
import { checkEmojiEnableDisabled, getEmojiCombinations, getRandomEmoji } from '../Utils/Utils';

const Cooking = () => {
  const emojiList = useSelector(state => state.emojiData);
  const emojiMixer = useSelector(state => state.emojiMixer);

  const [isFirstEmojiSelected, setFirstEmojiSelected] = useState(false);
  const [isSecondEmojiSelected, setSecondEmojiSelected] = useState(true);
  const [firstEmoji, setFirstEmoji] = useState("");
  const [secondEmoji, setSecondEmoji] = useState("");

  const [finalAnswer, setFinalAnswer] = useState("");

  useEffect(() => {
    if (emojiList && emojiList.length > 0) {
      setFirstEmoji(getRandomEmoji(emojiList));
      setSecondEmoji(getRandomEmoji(emojiList));
    }
  }, [emojiList])

  useEffect(() => {
    if (firstEmoji && secondEmoji) {
      var emojiObj = emojiMixer[firstEmoji]?.combinations[secondEmoji]?.[0]?.gStaticUrl;
      setFinalAnswer(emojiObj);
    }
  }, [firstEmoji, secondEmoji]);

  return (
    <div className='flex w-full items-center justify-center'>
      <div className='cookingContainer'>
        <div className='emojiInnerContainer'>
          <div className='flex flex-row'>
            <EmojiComponent
              emoji={firstEmoji}
              isSelected={isFirstEmojiSelected}
              emojiClicked={() => {
                setFirstEmojiSelected(true);
                setSecondEmojiSelected(false);
              }}
              randomClicked={() => {
                setFirstEmoji(getRandomEmoji(getEmojiCombinations(emojiMixer, secondEmoji)));
              }} />

            <div className="text-3xl bold m-2">+</div>

            <EmojiComponent
              emoji={secondEmoji}
              isSelected={isSecondEmojiSelected}
              emojiClicked={() => {
                setFirstEmojiSelected(false);
                setSecondEmojiSelected(true);
              }}
              randomClicked={() => {
                setSecondEmoji(getRandomEmoji(getEmojiCombinations(emojiMixer, firstEmoji)));
              }} />

            <div className="text-3xl bold m-2"> = </div>

            <ResultComponent finalEmoji={finalAnswer} />
          </div>
        </div>

        <div className="emoji-container mt-5">
          {emojiList.map((emoji, index) => {

            return (
              <EmojiView
                key={index}
                isDisabled={checkEmojiEnableDisabled(emojiMixer, !isFirstEmojiSelected ? firstEmoji : secondEmoji, emoji)}
                emoji={emoji}
                width={40}
                radius={8}
                emojiClicked={() => {
                  if (isFirstEmojiSelected) {
                    setFirstEmoji(emoji);
                  } else {
                    setSecondEmoji(emoji);
                  }
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Cooking
