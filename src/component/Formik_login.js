import {Formik, useFormik} from "formik"

const FormikLogin = ()=>{

    const formik = useFormik({
        initialValues : {
            UserName : '',
            Password: ''
        }
    })
    return(
        <div>
             <h1 >Login</h1>
                <div>Enter your credentials to access your account</div>
                <br/>
                <form>
                    <input name="UserName" onChange={formik.handleChange} value={formik.values.UserName}   type="email" id="email" placeholder="USER ID" /><br/>
              
                    <input name="Password" onChange={formik.handleChange} value={formik.values.Password}   type="password" id="password" placeholder="PASSWORD" /><br/>
                  
                </form>
                <br/>
                <button type="button" >Sign In</button>
                <br/>
                <br/>
                <button type="button" >Sign Up</button>

                <h4>hi {formik.values.UserName}</h4>
        </div>
    )
}

export default FormikLogin;