import { SketchPicker } from 'react-color';
import { useState } from "react";

function ColorPicker(props: any) {
    const [sketchPickerColor, setSketchPickerColor] = useState({
        r: "241",
        g: "112",
        b: "19",
        a: "1",
    });

    const sendData = () => {
        props.sendData(sketchPickerColor)
    }

    return (
        <div>
            <div>
                {/* Sketch Picker from react-color and handling color on onChange event */}
                <SketchPicker
                    onChange={(color: any) => {
                        setSketchPickerColor(color.rgb);
                    }}
                    onChangeComplete={sendData}
                    color={sketchPickerColor}
                />
            </div>
        </div>
    );
}

export default ColorPicker;