import { useNavigate } from "react-router";
import myaxios from "../utils/myaxios";
import { Link } from "react-router-dom";

const RegistrationPage = () => {    

    const navigate = useNavigate();

    const handleRegistration = (e) => {
       
        e.preventDefault();

        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);

        console.log(data);

        myaxios.post(
            "/user-registration",
            data,
        ).then((response) => {
            if (response.data.status === "success") {
                navigate("/login");
            } else {
                alert(response.data.message);
            }
        }).catch((error) => {
            console.log(error);
        });  
        
        
        
        // auto login after registration

        // myaxios.post(
        //     "/user-registration",
        //     data,
        // ).then((response) => {
        //     if (response.data.status === "success") {
               
        //         myaxios.post(
        //             "/user-login",
        //             data
        //         ).then((response) => {
        //             if (response.data.status === "success") {
        //                 localStorage.setItem("token", response.data.token);
        //             } else {
        //                 alert(response.data.message);
        //             }
        //         }).catch((error) => {
        //             console.log(error);
        //         });

        //     } else {
        //         alert(response.data.message);
        //     }
        // }).catch((error) => {
        //     console.log(error);
        // });



    }




    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-10 col-lg-10 center-screen">
                <div className="card animated fadeIn w-100 p-3">
                    <div className="card-body">
                        <h4>Sign Up</h4>
                        <hr/>
                        <div className="container-fluid m-0 p-0">
                            <form onSubmit={handleRegistration}>
                                <div className="row m-0 p-0">
                                    <div className="col-md-4 p-2">
                                        <label>Email Address</label>
                                        <input name="email" id="email" placeholder="User Email" className="form-control" type="email"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>First Name</label>
                                        <input name="firstName" id="firstName" placeholder="First Name" className="form-control" type="text"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Last Name</label>
                                        <input name="lastName" id="lastName" placeholder="Last Name" className="form-control" type="text"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Mobile Number</label>
                                        <input name="mobile" id="mobile" placeholder="Mobile" className="form-control" type="mobile"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Password</label>
                                        <input name="password" id="password" placeholder="User Password" className="form-control" type="password"/>
                                    </div>
                                </div>
                                <div className="row m-0 p-0">
                                    <div className="col-md-4 p-2">
                                        <button type="submit" className="btn mt-3 w-100  bg-gradient-primary">Complete</button>
                                    </div>
                                </div>
                                <hr />
                                <div class="float-end mt-3">
                                    <span>
                                        <Link class="text-center ms-3 h6" to="/login">Sign In </Link>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default RegistrationPage;