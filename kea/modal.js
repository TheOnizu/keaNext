import { kea } from "kea";

export const modalLogic = kea({
  actions: () => ({
    open: (data) => ({ data }),
    close: function () {},
    superOpen: (data) => ({ data }),
    superClose: function () {},
  }),
  reducers: ({ actions }) => {
    return {
      superModal: [
        false,
        {
          [actions.superOpen]: () => true,
          [actions.superClose]: () => false,
        },
      ],
      modal: [
        false,
        {
          [actions.open]: () => true,
          [actions.close]: () => false,
        },
      ],
      currentData: [
        {},
        {
          [actions.open]: (_state, payload) => payload.data,
        },
      ],
    };
  },
});
