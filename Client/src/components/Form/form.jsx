import { useState } from "react";
import validation from "./Validate";
import styles from "./form.module.css"

const Form = ({ login }) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <body>
            
        <div className={styles.login}>

        <form  onSubmit={handleSubmit}>

            <div className={styles.user}>
            <label  htmlFor="email" >Email: </label>
            <input  type="email" name='email' value={userData.email} onChange={handleChange}/>
            {errors.email && <p style={{ color: "red"}}>{errors.email}</p>}
            </div>


           <div className={styles.user}>
            <label htmlFor="password">Password: </label>
            <input  type="password" name="password" value={userData.password} onChange={handleChange}/>
            {errors.password && <p style={{ color: "red"}}>{errors.password}</p>}
           </div>
            <button>Submit</button>
        </form>
        </div>
        </body>
    )
}

export default Form;