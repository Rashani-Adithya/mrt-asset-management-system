import useAuth from "../hooks/useAuth";

function Dashboard() {
  const { currentUser, logout } = useAuth();

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

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;