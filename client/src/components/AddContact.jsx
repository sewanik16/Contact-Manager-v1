import {Link} from 'react-router-dom'

function AddContact() {
    return (
        <>
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
                                <form>
                                    <input
                                        type="text"
                                        className="form-control my-2"
                                        placeholder="Full Name"
                                    />
                                    <input
                                        type="email"
                                        className="form-control my-2"
                                        placeholder="Email Id"
                                    />
                                    <input
                                        type="number"
                                        className="form-control my-2"
                                        placeholder="Mobile Number"
                                    />
                                    <input
                                        type="text"
                                        className="form-control my-2"
                                        placeholder="Company"
                                    />
                                    <input
                                        type="text"
                                        className="form-control my-2"
                                        placeholder="Profession"
                                    />
                                    <select className="form-control my-2 ">
                                        <option> Select Group </option>
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
