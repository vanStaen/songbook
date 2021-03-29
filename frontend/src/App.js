import { useEffect, useState } from "react";
import { observer } from "mobx-react";

import AddForm from "./component/AddForm/AddForm";
import Login from "./component/Login/Login";
import Book from "./component/Book/Book";
import Menu from "./component/Menu/Menu";
import Search from "./component/Search/Search";
import Footer from "./component/Footer/Footer";
import { authStore } from "./stores/authStore";

import "./App.css";


const App = observer(() => {
  const [filterBass, setFilterBass] = useState(false);
  const [filterPiano, setFilterPiano] = useState(false);
  const [filterGuitar, setFilterGuitar] = useState(false);
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);
  const [onlyFlagKnown, setOnlyFlagKnown] = useState(0); // 0: all, 1: only unknown, 2: only known
  const [showAddForm, setShowAddForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchValue, setSearchValue] = useState(null);
  const [newSongAdded, setNewSongAdded] = useState(false);
  const [randomPageId, setRandomPageId] = useState(null);

  useEffect(() => {
    // On mount, update token
    authStore.refreshToken &&
      authStore.login(authStore.getNewToken(), authStore.refreshToken);
  }, []);

  return (
    <div className="App">
      <Search
        showSearchInput={showSearchInput}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <header className="App-header">
        <AddForm
          showAddForm={showAddForm}
          setShowAddForm={setShowAddForm}
          setNewSongAdded={setNewSongAdded}
          token={authStore.token}
        />
        <Login
          showLoginForm={showLoginForm}
          setShowLoginForm={setShowLoginForm}
          token={authStore.token}
          login={authStore.login}
          logout={authStore.logout}
        />
        <Menu
          filterBass={filterBass}
          setFilterBass={setFilterBass}
          filterPiano={filterPiano}
          setFilterPiano={setFilterPiano}
          filterGuitar={filterGuitar}
          setFilterGuitar={setFilterGuitar}
          onlyBookmarked={onlyBookmarked}
          setOnlyBookmarked={setOnlyBookmarked}
          onlyFlagKnown={onlyFlagKnown}
          setOnlyFlagKnown={setOnlyFlagKnown}
          showAddForm={showAddForm}
          setShowAddForm={setShowAddForm}
          showLoginForm={showLoginForm}
          setShowLoginForm={setShowLoginForm}
          token={authStore.token}
          logout={authStore.logout}
          showSearchInput={showSearchInput}
          setShowSearchInput={setShowSearchInput}
          setRandomPageId={setRandomPageId}
        />
        <Book
          filterBass={filterBass}
          filterPiano={filterPiano}
          filterGuitar={filterGuitar}
          onlyFlagKnown={onlyFlagKnown}
          onlyBookmarked={onlyBookmarked}
          searchValue={searchValue}
          newSongAdded={newSongAdded}
          setNewSongAdded={setNewSongAdded}
          randomPageId={randomPageId}
          setRandomPageId={setRandomPageId}
          token={authStore.token}
          logout={authStore.logout}
        />
      </header>
      <Footer />
    </div>
  );
});

export default App;
