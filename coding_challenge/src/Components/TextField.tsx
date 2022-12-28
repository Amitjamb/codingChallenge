import react, { useState } from "react";

const TextField = () => {
    //The useState Hook
    const [textValue, textValueSet] = useState('')

    //onChange Handler
    const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        textValueSet(event.target.value)
    }

    return (
        //input field
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="text" name="textField" onChange={handleForm} value={textValue} className="form-control" id="exampleInputEmail1" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
    )
}

export default TextField;