import VendorIcon from "../../assets/vendor.svg?react";
import { testVendorOptions } from "../../constants";
import FormSubTitle from "../common/FormSubTitle";
import Selector from "../common/Selector";
const VendorDetailsForm = () => {
  return (
    <div className="w-full">
      <FormSubTitle Icon={VendorIcon} title={"Vendor Details"} />
      <div className="w-full mb-6">
        <h1 className="font-medium text-sm md:text-base">Vendor Information</h1>
        <Selector
          labelName={"Vendor"}
          name="vendor"
          options={testVendorOptions}
        />
      </div>
    </div>
  );
};

export default VendorDetailsForm;
