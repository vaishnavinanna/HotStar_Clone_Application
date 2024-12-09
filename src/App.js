import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SearchContainer from './components/SearchContainer/SearchContainer';
import Container from './components/HomeContainer/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LoginContainer from './components/LoggedUser/LoginContainer';
import Subscription from './components/Subscription/Subscription';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Container />} />
            <Route path="/search" element={<SearchContainer />} />
            <Route path='/home' element={<Container />} />
            <Route path='/login' element={<LoginContainer />} />
            <Route path='/subscription' element={<Subscription/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
