import { Link, useNavigate } from "react-router-dom";
import myaxios from "../utils/myaxios";   

const LoginPage = () => {

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);


        // const data = Object.fromEntries(new FormData(e.target));   

        
        myaxios.post(
            "/user-login",
            data
        ).then((response) => {
            if (response.data.status === "success") {
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
            } else {
                alert(response.data.message);
            }
        }).catch((error) => {
            console.log(error);
        });

    };



    return (     
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-7 animated fadeIn col-lg-6 center-screen">
                    <div class="card w-90  p-4">
                        <div class="card-body">
                            <h4>SIGN IN</h4>    
                            <form onSubmit={handleLogin}>
                                <br/>
                                <input name="email" id="email" placeholder="User Email" class="form-control" type="email"/>
                                <br/>
                                <input name="password" id="password" placeholder="User Password" class="form-control" type="password"/>
                                <br/>
                                <button type="submit" class="btn w-100 bg-gradient-primary">Next</button>
                                <hr/>
                                <div class="float-end mt-3">
                                    <span>
                                        <Link class="text-center ms-3 h6" to="/register">Sign Up </Link>
                                        <span class="ms-1">|</span>
                                        <Link class="text-center ms-3 h6" to="/password-reset">Forget Password</Link>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LoginPage;