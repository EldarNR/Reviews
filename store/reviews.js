import Vue from "vue";

export const state = () => ({
  product: {},
  reviews: [],
});

export default {
  actions: {
    async getProductById({ commit }, productId) {
      await this.$axios
        .$get("/product/get", {
          params: {
            product_id: productId,
          },
        })
        .then((res) => {
          commit("SET_PRODUCT", res.data);
        });
    },
    async getProductReviewsId({ commit }, productId) {
      console.log("FETCH REVIEWS FOR PRODUCT");
      await this.$axios
        .$get("/review/list", {
          params: {
            product_id: productId,
          },
        })
        .then((res) => {
          commit("SET_REVIEWS", res.data);
        });
    },
  },
  mutations: {
    SET_PRODUCT(state, data) {
      Vue.set(state, "product", data);
    },
    SET_REVIEWS(state, data) {
      Vue.set(state, "reviews", data);
    },
  },
  getters: {
    READ_PRODUCT(state) {
      return state.product;
    },
    READ_REVIEWS(state) {
      return state.reviews;
    },
  },
};
