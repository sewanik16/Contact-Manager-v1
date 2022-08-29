import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContactService from "../services/ContactService";
import Spinner from "./Spinner";

function ContactList() {

  const [query,setQuery] = useState({
    text:""
  })

  const [state, setState] = useState({
    loading: false,
    contacts: [],
    filteredContacts:[],
    errorMessage: "",
  });

  useEffect(() => {
    setState({ ...state, loading: true });

    ContactService.getAllContacts()
      .then((response) => {
        setState({ ...state, loading: false, contacts: response.data,filteredContacts:response.data });
      })
      .catch((err) => {
        setState({ ...state, loading: false, errorMessage: err });
      });
  }, []);

  let DeleteContact=(cid)=>{
    ContactService.deleteContact(cid).then(()=>{
      ContactService.getAllContacts()
      .then((response) => {
        setState({ ...state, loading: false, contacts: response.data ,filteredContacts:response.data});
      })
    })
  }


  let searchContacts=(e)=>{
    setQuery({...query,text:e.target.value})
    let theContacts = state.contacts.filter((contact)=>{
      return contact.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setState({ ...state, filteredContacts: theContacts });
    // console.log(contacts)
    // console.log(filteredContacts)
  }

  let { loading, contacts,filteredContacts, errorMessage } = state;

  return (
    <>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3">
                  {" "}
                  Phone Directory
                  <Link to="/contact/add" className="btn btn-success ms-2">
                    <i className="fa fa-plus-circle me-2" />
                    New
                  </Link>
                </p>
                <p className="fst-italic">
                  lorem jnndnjdda kss kaskmakmsa lorem jnndnjdda kss
                  kaskmakmsalorem jnndnjdda kss kaskmakmsa
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <form className="row">
                  <div className="col">
                    <input
                      type="text"
                      name="text" value={query.text} onChange={searchContacts}
                      className="form-control"
                      placeholder="Search Names"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="submit"
                      className="btn btn-outline-dark"
                      value="Search"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-list">
        {loading ? (
          <Spinner />
        ) : (
          <div className="container">
            <div className="row">

              { filteredContacts.length>0 &&
                filteredContacts.map((contact) => (
                <div className="col-md-6" key={contact.id}>
                  <div className="card my-2">
                    <div className="card-body">
                      <div className="row align-items-center justify-content-center">
                        <div className="col-md-3">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpSNyhAnMOKvwCEKlcAHvGtlY66rTVSPjZQ&usqp=CAU"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-7">
                          <ul className="list-group">
                            <li className="list-group-item list-group-item-action">
                              Name :{" "}
                              <span className="fw-bold">{contact.name}</span>
                            </li>
                            <li className="list-group-item list-group-item-action">
                              Mobile :{" "}
                              <span className="fw-bold">
                                +91 {contact.mobile}
                              </span>
                            </li>
                            <li className="list-group-item list-group-item-action">
                              Email :{" "}
                              <span className="fw-bold">{contact.email}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-1">
                          <Link
                            to={`/contact/view/${contact.id}`}
                            className="btn btn-warning my-1"
                          >
                            <i className="fa fa-eye" />
                          </Link>
                          <Link
                            to={`/contact/edit/${contact.id}`}
                            className="btn btn-primary my-1"
                          >
                            <i className="fa fa-pen" />
                          </Link>
                          <button className="btn btn-danger my-1" onClick={()=>{
                            DeleteContact(contact.id)
                          }}>
                            <i className="fa fa-trash" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
export default ContactList;
