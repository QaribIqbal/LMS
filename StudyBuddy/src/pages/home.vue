<template>
  <nav>
    <v-app-bar :elevation="2" rounded>
      <v-app-bar-title class="font-weight-medium">Dashboard</v-app-bar-title>
    </v-app-bar>
  </nav>
  <v-row class="mt-5 h-80 mb-2" justify="space-evenly">
    <!-- keeping both columns in same line -->
    <v-col
      class="border-md rounded-xl elevated-24 h-100 pa-2 mb-0"
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
    <v-col class="border-md rounded-lg responsive mb-0 pa-0 justify-center" cols="4">
      <v-row class="d-flex ma-0 mt-2  h-25 mb-5" justify="space-evenly">
        <h2 class="d-flex w-100  ml-4 mb-5 ">Completions</h2>
        <v-col
          class="d-flex flex-column justify-space-between align-center pa-2"
          cols="12"
          md="5"
          sm="6"
        >
          <v-card
            class="d-flex flex-column justify-space-between align-center pa-4 w-100 elevation-2 rounded-lg"
            height="200"
          >
            <div class="text-h6 font-weight-bold text-center">Tasks</div>

            <!-- Circle Container -->
            <div class="position-relative" style="width: 70%; padding-top: 70%">
              <v-card
                class="d-flex align-center justify-center elevation-10 rounded-circle"
                style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        "
              >
                <v-progress-circular
                  color="warning"
                  :model-value="value"
                  rotate="360"
                  :size="80"
                  style="transform: scale(0.8)"
                  :width="15"
                >
                  <template #default>
                    <span class="text-body-1 font-weight-medium">{{ value }}%</span>
                  </template>
                </v-progress-circular>
              </v-card>
            </div>
          </v-card>
        </v-col>
        <v-col
          class="d-flex flex-column justify-space-between align-center pa-2"
          cols="12"
          md="5"
          sm="6"
        >
          <v-card
            class="d-flex flex-column justify-space-between align-center pa-4 w-100 elevation-2 rounded-lg"
            height="200"
          >
            <div class="text-h6 font-weight-bold text-center">Assignments</div>

            <!-- Circle Container -->
            <div class="position-relative" style="width: 70%; padding-top: 70%">
              <v-card
                class="d-flex align-center justify-center elevation-10 rounded-circle"
                style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        "
              >
                <v-progress-circular
                  color="teal"
                  :model-value="value2"
                  rotate="360"
                  :size="90"
                  style="transform: scale(0.8)"
                  :width="15"
                >
                  <template #default>
                    <span class="text-body-1 font-weight-medium">{{ value2 }}%</span>
                  </template>
                </v-progress-circular>
              </v-card>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <!-- To Do tasks -->
      <v-row class=" mt-0 pa-4">
        <v-col class=" ma-2">
          <h2 class="d-flex w-100  ml-1 mb-5 ma-auto ">TO DO</h2>
          <v-card class="elevated-24">
            <v-timeline align="start" side="end">
              <v-timeline-item
                dot-color="pink"
                size="small"
              >
                <div class="d-flex">
                  <strong class="me-4">5pm</strong>
                  <div>
                    <strong>New Icon</strong>
                    <div class="text-caption">
                      Mobile App
                    </div>
                  </div>
                </div>
              </v-timeline-item>

              <v-timeline-item
                dot-color="teal-lighten-3"
                size="small"
              >
                <div class="d-flex">
                  <strong class="me-4">3-4pm</strong>
                  <div>
                    <strong>Design Stand Up</strong>
                    <div class="text-caption mb-2">
                      Hangouts
                    </div>
                  </div>
                </div>
              </v-timeline-item>

              <v-timeline-item
                dot-color="pink"
                size="small"
              >
                <div class="d-flex">
                  <strong class="me-4">12pm</strong>
                  <div>
                    <strong>Lunch break</strong>
                  </div>
                </div>
              </v-timeline-item>

              <v-timeline-item
                dot-color="teal-lighten-3"
                size="small"
              >
                <div class="d-flex">
                  <strong class="me-4">9-11am</strong>
                  <div>
                    <strong>Finish Home Screen</strong>
                    <div class="text-caption">
                      Web App
                    </div>
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
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
