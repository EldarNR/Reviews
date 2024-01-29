<template>
    <v-card class="mx-auto d-flex align-end justify-center flex-column" outlined>
        <v-btn icon @click="close" class="mr-1">
            <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-list-item two-line>

            <v-list-item-content class="d-flex align-start">
                <v-row no-gutters v-if="getColumnsCount(photo) !== false" class="d-flex align-center justify-space-around">
                    <v-list-item-title class="mb-3 text-sm-body-2">Прикрепленные фотографии </v-list-item-title>
                    <v-col :cols="getColumnsCount(photo)" v-for="(img, index) in photo" :key="index">

                        <popup_img :img="img" :key="index" class="mb-3" />

                    </v-col>
                </v-row>
                <v-row v-else>
                    <v-col>
                        <span class="text-body-2">Фотографии не прикреплены</span>
                    </v-col>
                </v-row>

                <v-divider></v-divider>

                <span class="text-body-2 text-justify mt-2 mb-2" tile>Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit.
                    Laboriosam cum eum vero dolorem provident officiis a recusandae suscipit dolore tenetur necessitatibus
                    assumenda saepe nulla debitis qui incidunt dignissimos nesciunt, eius quis tempora! Doloremque, soluta!
                    Tempora impedit, minus hic error, minima molestiae reiciendis corrupti provident aspernatur vero, animi
                    iure aut officia? Quis maiores et ut a dolorem voluptatem error illum eius possimus impedit architecto,
                    inventore eligendi, fugit labore. Eligendi dolores praesentium minima corrupti quis, animi ipsa fuga
                    eius autem, fugit quasi, voluptas deleniti fugiat? Eos doloremque officiis a qui. Maiores non quisquam
                    voluptatem rerum voluptas! Dignissimos libero veritatis sed dolor tempore?.</span>


                <v-divider></v-divider>

                <v-card-actions>
                    <v-list-item class="grow">
                        <v-list-item-avatar size="55">
                            <v-img class="elevation-16" alt="user_photo" :src="photo_User"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>{{ name }}</v-list-item-title>
                        </v-list-item-content>

                        <v-row class="d-flex align-center justify-end">
                            <span align="center " class="text-body-1">
                                <v-rating dense color="primary" half-increments length="5" readonly size="20"
                                    :value="rating" />

                                {{ ratingWords(rating) }}
                            </span>
                        </v-row>

                    </v-list-item>

                </v-card-actions>
                <span class="text-caption float-right">Опубликовано:{{ new
                    Date(time).toLocaleString("kz-KZ", {
                        dateStyle: "long", timeStyle: "medium"
                    }) }}</span>
            </v-list-item-content>

        </v-list-item>


    </v-card>
</template>

<script>
import popup_img from './popup_img';
export default {
    components: { popup_img },
    props: {
        name: String,
        photo: Object,
        photo_User: String,
        comment: String,
        rating: Number,
        time: String,
        close: Function,
    },
    data() {
        return {
            img_dialog: false,
        };
    },
    emits: ['closeDialog'],
    methods: {
        closeDialog() {
            this.$emit('closeDialog', false);
        },
        getColumnsCount(obj) {
            const imgCount = Object.keys(obj).length;

            if (imgCount === 1) {
                return 12;
            } else if (imgCount === 2) {
                return 6;
            } else if (imgCount === 3) {
                return 3;
            } else {
                return false;
            }
        },
        ratingWords(rating) {
            switch (rating) {
                case 1:
                    return "Terrible";
                case 2:
                    return "Bad";
                case 3:
                    return "Okay";
                case 4:
                    return "Good";
                case 5:
                    return "Awesome";
                default:
                    return "";
            }
        }
    },
}
</script>