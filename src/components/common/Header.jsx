import { NavLink } from "react-router-dom";
import { useInvoice } from "../../context/InvoiceContext";

const Header = ({ onLogout }) => {
  const { formik, setIsFormSubmitted, setFormValues } = useInvoice();

  return (
    <div className="sticky top-0 z-10 flex justify-between items-center w-full p-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 shadow bg-white">
      <NavLink to={"/"} className="font-bold text-base md:text-xl ">
        Edstruments
      </NavLink>
      <button
        type="button"
        onClick={() => {
          setFormValues({});
          formik.resetForm();
          formik.setValues({});
          formik.setErrors({});
          setIsFormSubmitted(false);
          onLogout();
        }}
        className="bg-transparent px-4 py-2 cursor-pointer text-sm md:text-base"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
