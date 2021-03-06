import { kea } from "kea";
import { fire } from "../db";
import { categoryObject } from "../config/categories";

type pageInput = { page: string; bg: string; result: Object };
type doc = { data: Function; id: string };

export const dataLogic = kea({
  actions: () => ({
    setTitle: (page: pageInput) => ({ page }),
    setCategory: (page: pageInput) => ({
      page,
    }),
    setFetchError: (message: string): { message: string } => ({ message }),
    setisLoading: (loading: boolean): { loading: boolean } => ({ loading }),
  }),
  path: () => ["scenes"], // NEEDED!
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
          console.log(payload);

          return {
            [page]: {
              data: result,
              bg,
            },
            ...state,
          };
        },
      },
    ],
    isLoading: [
      false,
      {
        [actions.setisLoading]: (
          _state: Object,
          payload: { loading: boolean }
        ) => payload.loading,
        [actions.setTitle]: () => true,
        [actions.setCategory]: () => false,
      },
    ],
  }),
  listeners: ({ actions, store }) => {
    return {
      [actions.setTitle]: async ({ page }, breakpoint: Function) => {
        const {
          scenes: { categories },
        } = store.getState();
        console.log(actions);
        if (categories[page]) {
          actions.setisLoading(false);
          console.log("we have data in localstorage");
          return;
        }
        console.log(`fetching ${page} ...`);
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

        // console.log("your here", page.id, fire);
        const result = await fire
          .search(page.id)
          .then(
            async (data) =>
              await data.docs.map((d) => ({ ...d.data(), id: d.id }))
          );

        actions.setCategory({
          page: categoryObject[page.id].lowerName,
          bg: categoryObject[page.id].bg,
          result,
        });
      },
    };
  },
  selectors: ({ selectors }) => {
    return {
      byCategory: [() => [selectors.categories], () => [selectors.isLoading]],
    };
  },
});
