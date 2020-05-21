import { kea } from "kea";

export const modalLogic = kea({
  actions: () => ({
    open: (open, data) => ({ open, data }),
    close: (open) => ({ open }),
    superOpen: (open, data) => ({ open, data }),
    superClose: (open) => ({ open }),
  }),
  reducers: ({ actions }) => {
    return {
      superModal: [
        false,
        {
          [actions.superOpen]: (state, payload) => true,
          [actions.superClose]: (state, payload) => false,
        },
      ],
      modal: [
        false,
        {
          [actions.open]: (state, payload) => payload.open,
          [actions.close]: (state, payload) => payload.open,
        },
      ],
      currentData: [
        {},
        {
          [actions.open]: (state, payload) => payload.data,
          // [actions.close]: (state, payload) => payload.open,
        },
      ],
    };
  },
});
