import { useEffect, useState } from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom'
import ContactService from '../services/ContactService';

function EditContact() {
    let navigate = useNavigate()
    let {contactid} = useParams()
    let [state,setState] = useState({
        loading:false,
        contact:{},
        groups:[],
        errorMessage:""
    })
    
    useEffect(()=>{
        setState({...state,loading:true})
        ContactService.getContact(contactid).then((res)=>{
            ContactService.getGroups(res.data.groupid).then((resp)=>{
                setState({...state,loading:false,contact:res.data,groups:resp.data})
            })
        }).catch((err)=>{
            setState({...state,loading:false,errorMessage:err})
        })

    },[])

    let handleInput=(e)=>{
        setState({...state,contact:{...state.contact,[e.target.name]:e.target.value}})
    }

    let updateForm=(e)=>{
        e.preventDefault()
        ContactService.updateContact(state.contact,contactid).then((res)=>{
            navigate("/")
        })
    }

    let {loading,contact,groups,errorMessage} = state

    return (
        <>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary fw-bold"><span className='shadow-sm'>Edit Contact</span></p>
                            <p className="fst-italic">
                                lorem ipsmun jnjnj sjhksjs i skk bsnnjs
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <form onSubmit={updateForm}>
                                    <input
                                        type="text"
                                        className="form-control my-2"
                                        placeholder="Full Name"
                                        value={contact.name} onChange={handleInput} 
                                        name="name"
                                        required
                                    />
                                    <input
                                        type="email"
                                        className="form-control my-2"
                                        placeholder="Email Id" value={contact.email} onChange={handleInput} 
                                        name="email"
                                        required
                                    />
                                    <input
                                        type="number"
                                        className="form-control my-2"
                                        placeholder="Mobile Number" value={contact.mobile} onChange={handleInput} 
                                        name="mobile"
                                        required
                                    />
                                    <input
                                        type="text"
                                        className="form-control my-2"
                                        placeholder="Company" value={contact.company} onChange={handleInput} 
                                        name="company"
                                        required
                                    />
                                    <input
                                        type="text"
                                        className="form-control my-2"
                                        placeholder="Profession" value={contact.profession} onChange={handleInput} 
                                        name="profession"
                                        required
                                    />
                                    <select className="form-control my-2 " value={contact.groupid} onChange={handleInput} 
                                        name="groupid"
                                        required>
                                        <option disabled> Select Group </option>
                                        {
                                            groups.map((group)=>(
                                                <option key={group.id} value={group.id}>{group.groupname}</option>
                                            ))
                                        }
                                    </select>
                                    <div className='row'>
                                        <div className='col-md-8'>
                                        <input type="submit" className="btn btn-primary w-100" value="Update"/>
                                        </div>
                                        <div className='col-md-4'>
                                         <Link to="/contacts/list" className='btn btn-dark w-100'>Cancel</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='col-md-6'>
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpSNyhAnMOKvwCEKlcAHvGtlY66rTVSPjZQ&usqp=CAU" 
                                className='img-fluid rounded-circle m-1 w-50'
                             />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default EditContact;
