import InvoiceIcon from "../../assets/invoice.svg?react";
import {
  testAccountOptions,
  testDepOptions,
  testInvoiceNumberOptions,
  testLocationOptions,
  testPaymentTermsOptions,
  testPONumberOptions,
} from "../../constants";
import FormSubTitle from "../common/FormSubTitle";
import Selector from "../common/Selector";
import TextInput from "../common/TextInput";

const InVoiceDetaisForm = () => {
  return (
    <div className="w-full">
      <FormSubTitle Icon={InvoiceIcon} title={"Invoice Details"} />
      <div className="w-full mb-6">
        <h1 className="font-medium text-sm md:text-base">
          General Information
        </h1>
        <Selector
          labelName={"Purchase Order Number"}
          name="poNum"
          options={testPONumberOptions}
        />
      </div>
      <div className="w-full mb-6">
        <h1 className="font-medium text-sm md:text-base">Invoice Details</h1>
        <div className="grid grid-cols-2">
          <Selector
            labelName={"Invoice Number"}
            name="invoiceNumber"
            options={testInvoiceNumberOptions}
          />
          <TextInput
            labelName={"Invoice Date"}
            name="invoiceDate"
            inputType="date"
          />
          <TextInput
            labelName={"Total Amount"}
            name="totalAmount"
            inputType="number"
          />
          <Selector
            labelName={"Payment Terms"}
            name="paymentTerms"
            options={testPaymentTermsOptions}
          />
          <TextInput
            labelName={"Invoice Due Date"}
            name="invoiceDueDate"
            inputType="date"
          />
          <TextInput
            labelName={"GL Post Date"}
            name="glPostDate"
            inputType="date"
          />
        </div>
        <TextInput labelName={"Invoice Description"} name="invoiceDes" />
      </div>
      <div className="w-full mb-6">
        <h1 className="font-medium text-sm md:text-base">Expense Details</h1>
        <div className="grid grid-cols-2">
          <TextInput
            labelName={"Line Amount"}
            name="lineAmount"
            inputType="number"
          />
          <Selector
            labelName={"Department"}
            name="department"
            options={testDepOptions}
          />{" "}
          <Selector
            labelName={"Account"}
            name="account"
            options={testAccountOptions}
          />{" "}
          <Selector
            labelName={"Location"}
            name="location"
            options={testLocationOptions}
          />
        </div>
        <TextInput labelName={"Description"} name="des" />
      </div>
    </div>
  );
};

export default InVoiceDetaisForm;
