import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EmojiView from "../Components/EmojiComponents/EmojiView";
import { getEmojiCombinationsWithData } from "../Utils/Utils";

const Combinations = () => {
  const itemsPerPage = 54;
  const emojiList = useSelector((state) => state.emojiData);
  const emojiMixer = useSelector((state) => state.emojiMixer);

  const [selectedEmoji, setSelectedEmoji] = useState();
  const [combinations, setCombinations] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedEmoji) return;
    setLoading(true);

    const list = Object.values(
      getEmojiCombinationsWithData(emojiMixer, selectedEmoji)
    );
    setCombinations(list);
    setTotalPages(Math.ceil(list.length / itemsPerPage));

    setLoading(false);
    setCurrentPage(1); // Reset to the first page whenever emoji changes
  }, [selectedEmoji, emojiMixer]);

  useEffect(() => {
    const currentItemList = combinations.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    setCurrentItems(currentItemList);
  }, [currentPage, combinations]);

  useEffect(() => {
    if (emojiList.length > 0) {
      setSelectedEmoji(emojiList[1]); // Default to second emoji in the list
    }
  }, [emojiList]);

  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex flex-col mx-3 my-3 p-5 md:mx-5 md:my-5 bg-white rounded-sm md:p-8 overflow-auto max-w-screen-desktop self-center">
      <h1 className=" text-2xl md:text-4xl font-bold">
        Let Loose your Creative Grit with Emoji Combinations
      </h1>

      <p className="pt-2 pb-8 text-base">
        Why use plain simple language to communicate with your loved ones, when
        you can be more creative, playful, and fun through emoji combinations?
        Sometimes words are insufficient to express your true emotions. Or you
        might hesitate to convey your feelings. That’s where emoji combinations
        come in handy. Engaging with friends for a late-night group conversation
        gets more exciting with Emoji Kitchen.
      </p>

      <p className="pt-2 pb-8 text-base">
        You can customize and personalize your expressions giving you more
        freedom. Moreover, using the best emoji combinations makes you the
        coolest in your gang. Keeping up with the latest social media trends
        makes you feel connected and relevant.
      </p>

      <div className="h-[10rem] flex flex-col">
        <div className="emoji-container border rounded-[5px]">
          {emojiList.map((emoji, index) => (
            <EmojiView
              isSelected={selectedEmoji === emoji}
              key={index}
              emoji={emoji}
              width={40}
              radius={8}
              emojiClicked={() => setSelectedEmoji(emoji)}
            />
          ))}
        </div>
      </div>

      <div className="flex w-full justify-end items-center mt-4 mb-4">
        <span className="font-bold mr-1">{combinations.length}</span> emoji
        combos found
      </div>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="flex flex-wrap gap-4 justify-evenly w-full p-3 bg-[#F1F7FE]">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-full text-center 
              medium:w-[calc(50%-20px)]
              tablet:w-[calc(33.333%-20px)]
              laptop:w-[calc(16.666%-20px)]"
            >
              <div className="flex justify-center w-full bg-white p-8 rounded-md ">
                <img
                  src={item[0].gStaticUrl}
                  alt="Emoji Combination"
                  className="w-full h-full max-w-[100px] max-h-[100px]"
                />
              </div>

              <div className="flex flex-row w-full my-1 gap-1">
                <div className="flex justify-center w-[calc(50%)] bg-white py-[2px] rounded-md">
                  <div className="text-[30px]">{item[0].rightEmoji}</div>
                </div>

                <div className="flex justify-center w-[calc(50%)] bg-white py-[2px] rounded-md">
                  <div className="text-[30px]">{item[0].leftEmoji}</div>
                </div>
              </div>

              <div className="w-full rounded-md border-black bg-white border">
                asdasd
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center items-center mt-4">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className="btn-pagination"
        >
          Previous
        </button>
        <span className="mx-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="btn-pagination"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Combinations;
