import { useFormik } from "formik";
import * as Yup from "yup";
import { createContext, useState, useContext, useEffect } from "react";

// Create a context for authentication
const InvoiceContext = createContext();

// Provide AuthContext to components
export const useInvoice = () => {
  return useContext(InvoiceContext);
};

export const InvoiceProvider = ({ children }) => {
  const [formValues, setFormValues] = useState(
    JSON.parse(localStorage.getItem("invoiceDetails")) || {}
  );
  const [isFormSubmitted, setIsFormSubmitted] = useState(
    localStorage.getItem("isFormSubmitted") || false
  );
  const currentFile = formValues?.file ? formValues?.file : null;
  const getValue = (key) => (formValues[key] ? formValues[key] : "");

  const formik = useFormik({
    initialValues: {
      file: currentFile,
      vendor: getValue("vendor"),
      poNum: getValue("poNum"),
      paymentTerms: getValue("paymentTerms"),
      invoiceDes: getValue("invoiceDes"),
      invoiceNumber: getValue("invoiceNumber"),
      department: getValue("department"),
      account: getValue("account"),
      location: getValue("location"),
      des: getValue("des"),
      comment: getValue("comment"),
      lineAmount: getValue("lineAmount"),
      invoiceDate: getValue("invoiceDate"),
      invoiceDueDate: getValue("invoiceDueDate"),
      glPostDate: getValue("glPostDate"),
      totalAmount: getValue("totalAmount"),
    },
    validationSchema: Yup.object({
      file: Yup.mixed()

        .test("fileType", "Only PDF allowed", (value) => {
          if (!value) return false;

          // If it's a File object, check its type
          if (value instanceof File) {
            return value.type === "application/pdf";
          }

          // If it's a Base64 string, extract MIME type
          if (typeof value.base64 === "string") {
            // Base64 pattern: data:[mime-type];base64,[data]
            const match = value.base64.match(/^data:(.*);base64,/);
            if (match && match[1]) {
              return match[1] === "application/pdf"; // Check if it's a PDF
            }
          }

          return false;
        })
        .required("A file is required"),
      vendor: Yup.string().required("Vendor name is required"),
      poNum: Yup.string().required("PO Number is required"),
      paymentTerms: Yup.string().required("Payment Term is required"),
      invoiceDes: Yup.string().required("Invoice Description is required"),
      invoiceNumber: Yup.string().required("Invoice Number is required"),
      department: Yup.string().required("Department is required"),
      account: Yup.string().required("Account is required"),
      location: Yup.string().required("Location is required"),
      des: Yup.string().required("Description is required"),
      invoiceDate: Yup.string().required("Invoice Date is required"),
      invoiceDueDate: Yup.string().required("Invoice Due Date is required"),
      glPostDate: Yup.string().required("GL Post Date is required"),
      lineAmount: Yup.string().required("Line Amount is required"),
      totalAmount: Yup.string().required("Total Amount is required"),
    }),
    onSubmit: () => {
      setIsFormSubmitted(true);
      localStorage.setItem("isFormSubmitted", true);
    },
  });

  const handleFormValues = (keyValues) => {
    const updatedValues = { ...formValues, ...keyValues };
    localStorage.setItem("invoiceDetails", JSON.stringify(updatedValues));
    setFormValues(updatedValues);
  };

  useEffect(() => {
    handleFormValues(formik.values);
  }, [formik.values]);

  return (
    <InvoiceContext.Provider
      value={{
        formValues,
        handleFormValues,
        formik,
        isFormSubmitted,
        setIsFormSubmitted,
        setFormValues,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};
