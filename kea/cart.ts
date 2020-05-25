import { kea } from "kea";

export const cartLogic = kea({
  actions: () => ({
    add: (item) => ({ item }),
    remove: (id) => ({ id }),
    increase_qtt: (id) => ({ id }),
    decrease_qtt: (id) => ({ id }),
    reset: () => {},
  }),

  path: () => ["scenes"],

  reducers: ({ actions }) => {
    return {
      cart: [
        {},
        { persist: true },
        {
          [actions.reset]: () => {
            return {};
          },
          [actions.add]: (state, payload) => {
            if (state[payload.item.id]) {
              state[payload.item.id].qtt += payload.item.qtt;
              return { ...state };
            }
            return { ...state, [payload.item.id]: payload.item };
          },
          [actions.remove]: (state, payload) => {
            if (state[payload.id]) delete state[payload.id];
            return { ...state };
          },
          [actions.increase_qtt]: (state, payload) => {
            const { id } = payload;
            if (state[id].qtt >= 10) return state;
            const qtt = (state[id].qtt += 1);
            state[id].qtt = qtt;
            return { ...state };
          },
          [actions.decrease_qtt]: (state, payload) => {
            const { id } = payload;
            if (state[id].qtt <= 1) return state;
            const qtt = (state[id].qtt -= 1);
            state[id].qtt = qtt;
            return { ...state };
          },
        },
      ],
    };
  },
});
