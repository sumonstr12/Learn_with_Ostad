
import myaxios from "../utility/myaxios";

const PasswordResetOtp = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data);
        const email = localStorage.getItem('email');
        data.email = email;
        console.log(data.email);

        myaxios.post(
            "/verify-otp",
            data
        )
        .then(response => {
            if(response.data.status === "success"){
                console.log(response.data);
                localStorage.setItem('token', response.data.token);
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
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card animated fadeIn w-90  p-4">
                        <div className="card-body">
                            <h4>Submit OTP</h4>
                            <br/>
                            <form onSubmit={handleSubmit}>
                                <label>Your OTP</label>
                                <input id="otp" placeholder="User OTP" className="form-control" type="otp" name='otp' />
                                <br/>
                                <button type='submit'  className="btn w-100 float-end bg-gradient-primary">Next</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PasswordResetOtp