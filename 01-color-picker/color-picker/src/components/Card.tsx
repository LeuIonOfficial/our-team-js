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

  const handleColorChange = (newColor: string) => {
      setColor(newColor)
    }
    
  const currentDate: Date = new Date()
  const localTime: string = currentDate.toLocaleTimeString();

  const data: {localTime: string} = {
    localTime: localTime,
  };

  const jsonData: string = JSON.stringify(data)
  console.log(jsonData);
  
  axios.post('/api', jsonData).then(response => {console.log(response)})
  

   const red: number = parseInt(color.substring(1, 3), 16);
   const green: number = parseInt(color.substring(3, 5), 16);
   const blue: number = parseInt(color.substring(5, 7), 16);

  const rgb: number[] = [red, green, blue];
 
   const backgroundStyle = {
      backgroundImage: `radial-gradient(at top left, hsl(${rgb[0]}, 50%, 50%), transparent),
                      radial-gradient(at top right, hsl(${rgb[1]}, 50%, 50%), transparent),
                      radial-gradient(at bottom left, hsl(${rgb[2]}, 50%, 50%), transparent),
                      radial-gradient(at bottom right, hsl(${rgb[0]}, 50%, 50%), transparent)`

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
                <li>radial-gradient(at top left, hsl({rgb[0]}, 50%, 35%), transparent)</li>
                <li>radial-gradient(at top right, hsl({rgb[1]}, 50%, 35%), transparent)</li>
                <li>radial-gradient(at bottom left, hsl({rgb[2]}, 50%, 35%), transparent)</li>
                <li>radial-gradient(at bottom right, hsl({rgb[0]}, 50%, 35%), transparent)</li>
              </ul>

            </div>
          </div>
          </div>
  )};
  
export default Card;


