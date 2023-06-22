import ColorPicker from "./ColorPicker";
import { FC, useState, useEffect } from 'react';
import './Card.css'
import axios from "axios";

const Card: FC = () => {
  
  const [color, setColor] = useState('#ff0000')
  const [isChecked, setIsChecked] = useState(false)
  const [theme, generateTheme] = useState(10)
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

    useEffect(() => {
        axios.get('http://localhost:4000').then(response => {
            console.log(response.data);
            generateTheme(response.data)
        });
    }, []);

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


    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleGenerateTheme = () => {
        theme > 5 ? setIsChecked(true) : setIsChecked(false)
    }

    return (
        <div className="container" style={backgroundStyle}>
          <div className={`angular-gradient ${isChecked ? 'dark' : 'light'}`}>
              <div className={"heading-group"}>
                  <h2>Tetradic radial-background gradient</h2>
                  <button
                      className={`generate-theme ${isChecked ? 'dark' : 'light'}`}
                      onClick={handleGenerateTheme}
                  >
                      Generate Theme
                  </button>

                  <div className="check-box">
                      <label className={"switch"}>
                          <input type="checkbox"
                                 checked={isChecked}
                                 className={"dark"}
                          onChange={handleCheckboxChange}
                          />

                          <span className={"slider"}></span>
                      </label>
                      <span>{isChecked ? 'On' : 'Off'}</span>
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


