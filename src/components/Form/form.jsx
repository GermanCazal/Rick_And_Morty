import { useState } from "react";
import validate from "./Validate";
import style from "./form.module.css"
const Form = () =>{
    
    
        
   
const [userData, setUserData] = useState ({
    email: "", 
    password:""
});
    
    const handleOnChange = (event) =>{
        const{name, value}= event.target;
        setUserData({...userData,[name]:value});
    } 

    const [errors, setErrors] = useState({
        email: "",
        password:""
    })
    const handleSubmit =(event) => {
        event.preventDefault();
        const validationErrors = validate(userData.email, userData.password);
        setErrors(validationErrors)
    }
    
    
    
    
    return (
        <form onSubmit={handleSubmit} className={style.Form}>
            
            <label className={style.label} htmlFor="email: ">Email</label>
            <input className={style.input}type="email" name="email" value={userData.email} onChange={handleOnChange}/>
            {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
<br />

            <label className={style.label} htmlFor="password">Password</label>
            <input className={style.input} type="password" name="password" value={userData.password} onChange={handleOnChange} />
            {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
            
            <button>Submit</button>
        </form>
        
    )
   

}

export default Form;