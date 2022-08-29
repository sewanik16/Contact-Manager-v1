

import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom'
import ContactService from '../services/ContactService';
import Spinner from './Spinner';

function ViewContact() {
   let {contactid} = useParams()
   let [state,setState] = useState({
    loading:false,
    contact:{},
    errorMessage:"",
    group:{}
   })

   useEffect(()=>{
        setState({...state,loading:true})
        ContactService.getContact(contactid).then((response)=>{
            ContactService.getGroup(response.data.groupid).then((res)=>{
                setState({...state,loading:false,contact:response.data,group:res.data})
            }).catch((err)=>{
                console.log("group err",err)
            })
        }).catch((err)=>{
            setState({...state,loading:false,errorMessage:err})
        })
        
   },[contactid])

   let {loading,contact,errorMessage,group} = state

    return (
        <>  
            {/* <pre>{JSON.stringify(contacts)}</pre> */}
            <section className="add-contact p-3">
                {
                    loading?<Spinner/>:
                   <>
                    {
                        Object.keys(contact).length>0 && Object.keys(group).length>0 &&
                        <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-succes fw-bold">View Contact</p>
                            <p className="fst-italic">
                                lorem ipsmun jnjnj sjhksjs i skk bsnnjs
                            </p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='row align-items-center justify-content-center'>
                                        <div className='col-4'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpSNyhAnMOKvwCEKlcAHvGtlY66rTVSPjZQ&usqp=CAU" 
                                        alt="" className="img-fluid" />
                                        </div>
                                        <div className='col-6'>
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-action">
                                            Name : <span className="fw-bold">{contact.name}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                            Mobile : <span className="fw-bold">+91 {contact.mobile}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                            Email : <span className="fw-bold">{contact.email}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                            Company : <span className="fw-bold">{contact.company}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                            Profession : <span className="fw-bold">{contact.profession}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                            Group : <span className="fw-bold">{group.groupname}</span>
                                            </li>
                                        </ul>
                                        <Link to="/" className='btn btn-warning my-2'>Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    }
                   </>
                }
            </section>
        </>
    );
}
export default ViewContact;
