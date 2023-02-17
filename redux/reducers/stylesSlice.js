import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bg: "bg-bg",
  screen: {
    bg: "bg-color3",
    textColor: "text-white",
  },
  keyPad: {
    bg: "bg-color2",
    commonKey: {
      bg: "bg-color9",
      colorKey: "bg-color8",
      textColor: "text-color10",
    },
    deleteKey: {
      bg: "bg-color5",
      colorKey: "bg-color4",
      textColor: "text-white",
    },
    resetKey: {
      bg: "bg-color5",
      colorKey: "bg-color4",
      textColor: "text-white",
    },
    equalKey: {
      bg: "bg-color7",
      colorKey: "bg-color6",
      textColor: "text-white",
    },
  },
};

export const stylesSlice = createSlice({
  name: "styles",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },

    dark: (state) => {
      state = {
        bg: "bg-bg",
        screen: {
          bg: "bg-color3",
          textColor: "text-white",
        },
        keyPad: {
          bg: "bg-color2",
          commonKey: {
            bg: "bg-color9",
            colorKey: "bg-color8",
            textColor: "text-color10",
          },
          deleteKey: {
            bg: "bg-color5",
            colorKey: "bg-color4",
            textColor: "text-white",
          },
          resetKey: {
            bg: "bg-color5",
            colorKey: "bg-color4",
            textColor: "text-white",
          },
          equalKey: {
            bg: "bg-color7",
            colorKey: "bg-color6",
            textColor: "text-white",
          },
        },
      };
    },
    light: (state) => {
      state.value = {
        bg: "bg-red-500",
        screen: {
          bg: "bg-color3",
          textColor: "text-white",
        },
        keyPad: {
          bg: "bg-color2",
          commonKey: {
            bg: "bg-color9",
            colorKey: "bg-color8",
            textColor: "text-color10",
          },
          deleteKey: {
            bg: "bg-color5",
            colorKey: "bg-color4",
            textColor: "text-white",
          },
          resetKey: {
            bg: "bg-color5",
            colorKey: "bg-color4",
            textColor: "text-white",
          },
          equalKey: {
            bg: "bg-color7",
            colorKey: "bg-color6",
            textColor: "text-white",
          },
        },
      };
    },
    purple: (state) => {},
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { dark, light } = stylesSlice.actions;

export default stylesSlice.reducer;
