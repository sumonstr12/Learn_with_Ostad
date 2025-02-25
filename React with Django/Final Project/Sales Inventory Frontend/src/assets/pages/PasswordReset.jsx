import React from 'react'
import myaxios from '../utility/myaxios'
import { useNavigate } from 'react-router'

const PasswordReset = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data);

        myaxios.post(
            "/send-otp",
            data
        )
        .then(response => {
            if(response.data.status === "success"){
                console.log(response.data);
                
                localStorage.setItem('email', data.email);
                navigate('/reset-password');
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
                            <h4>EMAIL ADDRESS</h4>
                            <br/>
                            <form onSubmit={handleSubmit}>
                                <label>Your email address</label>
                                <input id="email" placeholder="User Email" className="form-control" type="email" name='email' />
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

export default PasswordReset