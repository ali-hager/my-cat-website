import "./App.css";
import RandomPic from "./components/RandomPic";
import { useEffect, useState } from "react";
import SelectBreed from "./components/SelectBreed"
import Gallery from "./components/Gallery";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";

function App() {
  // create a piece of state to track the cat images then we can change the randomPic imgUrl to be {catImgUrl - make sure to import state at the top}
  const [catImgUrl, setCatImgUrl] = useState("");
  // 3. get a random cat pic by breed
  const [selectedBreed, setSelectedBreed] = useState("random")
  // 4. add a "favorite cats" list, [] because we want an array
  const [favorites, setFavorites] = useState([])
  const [visibleTab, setVisibleTab] = useState("random")

  // create useEffect to fetch the image from the API and return it into state[], define async function line under this
  // 1. fetch a random cat pic from the API and display it
  useEffect(() => {
    async function getRandomImage() {
      const response = await fetch(fetchUrl);
      const result = await response.json();
      // setCatImgUrl()
      // the result is returning an array with one thing in it, and its index 0 - change to result[0].url - saying "give me the first index and the url of that index - change from console.log to setCatImgUrl to get the random pic with each refresh"
      setCatImgUrl(result[0].url);
    }
    getRandomImage();
  }, []);

  // 2. re-fetch the cat pic without refreshing the browser
  const updateImage = async () => {
    const response = await fetch(fetchUrl);
    const result = await response.json();
    setCatImgUrl(result[0].url);
  };

  console.log(selectedBreed)

  // 4. add a "favorite cats" list
  const addToFavorites = (imgUrl) => {
    const newArray = [...favorites, imgUrl]
    setFavorites(newArray)
  }
console.log(favorites)

  // 3. get a random cat pic by breed
  const API_URL = `https://api.thecatapi.com/v1/images/search`
  const queryString = `?breed_ids=${selectedBreed}`

  const fetchUrl = selectedBreed === 'random'
  ? API_URL
  : API_URL + queryString
  console.log(fetchUrl)

  return (
    <>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => setVisibleTab('random')}>Random</Button>
        <Button variant="contained" onClick={()=> setVisibleTab('favorites')}>Favorites</Button>
      </Stack>
      {/* 3. get a random cat pic by breed */}
      {/* make an input that selects a specific cat break, record that cat breed in the App component state, if we are searching for a specific breed, apply that criteria to the fetch request */}
      {/* then fetch the breeds list and update the input to use the list of available breeds */}
      <SelectBreed selectedBreed={selectedBreed}
      setSelectedBreed={setSelectedBreed}/>
      <br></br>

      {/* randomPic component should accept an image URL prop and display that image */}
      {/* give it an imageUrl prop */}
      {visibleTab === 'random' && <RandomPic imgUrl={catImgUrl} refetchFunction={updateImage} addToFavorites={addToFavorites}/>}
      <br></br>
      {visibleTab === 'favorites' && <Gallery favoritesArray={favorites}/>}
    </>
  );
}

export default App;
