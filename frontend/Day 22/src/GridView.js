import './GridView.css';
import {useState, useEffect} from 'react'

const GridView = ({clickHandler, getMemes}) => {
    const [memes, setMemes] = useState([]);

    const fetchMemes = async () => {
        setMemes(await getMemes());
    }

    useEffect(()=>{
        fetchMemes();
    },[]);

    return (
        <div className="GridView">
            {memes.map((meme) => <img key={meme.id} src={meme.url} alt={meme.name} onClick={()=>{clickHandler(meme)}}/>)}
        </div>
    );
}

export default GridView;