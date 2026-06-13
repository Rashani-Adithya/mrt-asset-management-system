import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      alert("Logout Successful");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
  
  <div>
    <h1>MRT Asset Management Dashboard</h1>

    <h3>User Email:</h3>
    <p>{currentUser?.email}</p>

    <button onClick={handleLogout}>Logout</button>

    <hr />

    <h2>Modules</h2>

   <button onClick={() => navigate("/categories")}>
  Categories
</button>
<hr />

    <button>Assets</button>
  </div>
);
}

export default Dashboard;