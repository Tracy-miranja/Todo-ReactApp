import { useState } from "react"
const Form = () => {
    const [state, setState] = useState({
        fname: "",
        lname: "",
        message:"",
        isChecked:false,
      });

    const handleChange = (e) =>{
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setState({
            ...state,
            [e.target.name]: e.target.value
          });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
      };
    return(
        <>
        <h1>Hello my first frm</h1>
        <form onClick={handleSubmit}>
            <label>
            First Name: {""}
            <input type= 'text' value={state.fname} name="fname" onChange={handleChange}/>
            </label>
            <label>
                Second Name : {""}
                <input type="text" value={state.lname} name="lname" onChange = {handleChange}/>
            </label>
            <label>
                <textarea
                name="message"
                value= {state.message}
                onChange = {handleChange}
                 />
            </label>
            <label >
                <input type="checkbox" name="isChecked" checked={state.isChecked} onChange={handleChange} />
            </label>
            <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={state.gender === "male"}
          onChange={handleChange}
        />{" "}
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={state.gender === "female"}
          onChange={handleChange}
        />{" "}
        Female
      </label>
      <button>Submit</button> 
        </form>
        Name: {state.fname} {state.lname}
        <p>Message: {state.message}</p>
        <h5>Is it checked? : {state.isChecked ? "Yes" : "No"}</h5>
        </>
    )
}
export default Form;