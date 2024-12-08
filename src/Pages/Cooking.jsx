import React, { useEffect, useState } from "react";
import "../Styles/cooking.css";
import EmojiComponent from "../Components/EmojiComponents/EmojiComponent";
import ResultComponent from "../Components/EmojiComponents/ResultComponent";
import { useSelector } from "react-redux";
import { getRandomEmoji, getEmojiCombinations, checkEmojiEnableDisabled } from "../Utils/Utils";
import EmojiView from "../Components/EmojiComponents/EmojiView";
import Meta from "../Components/Meta";

const Cooking = () => {
  const emojiList = useSelector((state) => state.emoji.emojiData);
  const emojiMixer = useSelector((state) => state.emoji.emojiMixer);

  const [firstEmoji, setFirstEmoji] = useState("");
  const [secondEmoji, setSecondEmoji] = useState("");
  const [finalAnswer, setFinalAnswer] = useState("");
  const [isFirstEmojiSelected, setFirstEmojiSelected] = useState(true);

  useEffect(() => {
    if (emojiList?.length > 0) {
      setFirstEmoji(getRandomEmoji(emojiList));
      setSecondEmoji(getRandomEmoji(emojiList));
    }
  }, [emojiList]);

  useEffect(() => {
    if (firstEmoji && secondEmoji) {
      const emojiObj =
        emojiMixer[firstEmoji]?.combinations[secondEmoji]?.[0]?.gStaticUrl;
      setFinalAnswer(emojiObj || "");
    }
  }, [firstEmoji, secondEmoji, emojiMixer]);

  return (
    <div className="flex w-full items-center justify-center">
      <Meta />

      <div className="cookingContainer">
        <div className="emojiInnerContainer flex flex-row">
          <EmojiComponent
            emoji={firstEmoji}
            isSelected={isFirstEmojiSelected}
            emojiClicked={() => {
              setFirstEmojiSelected(true);
            }}
            randomClicked={() =>
              setFirstEmoji(
                getRandomEmoji(getEmojiCombinations(emojiMixer, secondEmoji))
              )
            }
          />
          <div className="text-3xl bold m-2">+</div>
          <EmojiComponent
            emoji={secondEmoji}
            isSelected={!isFirstEmojiSelected}
            emojiClicked={() => {
              setFirstEmojiSelected(false);
            }}
            randomClicked={() =>
              setSecondEmoji(
                getRandomEmoji(getEmojiCombinations(emojiMixer, firstEmoji))
              )
            }
          />
          <div className="text-3xl bold m-2">=</div>
          <ResultComponent finalEmoji={finalAnswer} />
        </div>

        <div className="emoji-container mt-5">
          {emojiList?.map((emoji, index) => (
            <EmojiView
              isDisabled={checkEmojiEnableDisabled(emojiMixer, isFirstEmojiSelected ? secondEmoji : firstEmoji, emoji,)}
              key={index}
              emoji={emoji}
              isSelected={
                isFirstEmojiSelected
                  ? firstEmoji === emoji
                  : secondEmoji === emoji
              }
              emojiClicked={() => {
                if (isFirstEmojiSelected) {
                  setFirstEmoji(emoji);
                } else {
                  setSecondEmoji(emoji);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cooking;
