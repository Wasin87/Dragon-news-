import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import profile from "../assets/profile.png";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";  // ✅ SweetAlert2 import

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // ✅ SweetAlert2 for logout success
        Swal.fire({
          icon: 'success',
          title: 'Logged out successfully!',
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Logout Failed',
          text: error.message
        });
      });
  };

  return (
    <div className="flex justify-between items-center p-4">

      <div className="font-semibold text-lg flex gap-2 items-center text-gray-700">
        <img
          className="w-[45px] h-[45px] rounded-full"
          src={`${user ? user.photoURL : profile}`}
          alt="Profile"
        />
        {user ? ` ${user.email}` : "Not logged in"}
      </div>

      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>

      <div className="login-btn flex gap-5 items-center">
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-primary text-white px-6 bg-secondary"
          >
            Log Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
