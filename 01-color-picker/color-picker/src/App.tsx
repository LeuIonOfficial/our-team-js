import './App.css'
import ColorPicker from "./components/ColorPicker.tsx";
import {useState} from "react";

function App() {

  const [data, setData] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1"
  })
  const [state, setState] = useState(false);



  const sendData = (data: {r: string, g: string, b: string, a: string}) => {
    setData(data)
  }


  return (
      <div
          className='background__style'
          style={{background: `angular-gradient(to top left)`}}
      >
        <div className='card__style'>
              <h1>Tetradic radial-background generator</h1>
              <div>
                <div
                    onClick={() => setState(!state)}
                    style={{
                      width: 30,
                      height: 30,
                      backgroundColor: `rgba(${data.r}, ${data.g}, ${data.b}, ${data.a})`
                    }}
                ></div>
                {state && <ColorPicker sendData={sendData} className='color__picker' />}
              </div>
                <span>background: radial-gradient({`r: ${data.r}, g: ${data.g}, b: ${data.b}, a: ${data.a}`})</span>


        </div>
      </div>
  )
}

export default App