import { kea } from "kea";
import { fire } from "../db";

export const dataLogic = kea({
  actions: () => ({
    setTitle: (page) => ({ page }),
    setCategory: (page) => ({ page }),
    setFetchError: (message) => ({ message }),
  }),
  path: () => ["scenes", "categories"], // NEEDED!
  reducers: ({ actions }) => ({
    page: [
      {},
      {
        [actions.setTitle]: (_, payload) => payload.page,
      },
    ],
    categories: [
      {},
      { persist: true },
      {
        [actions.setCategory]: (state, payload) => {
          console.log(payload, state);
          const {
            page: { bg, name, result },
          } = payload;

          return {
            ...state,
            [`${name}`]: {
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
  listeners: ({ actions }) => {
    console.log(actions);
    return {
      [actions.setTitle]: async ({ page }, breakpoint) => {
        const { all, bestSold } = fire.products;
        await breakpoint(300); // debounce for 300ms
        if (page === "home") {
          let data;
          const getFireData = (docs) =>
            docs.map((d) => ({ ...d.data(), id: d.id }));
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

        // const result = await (
        //   await fire.data.products.where("category", "==", page.id).get()
        // ).docs.map((d) => {
        //   return { ...d.data(), id: d.id };
        // });
        // page.name = page.name
        //   .normalize("NFD")
        //   .replace(/[\u0300-\u036f]/g, "")
        //   .trim()
        //   .toLowerCase();
        // actions.setCategory({ ...page, result, bg: page.bg });
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
