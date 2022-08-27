import { Link } from "react-router-dom";

function ContactList() {
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
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-3">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpSNyhAnMOKvwCEKlcAHvGtlY66rTVSPjZQ&usqp=CAU" 
                      alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
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
                        </ul>
                    </div>
                    <div className="col-md-1">
                        <Link to="/contact/view/1" className="btn btn-warning my-1">
                            <i className="fa fa-eye"/>
                        </Link>
                        <Link to="/contact/edit/1" className="btn btn-primary my-1">
                            <i className="fa fa-pen"/>
                        </Link>
                        <button className="btn btn-danger my-1">
                            <i className="fa fa-trash"/>
                        </button>
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
export default ContactList;
