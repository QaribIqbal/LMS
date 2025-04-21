<template>
  <nav>
    <v-app-bar :elevation="2" rounded>
      <v-app-bar-title class="font-weight-medium">Dashboard</v-app-bar-title>
    </v-app-bar>
  </nav>
  <v-row class="mt-5 h-100" justify="space-evenly">
    <!-- keeping both columns in same line -->
    <v-col
      class="d-flex flex-column border-md rounded-xl elevated-24 h-100 pa-2 mb-0"
      cols="7"
      justify="start"
    >
      <v-row class="d-flex pa-0 ma-0 mb-2 mt-1" justify="center">
        <!-- <v-row justify="center"> -->
        <v-col class="ma-0 pa-0 mb-1" cols="12">
          <v-card class="ma-0 rounded-lg" color="indigo" variant="flat">
            <v-card-item>
              <div>
                <div class="text-h6 mb-1">
                  <strong>WELCOME,</strong>
                </div>
                <div class="text-overline mb-1">Qarib Iqbal</div>
                <div class="text-caption">
                  Greyhound divisely hello coldly fonwderfully
                </div>
              </div>
            </v-card-item>

            <v-card-actions>
              <v-btn> Button </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- </v-row> -->
      </v-row>
      <v-row class="d-flex pa-0 mx-1 ma-0" justify="center">
        <v-card class="" max-width="100%" width="100%">
          <v-toolbar color="warning">
            <!-- <v-btn icon="mdi-menu" /> -->

            <v-toolbar-title>Monday</v-toolbar-title>

            <!-- <v-btn icon="mdi-magnify" />

            <v-btn icon="mdi-checkbox-marked-circle" /> -->
          </v-toolbar>

          <v-list v-model:selected="selected" select-strategy="leaf">
            <v-list-item
              v-for="item in inboxItems"
              :key="item.id"
              active-class="text-yellow"
              class="py-3"
              :value="item.id"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>

              <v-list-item-subtitle class="mb-1 text-high-emphasis opacity-100">{{ item.headline }}</v-list-item-subtitle>

              <v-list-item-subtitle class="text-high-emphasis">{{ item.subtitle }}</v-list-item-subtitle>

              <template #append="{ isSelected }">
                <v-list-item-action class="flex-column align-end">
                  <small class="mb-4 text-high-emphasis opacity-60">{{ item.action }}</small>

                  <v-spacer />

                  <v-icon v-if="isSelected" color="yellow-darken-3">mdi-star</v-icon>

                  <v-icon v-else class="opacity-30">mdi-star-outline</v-icon>
                </v-list-item-action>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-row>
      <v-row class="d-flex mx-1 my-2 elevated-24" justify="center">
        <v-container class="pa-0" fluid>
          <v-card>
            <v-card-title class="text-overline">
              Progress

              <div class="text-green-darken-3 text-h3 font-weight-bold">90%</div>

              <div class="text-h6 text-medium-emphasis font-weight-regular">
                30 minutes remaining
              </div>
            </v-card-title>
            <br>
            <v-card-text>
              <div
                class="position-absolute mt-n8 text-caption text-green-darken-3"
                :style="`right: calc(${review} - 32px)`"
              >
                Hours Studied
              </div>
              <v-progress-linear
                color="green-darken-3"
                height="22"
                model-value="90"
                rounded="lg"
              >
                <!-- <v-badge
                  class="position-absolute"
                  color="white"
                  dot
                  inline
                  :style="`right: ${review}`"
                /> -->
              </v-progress-linear>

              <div class="d-flex justify-space-between py-3">
                <span class="text-green-darken-3 font-weight-medium">
                  3.5 hrs completed
                </span>

                <span class="text-medium-emphasis"> 4 hrs total </span>
              </div>
            </v-card-text>

            <v-divider />

            <v-list-item
              append-icon="mdi-chevron-right"
              lines="two"
              link
              subtitle="Update goal"
            />
          </v-card>
        </v-container>
        <!-- </template> -->
      </v-row>


    </v-col>
    <v-col class="d-flex border-md rounded-lg responsive mb-0 pa-0" cols="4">
      <v-row class="d-flex mt-2" justify="space-evenly">
        <v-col
          class="d-flex flex-column justify-space-evenly align-center text-wrap
         border-sm rounded-xl elevation-2  custom-height"
          cols="5"
        >
          <!-- 1) Tasks at the very top -->
          <div class="text-h5 font-weight-bold">
            Tasks
          </div>

          <!-- 2) Circle at the very bottom -->
          <v-card
            class="d-flex align-center justify-center elevation-10 rounded-circle mb-2"
            style="width: 7vw; height: 16vh;"
          >
            <v-progress-circular
              color="yellow-darken-3"
              :model-value="value"
              rotate="360"
              size="80"
              width="15"
            >
              <template #default>{{ value }}%</template>
            </v-progress-circular>
          </v-card>
        </v-col>

        <!-- <v-col
          align-self="start"
          class="d-flex pa-0 px-0 justify-center border-lg  custom-height"
          cols="6"
        >
          <v-progress-circular
            color="teal"
            :model-value="value"
            :rotate="360"
            :size="100"
            :width="15"
          >
            <template #default> {{ value }} % </template>
          </v-progress-circular>
        </v-col> -->
        <v-col
          class="d-flex flex-column justify-space-evenly align-center text-wrap
         border-sm rounded-xl elevation-2 pa-0 custom-height"
          cols="5"
        >
          <!-- 1) Tasks at the very top -->
          <div class="text-h6 font-weight-bold">
            Assignments
          </div>

          <!-- 2) Circle at the very bottom -->
          <v-card
            class="d-flex align-center justify-center elevation-10 rounded-circle"
            style="width: 7vw; height: 16vh;"
          >
            <v-progress-circular
              color="teal"
              :model-value="value2"
              rotate="360"
              size="80"
              width="15"
            >
              <template #default>{{ value2 }}%</template>
            </v-progress-circular>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  <!-- keeping both columns in same line -->
