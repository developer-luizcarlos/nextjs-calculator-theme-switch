import "./page.css";

// Components importation
import Calculator from "@/components/Calculator/Calculator";

const page: React.FC = () => {
  return (
    <div className="page">
      <Calculator />
    </div>
  );
};

export default page;
