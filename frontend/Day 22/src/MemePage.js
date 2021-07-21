import "./MemePage.css";
import { useEffect, useState } from "react";

const MemePage = (props) => {
  const meme = props.meme;
  const [inputs, setInputs] = useState([]);
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    for (let i = 0; i < meme.box_count; i++) {
      inputs.push(
        <input
          placeholder={`Meme Caption ${i + 1}`}
          onChange={(event) => {
            boxes[i] = { text: event.target.value };
            setBoxes([...boxes]);
          }}
        />
      );
    }
    setInputs([...inputs]);
  }, []);

  return (
    <div className="MemePage">
      <img style={{width:"50%"}} src={meme.url} alt={meme.name !== null ? meme.name : ""} />
      <form>
        <div className="inputs">{inputs}</div>
        <div className="actions">
          <button
            onClick={(event) => {
              event.preventDefault();
              props.captionImage(boxes);
            }}
          >
            Add Caption
          </button>
          <button
            onClick={(event) => {
              event.preventDefault();
              props.chooseTemplate();
            }}
          >
            Choose Template
          </button>
        </div>
      </form>
    </div>
  );
};

export default MemePage;
