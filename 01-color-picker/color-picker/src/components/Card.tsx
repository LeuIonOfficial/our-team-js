import ColorPicker from "./ColorPicker";
import { FC, useState } from 'react';
import './Card.css'
import axios from "axios";



const Card: FC = () => {
  
  const [color, setColor] = useState('#ff0000')
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };


    const calculateHSL = (red_color: number, green_color: number, blue_color: number) => {
        red_color /= 255;
        green_color /= 255;
        blue_color /= 255;

        const max = Math.max(red_color, green_color, blue_color);
        const min = Math.min(red_color, green_color, blue_color);

        let nuanta = 0;
        let saturation = 0;
        let lightness = (max + min) / 2;

        if (max !== min) {
            const delta = max - min;
            saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

            if (max === red_color) {
                nuanta = (green_color - blue_color) / delta + (green_color < blue_color ? 6 : 0);
            } else if (max === green_color) {
                nuanta = (blue_color - red_color) / delta + 2;
            } else {
                nuanta = (red_color - green_color) / delta + 4;
            }
            nuanta /= 6;


            nuanta = Math.round(nuanta * 360);
            saturation = Math.round(saturation * 100);
            lightness = Math.round(lightness * 100);

            return `hsl(${nuanta}, ${saturation}%, ${lightness}%)`;
        }

    }
        const handleColorChange = (newColor: string) => {
         setColor(newColor)
    }

  // backend request
      
  axios.get('http://localhost:5000').then(response => {console.log(response.data)})

  // --------
  

   const red: number = parseInt(color.substring(1, 3), 16);
   const green: number = parseInt(color.substring(3, 5), 16);
   const blue: number = parseInt(color.substring(5, 7), 16);

  //const rgb: number[] = [red, green, blue];

        const backgroundStyle = {
            backgroundImage: `
      radial-gradient(at top left, ${calculateHSL(red, green, blue)}, transparent),
      radial-gradient(at top right, ${calculateHSL(green, red, blue)}, transparent),
      radial-gradient(at bottom left, ${calculateHSL(blue, red, green)}, transparent),
      radial-gradient(at bottom right, ${calculateHSL(red, green, blue)}, transparent)
    `
        };


    const cardStyle = {
        background: isChecked ? '#141414' : 'white',
        color: isChecked ? 'white' : "black"
};


    return (
        <div className="container" style={backgroundStyle}>
          <div className="angular-gradient"  style={cardStyle}>
              <div className={"heading-group"}>
                  <h2>Tetradic radial-background gradient</h2>

                  <button
                      className={"generate-theme"}
                      type={"submit"}
                      style={cardStyle}
                      checked={isChecked}
                  >
                      Generate Theme
                  </button>

                  <div>

                      <input
                          // className="react-switch-checkbox"
                          id={`react-switch-new`}
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                      />
                      <label
                          // className="react-switch-label"
                          htmlFor={`react-switch-new`}
                      >
                    <span className={`react-switch-button`}
                        // data-on="Yes"
                        // data-off="No"

                    />
                          {isChecked ? 'On' : 'Off'}
                      </label>
                  </div>
              </div>

            <ColorPicker onColorChange={handleColorChange}/>
            <div className='text__inside'>
                <span>background: </span>
                <ul>
                    <li>radial-gradient(at top left, {calculateHSL(red, green, blue)}, transparent)</li>
                    <li>radial-gradient(at top right, {calculateHSL(green, red, blue)}, transparent)</li>
                    <li>radial-gradient(at bottom left, {calculateHSL(blue, red, green)}, transparent)</li>
                    <li>radial-gradient(at bottom right, {calculateHSL(red, green, blue)}, transparent)</li>
                </ul>

            </div>
          </div>
          </div>
  )};
  
export default Card;


