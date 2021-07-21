import "./App.css";
import GridView from "./GridView";
import MemePage from "./MemePage";
import { useState } from "react";

function App() {
  const [meme, setMeme] = useState(null);

  const getQuery = (boxes) => {
    let obj = {
      template_id: meme.id,
      username: "teasty",
      password: "PPS$Asr52ttCfaF"};

    let query = [];
    for (let prop in obj) {
      query.push(`${prop}=${obj[prop]}`);
    }
    query = query.join("&");
    boxes.forEach((element, i)=> {
      query += `&boxes[${i}][text]=${element.text}`
    });
    return query;
  };

  const clickHandler = async (meme) => {
    setMeme(meme);
  };

  const captionImage = async (boxes) => {
    const customMeme = await fetch(
      `https://api.imgflip.com/caption_image?${getQuery(boxes)}`,
      { method: "post" }
    );
    const json = await customMeme.json();
    meme.url = json.data.url;
    setMeme({...meme});
  }

  const getMemes = async () => {
    const memesData = await fetch(`https://api.imgflip.com/get_memes`);
    const data = await memesData.json();
    return data.data.memes;
  };

  return (
    <div className="App">
      <h1>Meme Generator</h1>
      {meme === null ? (
        <GridView clickHandler={clickHandler} getMemes={getMemes} />
      ) : (
        <MemePage meme={meme} chooseTemplate={()=>{setMeme(null)}} captionImage={captionImage}/>
      )}
    </div>
  );
}

export default App;
