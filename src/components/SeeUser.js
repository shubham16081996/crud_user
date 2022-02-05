import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

const SeeUser = () => {

    const [user, setUser] = useState({
        name:"",email:""
    })
    const {id} = useParams()

    useEffect(() => {
        loadUser();
    },[]);

    const loadUser = async() => {
        const result  = await axios.get(`http://localhost:3002/users/${id}`)
        setUser(result.data)
    }


  return <div className='container py-4'>
      <Link className='btn btn-primary' to="/">Back to Home</Link>
      <h1 className='display-4'>User ID : {id}</h1>
      <hr/>

      <ul className='list-group w-50 py-2'>
          <li className='list-group-item list-group-item-info'>Name : {user.name}</li>
          <li className='list-group-item list-group-item-secondary'>Email : {user.email}</li>
          <li className='list-group-item list-group-item-warning'>Birthdate : {user.birthdate}</li>
          <li className='list-group-item list-group-item-danger'>Product : {user.product}</li>
          <li className='list-group-item list-group-item-dark'>Gender : {user.gender}</li>
          <li className='list-group-item list-group-item-success'>Hobbies : {user.hobbies}</li>
      </ul>
  </div>;
};

export default SeeUser;
