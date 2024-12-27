import myaxios from "../utils/myaxios";
import { useNavigate } from "react-router";

const SetPassword = () => {

    const navigate = useNavigate();

    const handleNewPassword = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);


        // localStorage.setItem("token", response.data.token);
        // navigate('/dashboard');


        if (data.password !== data.confirm_password) {
            alert("Password and Confirm Password should be same");
            return;
        }else{
            myaxios.post(
                "/reset-password", 
                data,
             
            ).then((response) => {
                if (response.data.status === "success") {
                    navigate('/dashboard');
                } else {
                        onsole.log(response.data);
                }
            }).catch((error) => {
                    console.log(error.response.data);
            });
        }
        
    }



    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card animated fadeIn w-90  p-4">
                            <div className="card-body">
                                <h4>SET NEW PASSWORD</h4>
                                <br/>
                                <form onSubmit={handleNewPassword}>
                                    <label>New Password</label>
                                    <input name='password' id="password" placeholder="New Password" className="form-control" type="password"/>
                                    <br/>
                                    <label>Confirm Password</label> 
                                    <input name='confirm_password' id="confirm_password" placeholder="Confirm Password" className="form-control" type="password"/>
                                    <br/>
                                    <button type='submit' className="btn w-100 float-end bg-gradient-primary">Next</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetPassword;