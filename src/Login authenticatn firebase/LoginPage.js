import React,{useState} from 'react'
import { useErrorHandler } from 'react-error-boundary';
import { auth } from './firebase';
import formstyle from './style.css'
const LoginPage = () => {
    const [state, setstate] = useState({
        email:'',
        password:''
    })
    const errHandle = useErrorHandler()
    const {email,password} = state;
    const handleInput=(e)=>{
            let newdata={...state}
            newdata[e.target.name] = e.target.value
            setstate(newdata)
    }
    const handleSignUp=(e)=>{
        e.preventDefault()
            auth.createUserWithEmailAndPassword(email,password).then(user=>{
                console.log(user)
            }).catch(err=>console.log(err))            
        
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password).then(email,password)
        .then(user=>console.log(user)).catch(err=>{
            console.log(err)
            errHandle(err)
        })
    }
    return (
        <div>
            <center>
            <h1 style={{background:'darkblue',opacity:'0.6',color:'white'}}>Login Page with Authentication</h1>
            <div className='formstyle'>
                    <h3>Login</h3>
            <form autoComplete='off' style={formstyle}>
                <input type="email" name="email" placeholder='email' value={email} onChange={handleInput} /> <br />
                <input type="password" name="password" placeholder='*****' value={password} onChange={handleInput} /> <br />
                <button className='btn-primary' onClick={handleLogin}>Login</button>
                <button className='btn-outline' onClick={handleSignUp}>SignUp</button>
            </form>
            </div>

            </center>
           
        </div>
    )
}

export default LoginPage
