
import myaxios from "../utils/myaxios";
import { useEffect,useState } from "react";


const ProfilePage = () => {

    const [profile, setProfile] = useState({
        email: "",
        firstName: "",
        lastName: "",
        mobile: "",
        password: ""
    });

    useEffect(() => {

        myaxios.get(
            "/user-profile"
        ).then((response) => {
            if (response.data.status === "success") {
                setProfile({
                    email: response.data.data.email,
                    firstName: response.data.data.firstName,
                    lastName: response.data.data.lastName,
                    mobile: response.data.data.mobile,
                    password: response.data.data.password
                })
            }else{
                alert("Error: "+response.data.message);
            }
        }).catch((error) => {
            console.log(error);
        });

    }, []);


    
    



    return (
        <div>
            <div id="contentRef" className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <div className="card animated fadeIn w-100 p-3">
                                <div className="card-body">
                                    <h4>User Profile</h4>
                                    <hr/>
                                    <div className="container-fluid m-0 p-0">
                                        <div className="row m-0 p-0">
                                            <div className="col-md-4 p-2">
                                                <label>Email Address</label>
                                                <input readOnly value={profile.email} id="email" placeholder="User Email" className="form-control" type="email"/>
                                            </div>
                                            <div className="col-md-4 p-2">
                                                <label>First Name</label>
                                                <input value={profile.firstName} id="firstName" placeholder="First Name" className="form-control" type="text"/>
                                            </div>
                                            <div className="col-md-4 p-2">
                                                <label>Last Name</label>
                                                <input value={profile.lastName} id="lastName" placeholder="Last Name" className="form-control" type="text"/>
                                            </div>
                                            <div className="col-md-4 p-2">
                                                <label>Mobile Number</label>
                                                <input value={profile.mobile} id="mobile" placeholder="Mobile" className="form-control" type="mobile"/>
                                            </div>
                                            <div className="col-md-4 p-2">
                                                <label>Password</label>
                                                <input value={profile.password} id="password" placeholder="User Password" className="form-control" type="password"/>
                                            </div>
                                        </div>
                                        <div className="row m-0 p-0">
                                            <div className="col-md-4 p-2">
                                                <button onclick="onUpdate()" className="btn mt-3 w-100  bg-gradient-primary">Update</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ProfilePage;