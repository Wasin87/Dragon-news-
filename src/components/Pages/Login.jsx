import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";  // ✅ SweetAlert2 import

const Login = () => {

  const [error, setError] = useState("");

  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        console.log("Login successful:", result.user);

        // ✅ MySwal alert
        Swal.fire({
          icon: 'success',
          title: 'Login Successfully',
          showConfirmButton: false,
          timer: 1500
        });

        form.reset();
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mb-5">
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <h1 className="text-2xl m-auto font-bold">Login your account</h1>

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input rounded-xl"
              placeholder="Email"
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input rounded-xl"
              placeholder="Password"
              required
            />

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {error && <p className="text-red-500 text-xs">{error}</p>}

            <button
              type="submit"
              className="btn btn-neutral mt-4 rounded-3xl"
            >
              Login
            </button>
            <p className="font-semibold m-auto pt-5">
              Don't Have An Account?{" "}
              <Link className="text-blue-600" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
