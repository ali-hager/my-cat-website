function RandomPic({imgUrl}) {
  return(
    <>
    {/* take the image url and turn it into a pic - to get it to display we need to use it in the App.jsx */}
    <img src={imgUrl}/>
    </>
  )
}

export default RandomPic