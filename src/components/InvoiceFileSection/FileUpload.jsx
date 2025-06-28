import { useDropzone } from "react-dropzone";
import { useCallback, useRef, useState } from "react";

import uploadFileImage from "../../assets/uploadFileImage.webp";
import { useInvoice } from "../../context/InvoiceContext";
import HandleFileUpload from "./HandleFileUpload";

const FileUpload = () => {
  const { formValues, handleFormValues, formik } = useInvoice();
  const currentFile = formValues?.file ? formValues?.file : null;
  const [preview, setPreview] = useState(currentFile);
  const fileInputRef = useRef(null);

  const handleButtonClick = (event) => {
    event.stopPropagation();
    fileInputRef.current?.click(); // Trigger file input click
  };

  // Function to handle file selection (both drop and manual)
  const handleFile = useCallback(
    (file) => {
      if (!file) return;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64File = reader.result; // Base64 encoded file
        const fileData = {
          name: file.name, // Store file name
          base64: base64File, // Store Base64 content
        };
        handleFormValues({ file: JSON.stringify(fileData) });
        setPreview(fileData); // Set preview for display
        formik.setFieldValue("file", fileData);
      };
    },
    [formik, handleFormValues]
  );

  // Handle file drop
  const onDrop = useCallback(
    (acceptedFiles) => {
      handleFile(acceptedFiles[0]);
    },
    [handleFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "application/pdf",
    multiple: true,
    noClick: true,
    noKeyboard: true,
  });

  return (
    <div
      {...getRootProps()}
      className={`w-auto h-full bg-white p-4 flex flex-col m-4 items-center justify-center rounded-lg border-2 border-dashed border-gray-500 text-center ${
        isDragActive ? "border-blue-500 bg-blue-100" : "border-gray-400"
      }`}
    >
      {preview && !formik.errors.file ? (
        <>
          <p className="text-xs md:text-base leading-6">
            {preview.name} <br />
            <span className="font-medium text-blue-500">
              {" "}
              File uploaded successfully.
            </span>
          </p>
        </>
      ) : (
        <>
          <input
            {...getInputProps()}
            ref={fileInputRef}
            type="file"
            name="file"
            accept="application/pdf"
            onChange={(event) => {
              if (event.target.files?.length) {
                handleFile(event.target.files[0]);
              }
            }}
            className="hidden"
          />
          <h2 className="text-base font-medium md:text-xl m-1">
            Upload Your Invoice
          </h2>
          <p className="text-xs md:text-base mb-4">
            To auto populate fields and save time
          </p>
          <img
            src={uploadFileImage}
            className="h-0 w-0 md:w-42 md:h-42 self-center"
          />
        </>
      )}
      <HandleFileUpload
        preview={preview}
        formik={formik}
        handleButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default FileUpload;
