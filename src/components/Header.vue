<template>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Test</ion-title>
      </ion-toolbar>
    </ion-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/vue';

export default defineComponent({
    name: 'Header',
})
</script>

<style scoped>

</style>