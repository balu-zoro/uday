import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Button from "../components/Button";

const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800">Welcome to the Dashboard!</h2>
      <p className="text-gray-600 text-center mt-2">Manage your IELTS speaking test registrations and feedback.</p>

      {/* Example of Test Details */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700">Upcoming Tests</h3>
        <ul className="mt-2 border rounded-lg p-4 bg-gray-50">
          <li className="flex justify-between items-center py-2 border-b">
            <span>Test ID: 12345</span>
            <Button variant="primary" size="small" onClick={() => navigate("/test/12345")}>
              View Details
            </Button>
          </li>
          <li className="flex justify-between items-center py-2">
            <span>Test ID: 67890</span>
            <Button variant="primary" size="small" onClick={() => navigate("/test/67890")}>
              View Details
            </Button>
          </li>
        </ul>
      </div>

      {/* Logout Button */}
      <div className="mt-6 flex justify-center">
        <Button variant="secondary" size="large" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
