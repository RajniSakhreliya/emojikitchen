import React, { useRef, useEffect, useState } from "react";
import "../../Styles/cooking.css";
import { getEmojiFromCode } from "../../Utils/Utils";

const EmojiView = ({
  emoji,
  gStaticUrl,
  width = 50,
  radius = 15,
  isSelected,
  emojiClicked,
  padding = 5,
  isDisabled = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const emojiRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(emojiRef.current); // Stop observing once loaded
        }
      },
      { threshold: 0.1 }
    );

    if (emojiRef.current) observer.observe(emojiRef.current);

    return () => observer.disconnect(); // Clean up on unmount
  }, []);

  const styles = {
    view: {
      width: width,
      height: width,
      borderRadius: radius,
      padding: padding,
    },
  };

  const handleImageError = (e) => {
    console.log(e.target.src);
  };

  return (
    <div
      ref={emojiRef}
      className={`emojiView transition duration-100  ${isDisabled ? "cursor-default" : "cursor-pointer"
        } ${isSelected ? "bg-[#E8F0FE]" : "hover:bg-[#F1F3F4]"}`}
      style={styles.view}
      onClick={() => {
        if (!isDisabled) emojiClicked();
      }}
    >
      {isVisible ? (
        <img
          loading="lazy"
          className={`${isDisabled
            ? "filter grayscale opacity-20"
            : "filter-none opacity-100"
            }`}
          src={gStaticUrl ? gStaticUrl : getEmojiFromCode(emoji)}
          onError={handleImageError}
          alt="Emoji"
        />
      ) : (
        <div className="loading-circle"></div>
      )}
    </div>
  );
};

export default EmojiView;
