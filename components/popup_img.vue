<template>
    <div align="center">
        <img :src="img" alt="review_img" width="80px" height="80px" class="cursor_on" @click="openDialog" />

        <v-dialog v-model="dialogModel" max-width="100dvh" max-height="100dvh" class="d-flex align-end">
            <v-img :src="img" max-width="100%">
                <v-btn icon @click="closeDialog" class="float-right">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-img>
        </v-dialog>
    </div>
</template>
  
<script>
export default {
    props: {
        img: String,
        dialog: Boolean,
    },
    data() {
        return {
            dialogModel: this.dialog,
        };
    },
    methods: {
        openDialog() {
            this.dialogModel = true;
        },
        closeDialog() {
            this.dialogModel = false;
        }
    },
}
</script>
