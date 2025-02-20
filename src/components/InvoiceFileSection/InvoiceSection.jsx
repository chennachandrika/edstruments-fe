import LeftArrowIcon from "../../assets/arrow.svg?react";
import { useInvoice } from "../../context/InvoiceContext";
import FilePreview from "./FilePreview";
import FileUpload from "./FileUpload";
const InvoiceSection = () => {
  const { isFormSubmitted } = useInvoice();
  return (
    <div className="w-full md:w-1/2 h-[28vh] md:h-[85vh]">
      <div className="sticky top-0 bg-white p-4 md:p-6 flex gap-4 border-b-2 border-transparent">
        <LeftArrowIcon className="cursor-pointer w-4 h-4 md:w-6 md:h-6" />{" "}
        <h1 className="font-medium text-xs md:text-base">
          {!isFormSubmitted ? "Create New Invoice" : "Submitted Invoice"}
        </h1>
      </div>
      <div className="w-full h-[25vh] md:h-[73vh] mt-4 ">
        {isFormSubmitted ? <FilePreview /> : <FileUpload />}
      </div>
    </div>
  );
};

export default InvoiceSection;
