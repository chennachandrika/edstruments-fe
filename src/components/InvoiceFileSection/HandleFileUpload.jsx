import UploadIcon from "../../assets/upload.svg?react";
const HandleFileUpload = ({ preview, formik, handleButtonClick }) => (
  <div className="text-sm text-gray-600">
    {!preview && (
      <div className="w-full flex justify-center">
        <button
          type="button"
          onClick={handleButtonClick}
          className="border bg-transparent rounded px-4 py-2 flex items-center text-xs md:text-sm cursor-pointer"
        >
          Upload File <UploadIcon className="w-4 h-4 md:w-6 md:h-6 ml-1" />
        </button>
      </div>
    )}
    {!preview ? (
      <p className="text-xs md:text-sm m-2">
        <span className="text-blue-500">
          Click to {`${preview ? "re-upload" : "upload"}`}{" "}
        </span>
        or Drag and drop
      </p>
    ) : (
      <p className="text-xs md:text-sm m-2"> Drag and drop for re-upload</p>
    )}

    {formik.errors.file && (
      <div className="text-red-500 text-xs md:text-sm">
        {formik.errors.file}
      </div>
    )}
  </div>
);

export default HandleFileUpload;
