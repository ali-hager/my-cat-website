import { Button } from "@mui/material";
import './RandomPic.css'

function RandomPic({ imgUrl, refetchFunction }) {
  return (
    <>
    {/* 2. re-fetch the cat pic without refreshing the browser */}
      <Button onClick={refetchFunction} variant="outlined">New Cat</Button>
      <br></br> <br></br>
      {/* 1. fetch a random cat pic from the API and display it
      
      take the image url and turn it into a pic - to get it to display we need to use it in the App.jsx */}
      <img className="random-pic" src={imgUrl} />
    </>
  );
}

export default RandomPic