</template>
<script setup lang="ts">
  import { onBeforeUnmount, onMounted, ref } from 'vue';
  import { shallowRef } from 'vue'

  const value = ref(0);
  const value2=ref(0);
  const review = '0'

  let interval = -1;
  onMounted(() => {
    interval = setInterval(() => {
      if (value.value >= 100) {
        return (value.value = 0);
      }
      if (value2.value >= 100) {
        return (value2.value = 0);
      }
      value.value += 10;
      value2.value+=1;
    }, 500);
  });
  onBeforeUnmount(() => {
    clearInterval(interval);
  });

  const inboxItems = [
    { id: 1, action: '9:00 am', headline: 'Asad Kamal', subtitle: `CL-201A`, title: 'WAD' },
    { id: 2, action: '10:00 am', headline: 'Junaid Ahmed', subtitle: `CL-004B`, title: 'DAA' },
    { id: 3, action: '12:00 am', headline: 'Maria Naseem', subtitle: `CL-004B`, title: 'ENG' },
    { id: 4, action: '1:00 am', headline: 'Maria Naseem', subtitle: `CL-004B`, title: 'ENG' },
    // { id: 5, action: '1:00 am', headline: 'Daniyal Nadeem', subtitle: `A-303`, title: 'DE' },
    // { id: 3, action: '6 hr', headline: 'Oui oui', subtitle: 'Do you have Paris recommendations? Have you ever been?', title: 'Sandra Adams' },
    // { id: 4, action: '12 hr', headline: 'Birthday gift', subtitle: 'Have any ideas about what we should get Heidi for her birthday?', title: 'Trevor Hansen' },
    // { id: 5, action: '18hr', headline: 'Recipe to try', subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.', title: 'Britta Holt' },
  ]

  const selected = shallowRef([2])
</script>
<style scoped>
.text-wrap {
  white-space: normal;
  word-break: break-word;
}
.v-progress-circular {
  margin: 1rem;
}
.custom-height{
  height:18%;
}
.m-auto{
  margin:auto;
}
.responsive{
  overflow: none;
  flex-wrap: wrap;
}
</style>
