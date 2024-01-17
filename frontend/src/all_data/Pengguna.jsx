import '../App.css'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const Pengguna = () => {
    const [username, setUsername] = useState({});
    const checkUser = useRef(false)
    const token = localStorage.getItem('token')
    useEffect(() => {
        if(!token){
            navigation('/');
        }
        if(checkUser.current == true){
            const fetchUser = async() => {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                await axios.get("http://127.0.0.1:8000/api/me")
                .then((response) => {
                    setUsername(response.data);
                })
            }
            fetchUser()
        }
        return () => {
            checkUser.current = true;
        }
    }, [])

    const logoutHandler = async() => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.post("http://127.0.0.1:8000/api/logout")
        .then(() => {
            alert("Successfully logout!")
            navigation('/')
            localStorage.removeItem('token')
        })
    }
        // registrasi member 
        const navigation = useNavigate()
        const [nama_pengguna, setNamaPengguna] = useState("")
        const [alamat, setAlamat] = useState("")
        const [jenis_kelamin, setJenisKelamin] = useState("")
        const [tlp, setTlp] = useState('')
        const [validation, setValidation] = useState([])
    
        const memberRegistration = async(e) => {
            e.preventDefault()
    
            const formData = new FormData()
            formData.append('nama_pengguna', nama_pengguna);
            formData.append('alamat', alamat)
            formData.append('jenis_kelamin', jenis_kelamin);
            formData.append('tlp', tlp)
    
            await axios.post("http://127.0.0.1:8000/api/memberRegistration", formData)
            .then(() => {
                navigation('/customer')
                alert('Berhasil registrasi pelanggan!')
            }).catch((e) => {
                setValidation(e.response.data)
            })
        }
    
        // get customer data 

    const [getCustomer, setCustomer] = useState([])

    useEffect(() => {
        const getCustomerData = async() => {
            await axios.get("http://127.0.0.1:8000/api/record_member")
            .then((response) => {
                const data = response.data.data;
                if(data != ""){
                    setCustomer(data)
                }
            })
        }
        getCustomerData()
    }, [])
    return(
        <>
             {
                username.role == 'admin' ?
                <>
                    <div className='bg-blue-600 py-5'>
                        <div className="container md:auto px-3">
                            <div className="flex justify-between">
                                    <h1 className="text-blue-100 text-2xl">APP LAUNDRY</h1>
                                <div className="column-7">
                                    <button 
                                        className='ms-3 text-white'
                                        onClick={() => navigation('/user')}
                                    >
                                        Manajemen User
                                    </button>
                                    <button 
                                        className='ms-3 text-white'
                                        onClick={() => navigation('/outlet')}
                                    >
                                        Outlet
                                    </button>
                                    <button 
                                        className='ms-3 text-white'
                                        onClick={() => navigation('/paket')}
                                    >
                                        Paket Laundry
                                    </button>
                                    <button 
                                        className='ms-3 text-white'
                                        onClick={() => navigation('/customer')}
                                    >
                                        Customer
                                    </button>
                                    <button 
                                        className='ms-3 text-white'
                                        onClick={() => navigation('/entriTransaksi')}
                                    >
                                        Transaksi
                                    </button>
                                    <button className='ms-3 text-white'>
                                        Laporan
                                    </button>
                                </div>
                                <div className='columns-2'>
                                    <p onClick={() => logoutHandler()}
                                        className='text-blue-200 hover:text-blue-100 cursor-pointer'>
                                        Log out
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container md:mx-auto px-3 mt-6'>
                        <div className='bg-white rounded-md shadow-xl'>
                            <div className="px-3 py-3">
                                <div className="grid grid-cols-12">
                                    <img src="" alt="foto" />
                                    <div>
                                        <h1>User Profile</h1>
                                        <p>userProfile@gmail.com</p>
                                    </div>
                                </div>
                                <h2 className='text-2xl mt-5 mb-3'>Ubah Profile</h2>
                                <form>
                                <div className="grid grid-cols-2">
                                    <div>
                                        <label htmlFor="name">Name <span className='ms-7'>:</span> </label>
                                        <input 
                                            type="text" 
                                            className='mt-3 first-letter w-96 border-2 border-gray-500 outline-none px-2 rounded-sm shadow-lg py-1'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="username">Username : </label>
                                        <input 
                                            type="text" 
                                            className='w-96 border-2 border-gray-500 outline-none px-2 rounded-sm shadow-lg py-1'
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div>
                                        <label htmlFor="password">Password : </label>
                                        <input 
                                            type="password" 
                                            className='mt-3 w-96 border-2 border-gray-500 outline-none px-2 rounded-sm shadow-lg py-1'
                                            value={"okasdasd"}
                                            readOnly
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password">Role <span className='ms-11'></span>: </label>
                                        <select 
                                            className='mt-3 w-96 border-2 border-gray-500 outline-none px-2 rounded-sm shadow-lg py-1'
                                        >
                                            <option value="1">Admin</option>
                                            <option value="2">Kasir</option>
                                            <option value="3">Owner</option>
                                        </select>
                                    </div>
                                </div>
                                    <button 
                                        className='bg-blue-500 hover:bg-blue-300 mt-5 py-2 px-3 w-56 text-white text-lg shadow-lg rounded-md'>
                                        Edit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
                :
                <></>
             }  
            
        </>
    )
}
export default Pengguna;