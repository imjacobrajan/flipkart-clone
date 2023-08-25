import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./LoginModal.css";
import supabase from "../../supabase";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/userSlice";

const LoginModal = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginType, setLoginType] = useState(true);

  const dispatch = useDispatch();

  const signup = async () => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (data.user) {
      alert("Account Created");
    }
  };
  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert(error?.message);
      return;
    }
    dispatch(setUser(data.user));
  };

  return isOpen ? (
    <div className="overlay">
      <div className="loginmodal">
        <div className="left">
          <div className="left-container">
            <p className="login-title">Login</p>
            <p className="login-des">
              Get access to your orders, whishlist and Recommendations
            </p>
          </div>
        </div>
        <div className="right">
          <input
            type="email"
            className="login-input"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="termsandcon">
            By continuing, you agree to Flipkart's{" "}
            <span style={{ color: "#2874f0" }}>Terms of Use</span> and{" "}
            <span style={{ color: "#2874f0" }}>Privacy Policy.</span>
          </p>
          {loginType ? (
            <button className="login-btn" onClick={() => login()}>
              Login
            </button>
          ) : (
            <button className="login-btn" onClick={() => signup()}>
              Signup
            </button>
          )}

          {loginType ? (
            <p className="login-signup" onClick={() => setLoginType(false)}>
              New to Flipkart? Create an account
            </p>
          ) : (
            <p className="login-signup" onClick={() => setLoginType(true)}>
              Already an user? Login to an account
            </p>
          )}
        </div>
        <div className="close" onClick={() => setIsOpen(false)}>
          <RxCross2 />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default LoginModal;
