<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-tab-bar>

          <ion-tab-button tab="home" href="/tabs/home">
            <ion-icon :icon="homeOutline" />
            <ion-label>Home</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="scanner" href="/tabs/scanner">
            <ion-icon :icon="barcodeOutline" />
            <ion-label>Scanner</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="favorites" href="/tabs/favorites">
            <ion-icon :icon="starOutline" />
            <ion-label>Favorites</ion-label>
          </ion-tab-button>

        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonContent,
  IonLabel,
  IonIcon,
  IonPage,
} from "@ionic/vue";
import { 
  homeOutline,
  starOutline,
  barcodeOutline
} from "ionicons/icons";

export default {
  name: "Tabs",
  components: {
    IonContent,
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
  },
  setup() {
    return {
      homeOutline,
      starOutline,
      barcodeOutline
    };
  },
};
</script>