import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentWindow: 0,
  data: {
    payee: "",
    bankName: "",
    bankBranchName: "",
    bankCountry: "",
    bankAccountCurrency: "",
    sortCode: "",
    accountNumber: "",
    swiftOrBic: "",
    amount: 0,
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    companyName: "",
    companyId: "",
    street: "",
    city: "",
    state: "",
    postcode: "",
    country: "",
    notes: "",
  },
};

export const createInvoiceSlice = createSlice({
  name: "create-invoice",
  initialState,
  reducers: {
    setCurrentWindow: (state, action) => {
      state.currentWindow = action.payload;
    },
    setPayee: (state, action) => {
      state.data.payee = action.payload;
    },
    setBankName: (state, action) => {
      state.data.bankName = action.payload;
    },
    setBankBranchName: (state, action) => {
      state.data.bankBranchName = action.payload;
    },
    setBankCountry: (state, action) => {
      state.data.bankCountry = action.payload;
    },
    setBankAccountCurrency: (state, action) => {
      state.data.bankAccountCurrency = action.payload;
    },
    setSortCode: (state, action) => {
      state.data.sortCode = action.payload;
    },
    setAccountNumber: (state, action) => {
      state.data.accountNumber = action.payload;
    },
    setSwiftOrBic: (state, action) => {
      state.data.swiftOrBic = action.payload;
    },
    setContactName: (state, action) => {
      state.data.contactName = action.payload;
    },
    setContactPhone: (state, action) => {
      state.data.contactPhone = action.payload;
    },
    setContactEmail: (state, action) => {
      state.data.contactEmail = action.payload;
    },
    setCompanyName: (state, action) => {
      state.data.companyName = action.payload;
    },
    setCompanyId: (state, action) => {
      state.data.companyId = action.payload;
    },
    setStreet: (state, action) => {
      state.data.street = action.payload;
    },
    setCity: (state, action) => {
      state.data.city = action.payload;
    },
    setState: (state, action) => {
      state.data.state = action.payload;
    },
    setPostcode: (state, action) => {
      state.data.postcode = action.payload;
    },
    setCountry: (state, action) => {
      state.data.country = action.payload;
    },
    setNotes: (state, action) => {
      state.data.notes = action.payload;
    },
    setAmount: (state, action) => {
      state.data.amount = action.payload;
    },

    setClearForm: (state) => {
      state.data.payee = "";
      state.data.bankName = "";
      state.data.bankBranchName = "";
      state.data.bankCountry = "";
      state.data.bankAccountCurrency = "";
      state.data.sortCode = "";
      state.data.accountNumber = "";
      state.data.swiftOrBic = "";
      state.data.amount = 0;
      state.data.contactName = "";
      state.data.contactPhone = "";
      state.data.contactEmail = "";
      state.data.companyName = "";
      state.data.companyId = "";
      state.data.street = "";
      state.data.city = "";
      state.data.state = "";
      state.data.postcode = "";
      state.data.country = "";
      state.data.notes = "";
    },
  },
});

export const {
  setCurrentWindow,
  setPayee,
  setBankName,
  setBankBranchName,
  setBankCountry,
  setBankAccountCurrency,
  setSortCode,
  setAccountNumber,
  setSwiftOrBic,
  setContactName,
  setContactPhone,
  setContactEmail,
  setCompanyName,
  setCompanyId,
  setStreet,
  setCity,
  setState,
  setPostcode,
  setCountry,
  setNotes,
  setClearForm,
  setAmount,
} = createInvoiceSlice.actions;

export default createInvoiceSlice.reducer;
