import { useCallback, useState } from "react";
import Button, {
  ButtonColor,
  ButtonShape,
  ButtonSize,
} from "../../components/Button";
import { usePostLogin } from "../../hooks";
import "./signIn.css";
import { useNavigate } from "react-router-dom";
import { AuthResponse } from "../../typings/auth";

const SignIn = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { postLogin } = usePostLogin();
  const navigate = useNavigate();

  const isFormValid = !!username && !!password;

  const handleOnSubmit = useCallback(() => {
    if (isFormValid) {
      postLogin({
        username,
        password,
      }).then((response: AuthResponse) => {
        localStorage.setItem("token", response.token);
        navigate("/orders");
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
          text="Sign In"
          onClick={handleOnSubmit}
          shape={ButtonShape.FullWidth}
          btnColor={ButtonColor.DarkBlue}
          btnSize={ButtonSize.Medium}
        />
      </div>
    </div>
  );
};

export default SignIn;
