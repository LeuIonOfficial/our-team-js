import { FC, ChangeEvent } from 'react'

interface ColorPickerProps {
    onColorChange: (newColor: string) => void
}

const ColorPicker: FC<ColorPickerProps> = ({ onColorChange }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onColorChange(event.target.value);
        console.log(event)
        
    };

    return (
        <form>
            <label htmlFor="favcolor">Pick a color: </label>
            <input type="color" name="favcolor" onChange={handleChange} />
        </form>
)

}

export default ColorPicker;