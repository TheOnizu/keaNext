import { kea } from "kea";
import { fire } from "../db";

type pageInput = { page: string; bg: string; result: Object };
type doc = { data: Function; id: string };

export const dataLogic = kea({
  actions: () => ({
    setTitle: (page: pageInput) => ({ page }),
    setCategory: (page: pageInput) => ({
      page,
    }),
    setFetchError: (message: string): { message: string } => ({ message }),
  }),
  path: () => ["scenes", "categories"], // NEEDED!
  reducers: ({ actions }) => ({
    page: [
      {},
      {
        [actions.setTitle]: (_: any, payload: { page: pageInput }) =>
          payload.page,
      },
    ],
    categories: [
      {},
      { persist: true },
      {
        [actions.setCategory]: (state: any, payload: { page: pageInput }) => {
          const {
            page: { bg, page, result },
          } = payload;

          return {
            ...state,
            [page]: {
              pages: result,
              bg: bg,
            },
          };
        },
      },
    ],
    isLoading: [
      false,
      {
        [actions.setTitle]: () => true,
        [actions.setCategory]: () => false,
      },
    ],
  }),
  listeners: ({ actions, values }) => {
    return {
      [actions.setTitle]: async ({ page }, breakpoint: Function) => {
        const { all, bestSold } = fire.products;
        await breakpoint(300); // debounce for 300ms
        if (page === "home") {
          let data: any;
          const getFireData = (docs: any) =>
            docs.map((d: doc) => ({
              ...d.data(),
              id: d.id,
            }));
          await Promise.all([all, bestSold])
            .then((values) => values)
            .then((value) => {
              const _data = value.map((val) => getFireData(val.docs));
              data = _data;
            });
          actions.setCategory({
            page,
            bg: "#fffffff",
            result: { list: data[0], bestSold: data[0] },
          }); // <-- new

          return;
        }
      },
    };
  },
  selectors: ({ selectors }) => {
    return {
      byCategory: [
        () => [selectors.categories],
        () => [selectors.isLoading],
        (categories) => categories,
      ],
    };
  },
});
