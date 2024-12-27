import { useNavigate } from 'react-router';
import myaxios from "../utils/myaxios";

const VerifyOtp = () => {

    const navigate = useNavigate();

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);
        data.email = localStorage.getItem("email");


        // localStorage.setItem("token", response.data.token);
        // navigate('/set-password');

        console.log(data);

        myaxios.post(
            "/verify-otp",
            data
        ).then((response) => {
            if (response.data.status === "success") {
                console.log(response.data);
                localStorage.setItem("token", response.data.token);
                navigate('/set-password');
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
                                <h4>Submit OTP</h4>
                                <br/>
                                <form onSubmit={handleVerifyOtp}>
                                    <label>Your Otp</label>
                                    <input name="otp" id="otp" placeholder="User otp" className="form-control" type="text"/>
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

export default VerifyOtp;