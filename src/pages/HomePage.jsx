import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/home/Header"
import UserContext from "../store/context/UserContext";

function HomePage() {
  const form = useRef();

  const {user, setUser} = useContext(UserContext);

   const [formInput, setFormInput] = useState({
     password: "",
     email: "",
   });

   const navigate = useNavigate()
   
  const handleChange = (e) => {
    setFormInput((formInput) => {
      return {
        ...formInput,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form.current);
    // navigate('/about');
  };

  return (
    <div>
      HomePage
      <div className="container mt-5">
        <form ref={form} onSubmit={handleSubmit} className="row g-3">
          <div className="col-12">
            <label htmlFor="staticEmail2" className="visually-hidden">
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="form-control"
              required
              id="staticEmail2"
              name="email"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword2" className="visually-hidden">
              Password
            </label>
            <input
              type="password"
              onChange={handleChange}
              required
              className="form-control"
              id="inputPassword2"
              placeholder="Password"
              name="password"
            />
          </div>
          <div className="col-auto">
            <button type="submit" onClick={()=>setUser({ ...user, name:'Boluwatife'})} className="btn btn-primary mb-3">
              Confirm identity {user.name}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HomePage