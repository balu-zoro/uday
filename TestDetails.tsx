import { useParams } from "react-router-dom";

const TestDetails: React.FC = () => {
  const { id } = useParams();
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold">Test Details (ID: {id})</h2>
      <p>Test details go here...</p>
    </div>
  );
};

export default TestDetails;
