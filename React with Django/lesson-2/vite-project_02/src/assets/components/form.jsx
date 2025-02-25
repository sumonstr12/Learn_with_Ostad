import React from 'react'

const Form = () => {

    // form submit handler
    // e (event) dile page reload hobe na
    const submitHandler = (e) => {
        e.preventDefauld();

        // 2nd Way
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data);


        // form data get korar jonno mane form er input field er value gula get korar jonno
        // 1st Way
        // const name = e.target.name.value;
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(name);
    }

  return (
    <div>
        <h1>Html Form</h1>
        <form onSubmit={submitHandler}>   {/* html er for change kore jsx er htmlFor use korte hobe */}
            <label htmlFor="name">Name : </label>
            <input type="text" id="name" name="name" /><br />

            <label htmlFor="email">Email : </label>
            <input type="email" id="email" name="email" /><br />

            {/* <label htmlFor="password">Password : </label>
            <input type="password" id="password" name="password" /><br /> */}

            <button type="submit">Submit</button><br /><br /><br />
        </form>
    </div>
  );
};

export default Form;