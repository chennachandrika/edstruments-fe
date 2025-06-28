import { Document, Page } from "react-pdf";
import { useState } from "react";
import { useInvoice } from "../../context/context";
import { pdfjs } from "react-pdf";
import { ScrollArea } from "../common/ScrollArea";

// Set the worker source manually
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const FilePreview = () => {
  const { formValues } = useInvoice();
  const currentFile = formValues?.file ? formValues?.file : null;
  const [numPages, setNumPages] = useState();

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <ScrollArea className="h-full">
      <div className=" flex items-center justify-center overflow-auto">
        <Document
          file={currentFile?.base64}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.apply(null, Array(numPages))
            .map((page, index) => index + 1)
            .map((page) => (
              <Page
                key={page}
                pageNumber={page}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                scale={1}
              />
            ))}
        </Document>
      </div>
    </ScrollArea>
  );
};

export default FilePreview;
