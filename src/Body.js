import { v4 as uuidv4 } from 'uuid';

const Body = (props) => {
    
      
    return ( 
        <div className='gif-container'>
            <ul className = 'gifs'>
            {props.gifs.map((gif)=>{
                return(
                    <li key={uuidv4()} className='gif'>
                    <img src={gif.images.fixed_height.url} alt="loading..." />
                    </li>
                )}
            )}
            </ul>
        </div>
     );
}
 
export default Body;