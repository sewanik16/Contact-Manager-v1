

import {Link} from 'react-router-dom'

function ViewContact() {
    return (
        <>
            <section className="add-contact p-3">
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
                                            Name : <span className="fw-bold">Nikhil Rathod</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                            Mobile : <span className="fw-bold">+91 8308741038</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                            Email : <span className="fw-bold">nikhilvrathod09@gmail.com</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                            Company : <span className="fw-bold">Devsot Pvt Ltd</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                            Profession : <span className="fw-bold">Software Engineer</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                            Group : <span className="fw-bold">Director Group</span>
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
            </section>
        </>
    );
}
export default ViewContact;
