import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, clearContact } from "../Redux/Actions/ActionNames";

const Home = () => {
	const contacts = useSelector((state) => state.allReducers);
	const dispatch = useDispatch();

	return (
		<div className="container">
			<div className="row d-flex flex-column">
				<Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
					Add Contact
				</Link>

				<div className="col-lg-12 col-md-12 col-12 my-4">
					<table className="table table-condensed table-responsive table-hover">
						<thead className="table-header bg-dark text-white">
							<tr>
								<th scope="col">Id</th>
								<th scope="col">Name</th>
								<th scope="col">Email</th>
								<th scope="col">Phone</th>
								<th scope="col"></th>
							</tr>
						</thead>
						<tbody>
							{contacts.length > 0 ? (
								contacts.map((contact, id) => (
									<tr key={id}>
										<td>{id + 1}</td>
										<td>{contact.name}</td>
										<td>{contact.email}</td>
										<td>{contact.phone}</td>
										<td>
											<Link to={`/edit/${contact.id}`} className=" mr-4">
												<i class="fas fa-edit"></i>
											</Link>
											<span
												type="button"
												onClick={() => dispatch(deleteContact(contact.id))}
												className="text-danger"
											>
												<i class="fas fa-trash"></i>
											</span>
										</td>
									</tr>
								))
							) : (
								<tr>
									<th>No contacts found</th>
								</tr>
							)}
						</tbody>
					</table>
					<button
						type="button"
						class="btn btn-outline-danger btn-block my-5"
						onClick={() => dispatch(clearContact())}
					>
						Clear Contact
					</button>
					{/* <span
						className="btn btn-outline-dark my-5"
						onClick={() => dispatch(clearContact())}
					>
						Clear Contact
					</span> */}
				</div>
			</div>
		</div>
	);
};

export default Home;

// const mapStateToProps = (state) => ({
// 	contacts: state,
// });

// const mapDispatchToProps = (dispatch) => ({
// 	deleteContact: (id) => {
// 		dispatch({ type: "DELETE_CONTACT", payload: id });
// 	},
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
