<template>
    <v-card class="grey lighten-4 rounded mx-2" width="300" height="300">
        <v-btn light icon class="float-right mt-3 mr-2">
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <v-list-item one-line>
            <v-list-item-avatar class="d-flex align-center">
                <v-img alt="Review author avatar" :src="review.author?.cover" aspect-ratio="1" />
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title>{{ review.author?.name }}</v-list-item-title>
                <v-list-item-subtitle>
                    <div class="d-flex justify-start align-center text-center">
                        <v-rating dense color="primary" half-increments length="5" readonly size="16"
                            :value="review.rate" />
                    </div>
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
            <v-list-item-content @click="dialog = !dialog">
                <span class="text-justify custom-truncate text-body-2 pa-1 cursor_on">Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Dolorum consequuntur itaque at fugiat soluta, dolor laudantium dolores architecto nam
                    vero, ab, earum enim laboriosam blanditiis esse? Vel voluptatum voluptatibus assumenda!</span>

                <!-- Dialog -->
                <v-dialog v-model="dialog" max-width="600" hide-overlay internal-activator no-click-animation>

                    <popup :name="review.author?.name" :rating="review.rate" :photo="img_review" :comment="review.comment"
                        :photo_User="review.author?.cover" :time="review.created_at" :close="closeDialog" />
                </v-dialog>

            </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
            <v-list-item-avatar class="align-left">
                <v-img alt="Review store avatar" :src="review.store?.cover" aspect-ratio="1" />
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title class="showhim">
                    <NuxtLink to="/">{{ review.store.name }}</NuxtLink>

                    <!-- More information -->
                    <moreInfo :Image="review.store?.cover" :Name="review.store.name" :Rating="4.2"
                        :PhoneNum="review.store.phone_number" />

                </v-list-item-title>
                <v-list-item-subtitle class="text-caption">{{ review.store.phone_number
                }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <div class="overline float-right text-caption mr-2 mb-1">{{ new
            Date(review.created_at).toLocaleString("kz-KZ", {
                dateStyle: "short",
            }) }}</div>
    </v-card>
</template>
  
<script>
import popup from "./popup";
import popup_img from "./popup_img"
import moreInfo from "./moreinfo";

export default {
    components: { popup, popup_img, moreInfo },
    props: {
        review: {
            type: Object
        }
    },
    data() {
        return {
            dialog: false,
            img_review: {
                1: "https://feedback04.wbbasket.ru/vol1425/part142539/142539816/photos/fs.webp",
                2: "https://feedback05.wbbasket.ru/vol1551/part155105/155105027/photos/fs.webp",
                3: "https://feedback04.wbbasket.ru/vol1529/part152906/152906324/photos/fs.webp",

            },
        }
    },
    methods: {
        closeDialog() {
            this.dialog = false;
        },

    },
}
</script>
  
<style>
.bg {
    background-color: beige;
}
</style>
  