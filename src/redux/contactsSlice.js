import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
  },
};

const slice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items.filter((item) => item.id !== action.payload);
    },
  },
  selectors: {
    selectContacts: (state) => state.contacts.items,
  },
});

export const contactReducer = slice.reducer;
export const {addContact, deleteContact} = slice.actions;
export const {selectContacts} = slice.selectors;
