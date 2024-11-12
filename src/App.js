import { BrowserRouter } from 'react-router-dom';
import Router from './Routes/Router';
import Header from './Components/Header/Header';
import "./Styles/cooking.css"
import "./Styles/emojiGrid.css"
import "./Styles/header.css"
import "./Styles/emojiList.css"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import emojiListData from "./assets/data/supportedEmoji.json"
import { SET_EMOJI_DATA, SET_EMOJI_MIXER } from './app/emojiReducer';
import { fetchWithTimeout } from './Utils/Utils';
import Container from './Components/container/Container';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SET_EMOJI_DATA(emojiListData.supportedEmoji));

    const loadData = async () => {
      try {
        var data = await fetchWithTimeout('./assets/eCompactData.json', {}, 5000); // 5 seconds timeout
        dispatch(SET_EMOJI_MIXER(data));
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
      }
    };

    loadData();
  }, [])

  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col content-between'>
        <Header />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
