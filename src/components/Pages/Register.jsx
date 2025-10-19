import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";  // ✅ SweetAlert2 import

const Register = () => {
  const [nameError, setNameError] = useState("");
  const [photoError, setPhotoError] = useState("");
  const { createUser, setUser, updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const photoURL = form.photo.value.trim();
    const email = form.email.value;
    const password = form.password.value;

    // ✅ Name validation
    if (name.length < 5) {
      setNameError("Name should be at least 5 characters long.");
      return;
    } else {
      setNameError("");
    }

    // ✅ Photo URL validation
    const urlPattern = /^(https?:\/\/[^\s$.?#].[^\s]*)$/;
    if (!urlPattern.test(photoURL)) {
      setPhotoError("Please enter a valid photo URL (must start with http or https).");
      return;
    } else {
      setPhotoError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log("User registered:", user);

        // ✅ SweetAlert2
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          showConfirmButton: false,
          timer: 1500
        });

        form.reset();

        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message
        });
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mb-5">
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <h1 className="text-2xl m-auto font-bold mb-3">
              Register your account
            </h1>
            <hr />

            {/* Name Field */}
            <label className="label mt-3">Your Name</label>
            <input
              type="text"
              name="name"
              className="input rounded-xl"
              placeholder="Enter your name"
              required
            />
            {nameError && (
              <p className="text-xs text-error mt-1">{nameError}</p>
            )}

            {/* Photo URL Field */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input rounded-xl"
              placeholder="Enter photo URL"
              required
            />
            {photoError && (
              <p className="text-xs text-error mt-1">{photoError}</p>
            )}

            {/* Email Field */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input rounded-xl"
              placeholder="Email"
              required
            />

            {/* Password Field */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input rounded-xl"
              placeholder="Password"
              required
            />

            <div className="flex gap-2">
              <input type="checkbox" name="term" id="term" required />
              <label htmlFor="term">Accept Terms & Conditions</label>
            </div>

            <button
              type="submit"
              className="btn btn-neutral mt-4 rounded-3xl"
            >
              Register
            </button>

            <p className="font-semibold m-auto pt-5">
              Already Have An Account?{" "}
              <Link className="text-blue-600" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
