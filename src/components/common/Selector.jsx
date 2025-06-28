import { useInvoice } from "../../context/context";

const Selector = ({ labelName, name, options }) => {
  const { formik, isFormSubmitted } = useInvoice();
  const { handleBlur, handleChange } = formik;
  const currentValue = formik.values[name];
  return (
    <div className="text-xs md:text-sm mt-4 mr-2">
      <label htmlFor={name} className="text-gray-500">
        {labelName}
        <span className="text-red-500 ml-1">*</span>
      </label>
      {isFormSubmitted ? (
        <p>{currentValue}</p>
      ) : (
        <select
          name={name}
          value={currentValue}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ display: "block" }}
          className="my-2 w-full border rounded-lg outline-none border-gray-500 text-gray-500 px-4 py-2 bg-white"
        >
          <option value="">Select {labelName}</option>

          {/* Map through options and create options for select */}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      )}

      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-500 text-xs md:text-sm">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
};

export default Selector;
