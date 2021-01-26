import { useHistory } from "react-router-dom";

function Logout() {
  let history = useHistory();

  function handleLogOut() {
    sessionStorage.setItem("userToken", '');
    sessionStorage.clear();
    history.push("/Landing"); // this is the route page we want to end up on
  }

  return (
    <href type="link" onClick={handleLogOut}>Go home</href>
  );
}

export default Logout;