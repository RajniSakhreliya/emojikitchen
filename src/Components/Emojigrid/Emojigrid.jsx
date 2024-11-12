import React from "react";
import "../../Styles/emojiGrid.css";
import bg_emoji from "../../assets/images/bg_emojigrid.webp";
import { useNavigate } from "react-router-dom";
import CommonButton from "../Buttons/CommonButton";

const Emojigrid = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-center mt-5">
      <div className="emojiGridContainer">
        <div className="emojiGrid">
          <img
            loading="lazy"
            src={bg_emoji}
            alt="Background with Emoji Grid"
            className="emojiGridImage"
            onError={(e) => (e.target.src = "fallback_image_url")}
          />
        </div>

        <CommonButton
          className="py-2 text-center justify-center"
          onClick={() => {
            navigate("/cooking");
          }}
        >
          Get Cooking
        </CommonButton>
      </div>
    </div>
  );
};

export default Emojigrid;
