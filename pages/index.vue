<template>
  <v-app>
    <slider :reviews="readReviews" class="ma-0 pa-0"></slider> 
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "IndexPage",
  data() {
    return {
      selectedCover: 0,
      participantsDialog: false
    }
  },
  methods: {
    formattedPrice(number) {
      let numberStr = number.toString();
      numberStr = numberStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      numberStr += ' ₸';
      return numberStr;
    }
  },
  computed: {
    ...mapGetters("reviews", {
      readReviews: "READ_REVIEWS"
    }),
  },
  async asyncData({ store }) {
    await store.dispatch('reviews/getProductReviewsId', 1)
  }
}
</script>