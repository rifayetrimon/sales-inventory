import React from 'react';
import myaxios from "../utils/myaxios";
import { useNavigate } from 'react-router';

const PasswordResetPage = () => {

    const navigate = useNavigate();

    const handleSendOtp = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);
        console.log(data);


        // localStorage.setItem("email", data.email);
        // navigate('/verify-otp');


        myaxios.post(
            "/send-otp",
            data,
        ).then((response) => {
            if (response.data.status === "success") {
                console.log(response.data);
                localStorage.setItem("email", data.email);
                navigate('/verify-otp');
            } else {
                alert(response.data.message);
            }
        }).catch((error) => {
            console.log(error);
        });



    }






    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card animated fadeIn w-90  p-4">
                            <div className="card-body">
                                <h4>EMAIL ADDRESS</h4>
                                <br/>
                                <form onSubmit={handleSendOtp}>
                                    <label>Your email address</label>
                                    <input name='email' id="email" placeholder="User Email" className="form-control" type="email"/>
                                    <br/>
                                    <button type='submit'  className="btn w-100 float-end bg-gradient-primary">Next</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordResetPage;