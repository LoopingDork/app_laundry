import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Add_outlet = () => {

    const [username, setUsername] = useState({});
    const checkUser = useRef(false)
    const token = localStorage.getItem('token')
    const navigation = useNavigate()

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


    const [nama_outlet, setNamaOutlet] = useState("");
    const [alamat, setAlamat] = useState("");
    const [tlp, setTlp] = useState("");

    const [validation, setValidation] = useState([]);   


    const tambah_outlet = async(e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('nama_outlet', nama_outlet)
        formData.append('alamat', alamat)
        formData.append('tlp', tlp)
        
        await axios.post("http://127.0.0.1:8000/api/tambah_outlets", formData)
        .then(() => {
            alert("Successfully add outlets!")
            navigation('/dashboard')
        }).catch((error) => {
            setValidation(error.response.data);
        })
    }
    return(
        <>
            {
                username.role == 'admin' ?
                <>
                    <div className='bg-white py-5'>
                        <div className="container md:auto px-3">
                            <div className="flex justify-around">
                                <div>
                                    <h1 className="text-blue-500 text-2xl">APP LAUNDRY</h1>
                                </div>
                                <div className='columns-2'>
                                    <span>Welcome, {username.nama}</span>
                                    <p onClick={() => logoutHandler()}className='text-blue-500 hover:text-blue-400 cursor-pointer'>Log out</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container md:mx-auto px-3">
                        <div className="flex justify-center">
                            <div className='bg-white shadow-lg rounded-md px-3 py-2 mt-12'>
                                <h2 className='text-2xl'>Tambah Outfit</h2>
                                <hr /><br />
                                <form onSubmit={tambah_outlet}>
                                    <label htmlFor="Nama barang">Nama Barang</label>
                                    <input 
                                        type="text"
                                        className='mb-3 bg-white px-2 w-full py-2 border-2 border-blue-300 outline-none rounded-md'
                                        placeholder='Your items'
                                        name={nama_outlet}
                                        onChange={(e) => setNamaOutlet(e.target.value)}
                                    />
                                    {
                                        validation.nama_outlet && (
                                            <div className='bg-yellow-500 px-2 py-2'>
                                                {validation.nama_outlet[0]}
                                            </div>
                                        )
                                    }
                                    <label htmlFor="alamat">Alamat</label>
                                    <textarea
                                        type="text"
                                        placeholder='Your address'
                                        style={{height:"200px"}}
                                        className='mb-3 bg-white px-2 w-full py-2 border-2 border-blue-300 outline-none rounded-md'
                                        name={alamat}
                                        onChange={(e) => setAlamat(e.target.value)}
                                    />
                                    {
                                        validation.alamat && (
                                            <div className='bg-yellow-500 px-2 py-2'>
                                                {validation.alamat[0]}
                                            </div>
                                        )
                                    }
                                    <label htmlFor="Tlp">Tlp</label>
                                    <input 
                                        type="number"
                                        placeholder='012434'
                                        pattern="[0-9]{3}"
                                        className='mb-3 bg-white px-2 w-full py-2 border-2 border-blue-300 outline-none rounded-md'
                                        name={tlp}
                                        onChange={(e) => setTlp(e.target.value)}
                                    />
                                    {
                                        validation.tlp && (
                                            <div className='bg-yellow-500 px-2 py-2'>
                                                {validation.tlp[0]}
                                            </div>
                                        )
                                    }
                                    <button className='w-full text-white uppercase bg-blue-500 hover:bg-blue-400 px-2 py-3 rounded-md shadow-lg'>
                                        + ADD
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </>
                :
                <>Halaman tidak ditemukan</>
            }       
        </>
    )
}
export default Add_outlet;