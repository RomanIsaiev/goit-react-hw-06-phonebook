const { createSlice } = require('@reduxjs/toolkit');

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    contactsFilter: '',
  },
  reducers: {
    contactsFilter(state, action) {
      state.contactsFilter = action.payload;
    },
  },
});

export const { contactsFilter } = filterSlice.actions;
