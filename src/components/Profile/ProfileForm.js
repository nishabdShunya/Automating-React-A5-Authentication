import { useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";

import "./ProfileForm.css";

const ProfileForm = () => {
  const authCtx = useContext(AuthContext);
  const newPasswordInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD2nwrxqrAkGKsB95GMuU-qOPTtz8FqZCE",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: authCtx.token,
            password: newPasswordInputRef.current.value,
            returnSecureToken: false,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="control">
        <label htmlFor="new-password">New Password</label>
        <input ref={newPasswordInputRef} type="password" id="new-password" />
      </div>
      <div className="action">
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
