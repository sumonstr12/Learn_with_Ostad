
import myaxios from "../utility/myaxios";
import { Link } from "react-router";


const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    //console.log(data);

    myaxios.post(
      "/user-login", 
      data
    )
    .then(response => {
      if(response.data.status === "success"){
        console.log(response.data);
      }else{
        alert(response.data.message);
      }
        
    })
    .catch(err => {
      console.log(err);
    })

  }

  return (
    <div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 animated fadeIn col-lg-6 center-screen">
                    <div className="card w-90  p-4">
                        <div className="card-body">
                            <h4>SIGN IN</h4>
                            <br/>
                            <form onSubmit={handleSubmit}>
                              <input id="email" placeholder="User Email" className="form-control" type="email" name='email'/>
                              <br/>
                              <input id="password" placeholder="User Password" className="form-control" type="password" name='password'/>
                              <br/>
                              <button type='submit' className="btn w-100 bg-gradient-primary">Next</button>
                              <hr/>
                              <div className="float-end mt-3">
                                  <span>
                                      <a className="text-center ms-3 h6" href="userRegistration.html">Sign Up </a>
                                      <span className="ms-1">|</span>
                                      <Link className="text-center ms-3 h6" to="/forgetpassword">Forget Password</Link>
                                  </span>
                              </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login