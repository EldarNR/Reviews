<template>
    <v-list-item class="showme rounded">
        <v-list-item-content>
            <div align="center"><v-img alt="Review author avatar" width="75" height="75" :src="Image" aspect-ratio="1" />
            </div>
            <v-list-item-title>Продавец: <NuxtLink to="/">{{ Name
            }}</NuxtLink></v-list-item-title>
            <div class="d-flex justify-start align-center ">
                Рейтинг:
                <v-rating dense color="primary" half-increments length="5" readonly size="16" :value="Rating" />
            </div>
            <v-list-item-subtitle class="text-caption mt-1">Контакт:{{
                PhoneNum }}</v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
export default {
    props: {
        Image: String,
        Name: String,
        Rating: Number,
        PhoneNum: String
    }
}
</script>