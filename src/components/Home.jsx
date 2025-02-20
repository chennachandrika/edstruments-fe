import { useAuth } from "../context/AuthContext";
import FormTabs from "./InvoiceFormTabsSection/FormTabs";

import Header from "./common/Header";
import InvoiceSection from "./InvoiceFileSection/InvoiceSection";
import { useInvoice } from "../context/InvoiceContext";

const Home = () => {
  const { logout } = useAuth();
  const { formik, isFormSubmitted } = useInvoice();

  return (
    <div className="relative flex flex-col h-screen w-full">
      <Header onLogout={logout} />

      <form
        className=" flex flex-col md:flex-row p-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 bg-[#f5f7f9] h-full w-full overflow-hidden"
        onSubmit={(event) => {
          event.preventDefault();
          formik.handleSubmit();
        }}
      >
        <InvoiceSection />
        <div className="w-full md:w-1/2 mt-20 flex flex-col-reverse">
          {!isFormSubmitted && (
            <div className="w-full flex justify-end bg-white space-x-2 rounded mb-4 z-10 text-xs md:text-sm px-4">
              <button
                type="button"
                className="bg-transparent hover:bg-gray-100 text-gray-500 border py-2 px-4 rounded-lg my-4 w-auto md:w-54 cursor-pointer"
              >
                Save as Draft
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white border py-2 px-4 rounded-lg my-4 w-auto md:w-54 cursor-pointer"
              >
                Submit & New
              </button>
            </div>
          )}
          <FormTabs />
        </div>
      </form>
    </div>
  );
};

export default Home;
