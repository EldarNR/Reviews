<template >
    <v-container fluid color="#26c6da">
        <v-slide-group show-arrows class="py-2">
            <v-slide-item v-for="review in reviews" :key="review.id" class="mb-5">

                <!--SkeletonLoader-->
                <!--          <v-sheet v-if="loading" :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">-->
                <!--            <v-skeleton-loader class="mx-auto" width="250" type="card"></v-skeleton-loader>-->
                <!--          </v-sheet>-->

                <!--Card-->

                <review_card :review="review" />

            </v-slide-item>
        </v-slide-group>
    </v-container>
</template>
  
<script>
import review_card from './review_card.vue';
export default {
    components: { review_card },
    name: "reviewSlider",
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
}


</script>
  
<style>
.sm_font {
    font-size: xx-small;
}

.showme {
    display: none;
}

.box_com {
    width: 100%;
    height: 100px;
    background-color: cornsilk;
    cursor: pointer;
}

.custom-truncate {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 5;
    text-overflow: ellipsis;
}

.showhim a {
    color: #000 !important;
    text-decoration: none
}

.showhim:hover .showme {
    display: block;
    position: absolute;

    top: -150%;
    left: 50%;
    width: 90%;

    background-color: #fbf7f7;
    padding: 20px;
    border: 1px solid #4d4d4d;
    z-index: 1;
}

.cursor_on {
    cursor: pointer;
}
</style>
  