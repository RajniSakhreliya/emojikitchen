import React, { useState } from "react";
import EmojiView from "./EmojiView";
import RandomComponent from "./RandomComponent";
import icon_random from "../../assets/icons/icon_random.svg";

const EmojiComponent = ({
  emoji,
  isSelected,
  emojiClicked,
  randomClicked,
  width = 70,
}) => {
  return (
    <div className="emojiComponent m-2">
      <EmojiView
        emoji={emoji}
        width={width}
        isSelected={isSelected}
        emojiClicked={emojiClicked}
      />

      {randomClicked && (
        <RandomComponent onClick={randomClicked}>
          <img src={icon_random} className="w-[20px] h-[20px]" loading="lazy" />
        </RandomComponent>
      )}
    </div>
  );
};

export default EmojiComponent;
