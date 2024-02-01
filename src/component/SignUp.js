
import {useState} from 'react'; 

const SignUp = () => {
    const [user_details,set_user_details] = useState({user_id:"",password:"",confirmPassword:""})
    const [users] = useState([
        {user_id:"john"},
        {user_id:"david"},
        {user_id:"john1"},
        {user_id:"david1"}
    ])

    const [userMsg,set_userMsg] = useState('');
    const [passwordMsg,set_passwordMsg] = useState('')
    const [confirm_passMsg,set_confirm_passMsg] = useState('')

    function hide_userMsg(e){
        if(e.target.value == ""){
            set_userMsg("User Id required")
        }else{
            set_userMsg("")
        }
        console.log(e.target.value)

    }


    function hide_passwordMsg(e){
        set_passwordMsg("")
        console.log(e.target.value)
    }

    function handle_user_change(e){
        set_user_details({
            user_id : e.target.value,
            password : user_details.password,
            confirmPassword : user_details.confirmPassword
        })
    }

    function handle_password_change(e){
        set_user_details({
            user_id : user_details.user_id,
            password : e.target.value,
            confirmPassword : user_details.confirmPassword
        })
    }

    function handle_confirmPass_change(e){
        set_user_details({
            user_id : user_details.user_id,
            password : user_details.password,
            confirmPassword : e.target.value
        })
    }

    function verifyUserid(e){
        for(var user of users){
            if(user.user_id == e.target.value){
                set_userMsg("User ID Taken - Try another")
                console.log("User ID Taken - Try another")
                break;
            }else{
                set_userMsg("User ID Available")
                console.log("User Availble")
            }
        }
    }

    function verifyPassword(e){
        if(e.target.value.match(/(?=.*[A-Z])\w{4,10}/)){
            set_passwordMsg("Strong Password")
        }else{
            if(e.target.value<4){
                set_passwordMsg("Poor Password")
            }else{
                set_passwordMsg("Weak Password")
            }
        }
    }

    
    function verifyConfirmPass(e){
        // console.log(e.target.value,"+++")
        // console.log(user_details.password,"+++")
        // console.log(user_details.confirmPassword,"+++")

        if(user_details.confirmPassword != user_details.password){
            set_confirm_passMsg("Password does not match")
        }else{
            set_confirm_passMsg(" ")
        }
        console.log(user_details)
        
    }


    function sign_in(){
        alert(JSON.stringify(user_details))
        console.log(user_details)
    }
  
    return(
        <div className = "SignUp_page">
            <div className="main_content">
                <h1 >SignUp</h1>
                <div>Create New Account</div>
                <br/>
                <form>
                    <input type="email" id="email" placeholder="Mail ID" onBlur={hide_userMsg} onChange={handle_user_change} onKeyUp={verifyUserid}/><br/>
                    <dd>{userMsg}</dd>
                    <input type="password" id="password" placeholder="Password" onBlur={hide_passwordMsg} onChange={handle_password_change} onKeyUp={verifyPassword}/><br/>
                    <dd>{passwordMsg}</dd>
                    <input type="password" id="confirm_password" placeholder="Confirm Password" onChange={handle_confirmPass_change} /><br/>
               
                </form>
                <br/>
                <br/>
                <button type="button" onClick={verifyConfirmPass}  >Sign Up</button>
                <dd>{confirm_passMsg}</dd>
            </div>
            
        </div>
    )
}

export default SignUp;