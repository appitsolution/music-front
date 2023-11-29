import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  influencerName: "",
  musicStyle: "",
  musicStyleOther: "",
  instagram: "",
  followersNumber: "",
  email: "",
  phone: "",
  price: "",
  username: "",
  password: "",
  repeatPassword: "",
  acceptAgree: false,
};

export const signupInfluencerSlice = createSlice({
  name: "signup-influencer",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setInfluencerName: (state, action) => {
      state.influencerName = action.payload;
    },
    setMusicStyle: (state, action) => {
      state.musicStyle = action.payload;
    },
    setMusicStyleOther: (state, action) => {
      state.musicStyleOther = action.payload;
    },
    setInstagram: (state, action) => {
      state.instagram = action.payload;
    },
    setFollowersNumber: (state, action) => {
      state.followersNumber = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setRepeatPassword: (state, action) => {
      state.repeatPassword = action.payload;
    },
    setAcceptAgree: (state, action) => {
      state.acceptAgree = action.payload;
    },
    setSignupClear: (state) => {
      state.firstName = "";
      state.influencerName = "";
      state.musicStyle = "";
      state.musicStyleOther = "";
      state.instagram = "";
      state.followersNumber = "";
      state.email = "";
      state.phone = "";
      state.price = "";
      state.username = "";
      state.password = "";
      state.repeatPassword = "";
      state.acceptAgree = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setFirstName,
  setInfluencerName,
  setMusicStyle,
  setMusicStyleOther,
  setInstagram,
  setFollowersNumber,
  setEmail,
  setPhone,
  setPrice,
  setUsername,
  setPassword,
  setRepeatPassword,
  setAcceptAgree,
  setSignupClear,
} = signupInfluencerSlice.actions;

export default signupInfluencerSlice.reducer;
