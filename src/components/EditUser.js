import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'

const EditUser = () => {

    const history = useHistory()

    const [product, setProduct] = useState([])   

    const ToggleTextBox = (other) => {
        other = document.getElementById('other')       
        var TextBox = document.getElementById("textBox")                                
        if (!(other.checked ? false : true)) {                                         
          TextBox.style.display = ''
          TextBox.focus()                                                            
        } else { TextBox.style.display = 'none' }
      }

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/`).then((response) => {
          setProduct(response.data)
        })
      }, [])


    const {id} = useParams()
    const [user, setUser] = useState({
        name:"", email:"", birthdate:"", gender:"",hobbies:""
    })
    const {name, email,birthdate,hobbies} = user

    const onChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }

    useEffect(() => {
        loadUser();
    },[]);

    const onSubmit = async(e) => {
        e.preventDefault()
        await axios.put(`http://localhost:3002/users/${id}`,user);
        history.push(`/users/${id}`)
    }

  
    const loadUser = async() => {
        const result  = await axios.get(`http://localhost:3002/users/${id}`)
        setUser(result.data)
    }
    return (
        <div className='container'>
            <form onSubmit={e=>onSubmit(e)} className="col-sm-6">
                <h2 className="my-3">Edit User</h2>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="name" className="form-control" name="name" id="name" value={name} onChange={e=>onChange(e)}  />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" id="email" value={email} onChange={e=>onChange(e)}  />
                </div>  

                <div className="form-group mb-3">
                    <label className=' form-label fs-5 fw-bold' htmlFor="birthdate">Birth Date</label>
                    <input className="form-control" onChange={e => onChange(e)} name="birthdate" id="birthdate" value={birthdate} type="date" />
                </div>      

                <div className="form-group mb-3">
                <label className='fs-5 fw-bold' htmlFor="product">Select Product</label>
                <select className='form-select' id="product" name='product' onChange={e => onChange(e)} >
                  {/* Mapping Each Product of the data from Api */}
                  {product.map((e) => {
                    return <option key={e.id} value={e.title}>{e.title}</option>
                  })}
                </select>
              </div>

               {/*  GENDER RADIO */}
               <div className="form-group mb-3">
                <label className='fs-5 fw-bold'>Gender &nbsp;&nbsp;</label>
                <div className='form check form-check-inline'>
                  <input className="form-check-input mx-2" 
                    type="radio" name="gender" value="Male" id="male" onChange={e => onChange(e)} />
                  <label className="form-check-label" htmlFor="male">Male</label>
                  
                  <input className="form-check-input mx-2"
                    type="radio" name="gender" value="Female" id="female"  onChange={e => onChange(e)} />
                  <label className="form-check-label" htmlFor="female">Female</label>
                </div>
              </div>

              <div className="form-group mb-3">
                <label className='fs-5 fw-bold'>Hobbies &nbsp;&nbsp;</label>
                <div className='form check form-check-inline'>
                  <input  className="form-check-input mx-2" type="checkbox" id="other"  onClick={(e) => { ToggleTextBox(e) }} />
                  <label className="form-check-label" htmlFor="other">Others</label>
                </div>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="textBox"></label>
                <input className="form-control" onChange={e => onChange(e)} name="hobbies"  type="text" id='textBox' value={hobbies} style={{ display: "none" }} />
              </div>

                <button type="submit" className="btn btn-primary">Edit</button>
            </form>
        </div>
    )
}

export default EditUser
