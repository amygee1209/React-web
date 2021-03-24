import React, {useState} from 'react';

export default function Login({isLogin}) {
  const [isLoggedIn, setLoggedIn] = useState(isLogin)
  const logInOut = isLoggedIn ? "in" : "out";
  const buttonText = isLoggedIn ? "OUT" : "IN";

    
  const handleLogInOut = React.useCallback(() => {
    setLoggedIn(isLoggedIn => !isLoggedIn);
  }, []);

  return (
    <div>
      <h4>
        You are  currently logged {logInOut} 
      </h4>
      <button onClick={handleLogInOut}>LOG {buttonText}</button>
    </div>
  )
}