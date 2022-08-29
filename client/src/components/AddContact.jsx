import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import ContactService from '../services/ContactService';

function AddContact() {
    let navigate = useNavigate()
    let [state,setState] = useState({
        loading:false,
        contact:{name:"",email:"",mobile:"",company:"",profession:"",groupid:""},
        groups:[],
        errorMesssage:""
    })

    let handleInput=(e)=>{
        setState({...state,contact:{...state.contact,[e.target.name]:e.target.value}})
    }

    useEffect(()=>{
        ContactService.getGroups().then((res)=>{
            setState({...state,groups:res.data})
        })
    },[])

    let submitForm=(e)=>{
            e.preventDefault()
            ContactService.createContact(state.contact).then((res)=>{
                navigate("/")
            })
    }

    let {loading,contact,groups,errorMesssage}= state

    return (
        <>
            {/* <pre>{JSON.stringify(contact)}</pre> */}
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-succes fw-bold">Create Contact</p>
                            <p className="fst-italic">
                                lorem ipsmun jnjnj sjhksjs i skk bsnnjs
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <form onSubmit={submitForm}>
                                    <input
                                        type="text"
                                        name="name" value={contact.name} onChange={handleInput} required
                                        className="form-control my-2"
                                        placeholder="Full Name"
                                    />
                                    <input
                                        type="email"
                                        name="email" value={contact.email} onChange={handleInput} required
                                        className="form-control my-2"
                                        placeholder="Email Id"
                                    />
                                    <input
                                        type="number"
                                        name="mobile" value={contact.mobile} onChange={handleInput} required
                                        className="form-control my-2"
                                        placeholder="Mobile Number"
                                    />
                                    <input
                                        type="text"
                                        name="company" value={contact.company} onChange={handleInput} required
                                        className="form-control my-2"
                                        placeholder="Company"
                                    />
                                    <input
                                        type="text"
                                        name="profession" value={contact.profession} onChange={handleInput} required
                                        className="form-control my-2"
                                        placeholder="Profession"
                                    />
                                    <select className="form-control my-2 "
                                    name="groupid" onChange={handleInput} required
                                    >
                                        <option disabled selected> Select Group </option>
                                        {
                                            groups.map((group)=>(
                                                <option key={group.id} value={group.id} >{group.groupname}</option>
                                            ))
                                        }
                                    </select>
                                    <div className='row'>
                                        <div className='col-md-8'>
                                        <input type="submit" className="btn btn-success w-100" value="Create"/>
                                        </div>
                                        <div className='col-md-4'>
                                         <Link to="/contacts/list" className='btn btn-dark w-100'>Cancel</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default AddContact;
