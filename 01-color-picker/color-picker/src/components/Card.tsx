import ColorPicker from "./ColorPicker";
import { FC, useState } from 'react';
import './Card.css'


const Card: FC = () => {
  
  const [color, setColor] = useState('#ff0000')

  const handleColorChange = (newColor: string) => {
    setColor(newColor)
  }

  const backgroundStyle = {
    background: `radial-gradient(circle, ${color} 0%, #00d4ff 100%)`
  };


  return (
    <div className="container" style={backgroundStyle}>
      <div className="angular-gradient">
        <h2>Tetradic radial-background gradient</h2>
        <ColorPicker onColorChange={handleColorChange} />
        <p>Background: radial-gradient(at top left)</p>
      </div>
    </div>
  )
}

export default Card;