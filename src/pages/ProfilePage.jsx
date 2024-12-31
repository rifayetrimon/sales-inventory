import myaxios from "../utils/myaxios";
import { useEffect, useState } from "react";
// import { errorToast, successToast } from "../utils/toast";


const ProfilePage = ({isNavOpen}) => {
    const [profile, setProfile] = useState({
        email: "",
        firstName: "",
        lastName: "",
        mobile: "",
        password: ""
    });

    useEffect(() => {
        myaxios.get("/user-profile")
            .then((response) => {
                if (response.data.status === "success") {
                    setProfile({
                        email: response.data.data.email,
                        firstName: response.data.data.firstName,
                        lastName: response.data.data.lastName,
                        mobile: response.data.data.mobile,
                        password: "" 
                    });
                } else {
                    alert("Error: " + response.data.message);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);




    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedProfile = { ...profile };
        // const updatedProfile = { ...profile, password: profile.password || "" };


        // If password is empty, it should not be sent in the update request
        if (updatedProfile.password === "") {
            delete updatedProfile.password;
        }

        
        myaxios.post("/user-update", updatedProfile)
            .then((response) => {
                console.log("Response from update API:", response); // Log the response from the API
                if (response.data?.status === "success") {
                    // alert("Profile Updated Successfully");
                    successToast("Profile Updated Successfully");
                } else {
                    // alert("Profile Update Failed");
                    errorToast("Profile Update Failed");
                }
            })
            .catch((error) => {
                console.error("Error during profile update:", error);
                // errorToast("Profile Update Failed");
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value
        });
    };





    return (
        <div>
            <div id="contentRef" className="{isNavOpen}">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <div className="card animated fadeIn w-100 p-3">
                                <div className="card-body">
                                    <h4>User Profile</h4>
                                    <hr />
                                    <div className="container-fluid m-0 p-0">
                                        <div className="row m-0 p-0">
                                            <div className="col-md-4 p-2">
                                                <label>Email Address</label>
                                                <input
                                                    readOnly
                                                    value={profile.email}
                                                    id="email"
                                                    placeholder="User Email"
                                                    className="form-control"
                                                    type="email"
                                                />
                                            </div>
                                            <div className="col-md-4 p-2">
                                                <label>First Name</label>
                                                <input
                                                    name="firstName"
                                                    value={profile.firstName}
                                                    onChange={handleChange}
                                                    id="firstName"
                                                    placeholder="First Name"
                                                    className="form-control"
                                                    type="text"
                                                />
                                            </div>
                                            <div className="col-md-4 p-2">
                                                <label>Last Name</label>
                                                <input
                                                    name="lastName"
                                                    value={profile.lastName}
                                                    onChange={handleChange}
                                                    id="lastName"
                                                    placeholder="Last Name"
                                                    className="form-control"
                                                    type="text"
                                                />
                                            </div>
                                            <div className="col-md-4 p-2">
                                                <label>Mobile Number</label>
                                                <input
                                                    name="mobile"
                                                    value={profile.mobile}
                                                    onChange={handleChange}
                                                    id="mobile"
                                                    placeholder="Mobile"
                                                    className="form-control"
                                                    type="text"
                                                />
                                            </div>
                                            <div className="col-md-4 p-2">
                                                <label>Password</label>
                                                <input
                                                    name="password"
                                                    value={profile.password}
                                                    onChange={handleChange}
                                                    id="password"
                                                    placeholder="User Password"
                                                    className="form-control"
                                                    type="password"
                                                />
                                            </div>
                                        </div>
                                        <div className="row m-0 p-0">
                                            <div className="col-md-4 p-2">
                                                <button
                                                    onClick={handleUpdate}
                                                    className="btn mt-3 w-100 bg-gradient-primary"
                                                >
                                                    Update
                                                </button>
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
