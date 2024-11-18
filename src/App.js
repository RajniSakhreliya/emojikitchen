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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer/Footer';
import authService from "./appWriter/authService"
import { login, logout } from "./app/authSlice"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(SET_EMOJI_DATA(emojiListData.supportedEmoji));

    const loadData = async () => {
      try {
        var data = await fetchWithTimeout('./assets/eCompactData.json', {}, 5000);
        dispatch(SET_EMOJI_MIXER(data));
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
  }, [dispatch])

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          console.log("ASDASD");
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      });
  }, [])

  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col content-between'>
        <Header />
        <div className='flex-1'>
          <Router />
        </div>
        <Footer />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
