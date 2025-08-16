import { useState } from "react"



const ColorPicker = () =>{

const [color, setColor] = useState()

const handleColorChange = (e) =>{
    setColor(e.target.value)
}

return(
    <div className="color-area">
        <input type="color" 
        name="color-picker"
         value={color}  
        onChange={handleColorChange}/>
   <p>Color Code:<span style={{ color:color}}>{color}</span></p>
    </div>

)
}
export default ColorPicker