import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "./css/BackButton.css";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      <IoArrowBack className="back-icon" />
    </button>
  );
};

export default BackButton;
