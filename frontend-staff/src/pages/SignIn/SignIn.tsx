import { useCallback, useState } from "react";
import Button, {
  ButtonColor,
  ButtonShape,
  ButtonSize,
} from "../../components/Button";
import { usePostAuth } from "../../hooks";
import "./signIn.css";

const SignIn = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { postAuth } = usePostAuth();

  const isFormValid = !!username && !!password;

  const handleOnSubmit = useCallback(() => {
    if (isFormValid) {
      postAuth({
        username,
        password,
      }).then(() => {
        // TBD: Move to new route
        // Add response token to local storage
      });
    }
  }, [isFormValid, password, postAuth, username]);

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
