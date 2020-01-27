import React, {useState} from "react";
import { axiosWithAuth } from "../utils/AxiosWithAuth";

const Login = (props) => {
    const [credentials, setCredentials] = useState({})
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
    const handleChange = e => {
      setCredentials({
        ...credentials,
        [e.target.name] : e.target.value
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      axiosWithAuth().post(`/login`, credentials)
          .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            props.history.push(`/bubblesPage`)
          })
          .catch(err => {
            console.log('OH NOO!!:', err.message)
          })
    }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <h2>LOGIN</h2>
      <form onSubmit = {handleSubmit}>
        <input
          type = 'text'
          placeholder = 'Username'
          name = 'username'
          value = {credentials.username}
          onChange = {handleChange}
         />
        <input
          type = 'password'
          placeholder = 'Password'
          name = 'password'
          value = {credentials.password}
          onChange = {handleChange}
         />
         <button>Login</button>
      </form>
    </>
  );
};

export default Login;
