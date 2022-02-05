import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
            const [users, setUsers]  = useState([])

            useEffect(() => {
              loadUsers();
            }, [])

            const loadUsers = async() => {
                const result  = await axios.get(`http://localhost:3002/users`)
                setUsers(result.data.reverse())
            }

            const deleteUser = async(id) => {
                await axios.delete(`http://localhost:3002/users/${id}`)
                loadUsers();
            }

            if(users.length===0){
                return(
                    <div className='container'>
                            <h1 className='mt-4 text-center'>No Users to Show</h1>
                            <h2 className='text-center text-muted'>Add some users</h2>
                    </div>
                )
            }
            else{
                return (
                    <div className='container bg-light py-4'>
                       <div className='fw-bold fs-4 text-center'>All Users</div>
                        <div className='row py-3'>
                        <table className='table border shadow'>
                        <thead >
                            <tr>
                                <th  scope='col'>#</th>
                                <th  scope='col'>Name</th>
                                <th  scope='col'>Email</th>
                                <th  scope='col'>Gender</th>
                                <th  scope='col'>Birthdate</th>
                                <th  scope='col'>Action</th>
                            </tr>
                        </thead>
                            
                        <tbody >
                            {users.map((user,index)=>(
                                <tr key={user.id}>
                                    <th scope='row'>{index+1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.birthdate}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-1' to={`users/${user.id}`}>View All Details</Link>
                                        <Link className='btn btn-outline-success mx-1' to={`/users/edit/${user.id}`}>Edit</Link>
                                        <Link className='btn btn-danger mx-1' onClick={()=>{deleteUser(user.id)}} to="">Delete</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        </table>
                        </div>
                    </div>
                )
            }
}

export default Home
