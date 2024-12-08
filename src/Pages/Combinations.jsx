import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EmojiView from "../Components/EmojiComponents/EmojiView";
import { copyImageToClipboard, getEmojiCombinationsWithData, getEmojiFromCode } from "../Utils/Utils";
import iconCopy from "../assets/icons/ic_copy.svg";
import Meta from "../Components/Meta";

const Combinations = () => {
  const itemsPerPage = 54;
  const emojiList = useSelector((state) => state.emoji.emojiData);
  const emojiMixer = useSelector((state) => state.emoji.emojiMixer);

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
    console.log(list);

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
    <div className="flex flex-col mx-3 my-3 p-5 bg-white rounded-sm overflow-auto max-w-screen-desktop self-center">
      <Meta />

      <h1 className="text-2xl md:text-4xl font-bold">
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
          {emojiList?.map((emoji, index) => (
            <EmojiView
              isSelected={selectedEmoji === emoji}
              key={index}
              emoji={emoji}
              width={40}
              radius={8}
              emojiClicked={() => {
                console.log(emoji);
                setSelectedEmoji(emoji);
              }}
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

              <div className="emojiFont flex flex-row w-full my-1 gap-1">
                <div className="flex justify-center w-[calc(50%)] bg-white py-[2px] rounded-md">
                  <span className="text-[12px]">
                    <img src={getEmojiFromCode(item[0].leftEmojiCodepoint)} alt="Emoji" width={30} />
                  </span>
                </div>

                <div className="emojiFont flex justify-center w-[calc(50%)] bg-white py-[2px] rounded-md">
                  <span className="text-[12px]">
                    <img src={getEmojiFromCode(item[0].rightEmojiCodepoint)} alt="Emoji" width={30} />
                  </span>
                </div>
              </div>

              <div className="flex flex-row w-full rounded-md bg-white hover:bg-blue-100
              justify-center items-center text-black 
              border-gray-100 hover:border-blue-200 cursor-pointer border-2 py-2"
                onClick={() => {
                  copyImageToClipboard(item[0].gStaticUrl);
                }}>
                Copy
                <span className="ml-2">
                  <img src={iconCopy} width={20} alt="copy emoji" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center items-center mt-4">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className="btn-pagination text-blue-800 font-bold px-4 py-1 border-[1px] rounded-md border-gray-400"
        >
          Previous
        </button>

        <span className="mx-5">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="btn-pagination text-blue-800 font-bold px-4 py-1 border-[1px] rounded-md border-gray-400"
        >
          Next
        </button>
      </div>

      <p className="pt-2 pb-8 text-base mt-5">
        Google emoji kitchen also helps you save time and effort when you want to connect with your friends and family. Especially when connecting on platforms with limited characters such as putting up status or using Twitter, the best emoji combinations can help you say alot with just a few faces. It is also helpful for the reader to look at the emoji and understand the message rather than reading the whole text.
      </p>

      <p className="pt-2 pb-8 text-base mt-2">
        So what are you waiting for? Dig into the colorful and visually appealing world of Google emojis and take your social game to the next level!
      </p>
    </div>
  );
};

export default Combinations;
