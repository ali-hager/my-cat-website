import './App.css'
import RandomPic from './components/RandomPic'
import { useEffect, useState } from 'react'

function App() {
// create a piece of state to track the cat images then we can change the randomPic imgUrl to be {catImgUrl - make sure to import state at the top}
  const [catImgUrl, setCatImgUrl] = useState("")

  // create useEffect to fetch the image from the API and return it into state[], define async function line under this
  useEffect(() => {
    async function getRandomImage(){
      const response = await fetch("https://api.thecatapi.com/v1/images/search")
      const result = await response.json()
      // setCatImgUrl()
      // the result is returning an array with one thing in it, and its index 0 - change to result[0].url - saying "give me the first index and the url of that index - change from console.log to setCatImgUrl to get the random pic with each refresh"
      setCatImgUrl(result[0].url)
    }
    getRandomImage()
  }, [])

  return (
    <>
    {/* randomPic component should accept an image URL prop and display that image */}
    {/* give it an imageUrl prop */}
    <RandomPic imgUrl={catImgUrl} />
    </>
  )
}

export default App
