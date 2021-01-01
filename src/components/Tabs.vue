<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="home" href="/tabs/home">
            <ion-icon :icon="imageOutline" />
            <ion-label>Home</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="scanner" href="/tabs/scanner">
            <ion-icon :icon="cloudOutline" />
            <ion-label>Scanner</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="history" href="/tabs/history">
            <ion-icon :icon="locateOutline" />
            <ion-label>History</ion-label>
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
import { cloudOutline, imageOutline, locateOutline } from "ionicons/icons";

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
      cloudOutline,
      imageOutline,
      locateOutline,
    };
  },
};
</script>