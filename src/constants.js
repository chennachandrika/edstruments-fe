import CommentsForm from "./components/InvoiceFormTabsSection/CommentsForm";
import InVoiceDetaisForm from "./components/InvoiceFormTabsSection/InVoiceDetaisForm";
import VendorDetailsForm from "./components/InvoiceFormTabsSection/VendorDetailsForm";

export const testVendorOptions = [
  { name: "Vendor 1", value: "vendor1" },
  { name: "Vendor 2", value: "vendor2" },
];

export const testPONumberOptions = [
  { name: "PO 1", value: "po1" },
  { name: "PO 2", value: "po2" },
];

export const testInvoiceNumberOptions = [
  { name: "Invoice 1", value: "invoice1" },
  { name: "Invoice 2", value: "invoice2" },
];

export const testPaymentTermsOptions = [
  { name: "Payment Term 1", value: "paymentTerm1" },
  { name: "Payment Term 2", value: "paymentTerm2" },
];

export const testAccountOptions = [
  { name: "Account 1", value: "account1" },
  { name: "Account 2", value: "account2" },
];

export const testDepOptions = [
  { name: "Dep 1", value: "dep1" },
  { name: "Dep 2", value: "dep2" },
];

export const testLocationOptions = [
  { name: "Location 1", value: "location1" },
  { name: "Location 2", value: "location2" },
];

export const inVoiceTabDetails = [
  {
    tabValue: "venderDetails",
    tabTitle: "Vendor Details",
    tabContent: VendorDetailsForm,
  },
  {
    tabValue: "inVoiceTabDetails",
    tabTitle: "Invoice Details",
    tabContent: InVoiceDetaisForm,
  },
  {
    tabValue: "comments",
    tabTitle: "Comments",
    tabContent: CommentsForm,
  },
];
