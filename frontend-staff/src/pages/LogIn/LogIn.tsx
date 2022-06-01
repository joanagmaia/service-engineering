import { useCallback, useState } from "react";
import Button, {
  ButtonColor,
  ButtonShape,
  ButtonSize,
} from "../../components/Button";
import { usePostLogin } from "../../hooks";
import "./logIn.css";
import { useNavigate } from "react-router-dom";
import { AuthResponse } from "../../typings/auth";
import { toast } from "react-toastify";

const LogIn = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { postLogin, isLoading } = usePostLogin();
  const navigate = useNavigate();

  const isFormValid = !!username && !!password;

  const handleOnSubmit = useCallback(() => {
    if (isFormValid) {
      postLogin({
        username,
        password,
      })
        .then((response: AuthResponse) => {
          const { token, username } = response;
          if (token) {
            localStorage.setItem("token", token);
          }

          if (username) {
            localStorage.setItem("username", username);
          }
          navigate("/orders");
        })
        .catch(() => {
          toast("Something went wrong", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            type: "error",
            theme: "colored",
          });
        });
    }
  }, [isFormValid, navigate, password, postLogin, username]);

  return (
    <div className="page signIn">
      <div className="form">
        <div>
          <h3 className="heading">Group 12</h3>
          <p className="description">
            Kitchen Staff log in to access the orders' list of Group 12's
            restaurant
          </p>
        </div>
        <div className="formInputs">
          <input
            className="inputUsername"
            type="text"
            id="username"
            name="username"
            placeholder="Insert your username (required)"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="inputPassword"
            type="password"
            id="password"
            name="password"
            placeholder="Insert your password (required)"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          disabled={!isFormValid}
          text="Log In"
          isLoading={isLoading}
          onClick={handleOnSubmit}
          shape={ButtonShape.FullWidth}
          btnColor={ButtonColor.DarkBlue}
          btnSize={ButtonSize.Medium}
        />
      </div>
    </div>
  );
};

export default LogIn;
