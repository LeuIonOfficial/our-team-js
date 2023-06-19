import ColorPicker from "./ColorPicker";
import { FC, useState } from 'react';
import './Card.css'


const Card: FC = () => {
  
  const [color, setColor] = useState('#ff0000')
  

  const handleColorChange = (newColor: string) => {
    setColor(newColor)
  }

  const red: number = parseInt(color.substring(1, 3), 16);
  const green: number = parseInt(color.substring(3, 5), 16);
  const blue: number = parseInt(color.substring(5, 7), 16);

  const rgb: number[] = [red, green, blue];
  console.log(rgb);
  

  const backgroundStyle = {
    backgroundImage: `radial-gradient(at top left, hsl(${rgb[0]}, 50%, 50%), transparent),
                      radial-gradient(at top right, hsl(${rgb[1]}, 50%, 50%), transparent),
                      radial-gradient(at bottom left, hsl(${rgb[2]}, 50%, 50%), transparent),
                      radial-gradient(at bottom right, hsl(${rgb[0]}, 50%, 50%), transparent)`
  };
  


  return (
    <div className="container" style={backgroundStyle}>
      <div className="angular-gradient">
        <h2>Tetradic radial-background gradient</h2>
        <ColorPicker onColorChange={handleColorChange} />
        <div className='text__inside'>
            <span>background: </span>
            <ul>
              <li>radial-gradient(at top left, hsl({rgb[0]}, 50%, 35%), transparent)</li>
              <li>radial-gradient(at top right, hsl({rgb[1]}, 50%, 35%), transparent)</li>
              <li>radial-gradient(at bottom left, hsl({rgb[2]}, 50%, 35%), transparent)</li>
              <li>radial-gradient(at bottom right, hsl({rgb[0]}, 50%, 35%), transparent)</li>
            </ul>
            
        </div>
      </div>
    </div>
  )
}

export default Card;