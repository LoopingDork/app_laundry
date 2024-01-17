import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../img/logo.jpg";
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [validation, setValidation] = useState([]);   

    const navigation = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('token')){
            navigation('/dashboard');
        }
    }, [])

    const loginHandler = async(e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('username', username)
        formData.append('password', password)
        
        await axios.post("http://127.0.0.1:8000/api/login", formData)
        .then((response) => {
            alert("Successfully login!")
            navigation('/dashboard')
            localStorage.setItem('token', response.data.token)
        }).catch((error) => {
            setValidation(error.response.data);
        })
    }
    return(
        <div className="container md:mx-auto px-3 py-20">
            <div className="flex justify-center">
                <div className="bg-white py-3 shadow-2xl rounded-md w-auto px-3">
                    <img src={logo} alt="logo" style={{marginLeft: "auto", marginRight:"auto", height:"300px", width:"100%", objectFit:"cover", objectPosition:"80% 100%"}} />
                    <br />
                    {
                        validation.message && (
                            <div className='bg-yellow-500 text-white px-2 py-3 rounded-md'>
                                {validation.message}
                            </div>
                        )
                    }
                    <h2 className="text-2xl mb-3">LOGIN PAGES</h2>
                    <form onSubmit={loginHandler}>
                        <label htmlFor="Username">Username</label>
                        <input 
                            type="text" 
                            name={username}
                            onChange={(e) => setUsername(e.target.value)} 
                            id="username" 
                            className="w-full px-3 py-2 border-2 border-indigo-500 rounded-md outline-none mb-3"
                        />
                        {
                            validation.username && (
                                <div className='bg-yellow-500 text-white px-2 py-3 rounded-md'>
                                    {validation.username[0]}
                                </div>
                            )
                        }
                        <label htmlFor="Password">Password</label>
                        <input 
                            type="password" 
                            name={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            id="password" 
                            className="w-full px-3 py-2 border-2 border-indigo-500 rounded-md outline-none mb-3"
                        />
                        {
                            validation.password && (
                                <div className='bg-yellow-500 text-white px-2 py-3 rounded-md'>
                                    {validation.password[0]}
                                </div>
                            )
                        }
                        <br />
                        <button 
                            className="w-full text-white uppercase bg-blue-500 hover:bg-blue-400 px-2 py-3 rounded-md shadow-lg">
                            Log In
                        </button>
                    </form>
                </div>
            </div>   
        </div>
    )
}
export default Login;