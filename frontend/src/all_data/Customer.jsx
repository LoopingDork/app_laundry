import '../App.css'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const Customer = () => {
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
                        <a 
                            href='#id01'
                            className='dropBtn bg-blue-700 hover:bg-blue-600 text-white px-2 py-3 rounded-md shadow-xl'
                        >
                            + Registrasi Pelanggan
                        </a> 
                        <div id='id01' className='modal'>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <header className="containers">
                                        <a href="#"className='closeBtn'>X</a>
                                        <h4>Registration</h4>
                                    </header>
                                    <form onSubmit={memberRegistration}>
                                        <div className='containers'>
                                            <label htmlFor="nama">
                                                <h2 className='text-2xl mb-3'>Nama</h2> 
                                            </label>
                                            <input 
                                                type="text" 
                                                name={nama_pengguna}
                                                onChange={(e) => setNamaPengguna(e.target.value)}
                                                id="nama" 
                                                className="w-full px-3 py-2 border-2 border-indigo-500 rounded-md outline-none mb-3"
                                            />
                                            {
                                                validation.nama_pengguna && (
                                                    <div className='bg-yellow-500 px-2 py-3 text-white rounded-sm shadow-lg'>
                                                        {validation.nama_pengguna[0]}
                                                    </div>
                                                )
                                            }
                                            <label htmlFor="alamat">
                                                <h2 className='text-2xl mb-3'>Alamat</h2> 
                                            </label>
                                            <textarea 
                                                type="text" 
                                                name={alamat}
                                                onChange={(e) => setAlamat(e.target.value)}
                                                rows="6" 
                                                id="nama" 
                                                className="w-full px-3 py-2 border-2 border-indigo-500 rounded-md outline-none mb-3"
                                            />
                                            {
                                                validation.alamat && (
                                                    <div className='bg-yellow-500 px-2 py-3 text-white rounded-sm shadow-lg'>
                                                        {validation.alamat[0]}
                                                    </div>
                                                )
                                            }
                                            <label htmlFor="jenis kelamin">
                                                <h2 className='text-2xl mb-3'>Jenis Kelamin</h2> 
                                            </label>
                                            <select  
                                                name={jenis_kelamin}
                                                onChange={(e) => setJenisKelamin(e.target.value)}
                                                className="w-full px-3 py-2 border-2 border-indigo-500 rounded-md outline-none mb-3"
                                            >
                                                <option>Choose Gender</option>
                                                <option value="L">Male</option>
                                                <option value="P">Female</option>
                                            </select>
                                            {
                                                validation.jenis_kelamin && (
                                                    <div className='bg-yellow-500 px-2 py-3 text-white rounded-sm shadow-lg'>
                                                        {validation.jenis_kelamin[0]}
                                                    </div>
                                                )
                                            }
                                            <label htmlFor="tlp">
                                                <h2 className='text-2xl mb-3'>Tlp</h2> 
                                            </label>
                                            <input 
                                                type="number" 
                                                name={tlp}
                                                onChange={(e) => setTlp(e.target.value)} 
                                                id="nama" 
                                                className="w-full px-3 py-2 border-2 border-indigo-500 rounded-md outline-none mb-3"
                                            />
                                            {
                                                validation.tlp && (
                                                    <div className='bg-yellow-500 px-2 py-3 text-white rounded-sm shadow-lg'>
                                                        {validation.tlp[0]}
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <footer className="containers">
                                            <button
                                                className='bg-blue-600 hover:bg-blue-500 px-2 py-2 rounded-md'
                                            >
                                                Registration
                                            </button>
                                        </footer>
                                    </form>
                                </div>
                            </div>
                        </div>

                <div className='mt-10'>
                    <div className='bg-white py-2 px-3 shadow-lg '>
                        <h2 className='text-2xl'>CUSTOMER DATA</h2>  
                        <hr />
                        <table className='table table-fixed mt-8 border-2 border-gray-300' style={{
                            width: "100%"
                        }}>
                            <thead>
                                <tr>
                                    <th className='border-r-2 border-gray-300 px-3'>No</th>
                                    <th className='border-r-2 border-gray-300 px-3'>Nama</th>
                                    <th className='border-r-2 border-gray-300 px-3'>Alamat</th>
                                    <th className='border-r-2 border-gray-300 px-3'>Jenis Kelamin</th>
                                    <th className='border-r-2 border-gray-300 px-3'>Telp</th>
                                    <th className='border-r-2 border-gray-300 px-3'>Aksi</th>
                                </tr>
                            </thead>
                            {
                                getCustomer.map((post) => (
                                    <>
                                        <tbody>
                                            <tr>
                                                <td className='border-r-2 border-t-2 border-b-2 text-center border-gray-300 px-3'>
                                                    {post.id}
                                                </td>
                                                <td className='border-r-2 border-t-2 border-b-2 text-center border-gray-300 px-3'>
                                                    {post.nama_pengguna}
                                                </td>
                                                <td className='border-r-2 border-t-2 border-b-2 text-center border-gray-300 px-3'>
                                                    {post.alamat}
                                                </td>
                                                <td className='border-r-2 border-t-2 border-b-2 text-center border-gray-300 px-3'>
                                                    {post.jenis_kelamin}
                                                </td>
                                                <td className='border-r-2 border-t-2 border-b-2 text-center border-gray-300 px-3'>
                                                    {post.tlp}
                                                </td>
                                                <td className='border-r-2 border-t-2 border-b-2 text-center border-gray-300 px-3'>
                                                    <button className='bg-green-500 px-4 text-white'>Edit</button>
                                                    &nbsp;
                                                    <button className='bg-red-500 px-4 text-white'>Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </>
                                ))
                            }
                        </table>
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
export default Customer;