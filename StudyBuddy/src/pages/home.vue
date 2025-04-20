<template>
  <v-row class="mt-5 h-100" justify="space-evenly">
    <!-- keeping both columns in same line -->
    <v-col
      class="d-flex flex-column border-md rounded-xl elevated-24"
      cols="7"
      justify="start"
    >
      <v-row class="d-flex pa-0" justify="center">
        <!-- <v-row justify="center"> -->
        <v-col cols="12">
          <v-card class="mx-auto rounded-t-xl" color="indigo" variant="flat">
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
      <v-row class="d-flex pa-0" justify="center">
        <v-container>
          <v-row justify="center">
            <v-time-picker
              elevation="15"
            />
          </v-row>
        </v-container>
      </v-row>
    </v-col>
    <v-col class="d-flex border-md border-black rounded-lg responsive" cols="4">
      <v-row class="d-flex mt-2" justify="space-evenly">
        <v-col
          class="d-flex flex-column justify-space-between align-center
         border-lg rounded-xl elevation-2 pa-0 custom-height"
          cols="5"
        >
          <!-- 1) Tasks at the very top -->
          <div class="text-h5 font-weight-bold mt-2">
            Tasks
          </div>

          <!-- 2) Circle at the very bottom -->
          <v-card
            class="d-flex align-center justify-center elevation-10 rounded-circle mb-2"
            style="width: 7vw; height: 15vh;"
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
          class="d-flex flex-column justify-space-between align-center
         border-lg rounded-xl elevation-2 pa-0 custom-height"
          cols="5"
        >
          <!-- 1) Tasks at the very top -->
          <div class="text-h5 font-weight-bold mt-2">
            Assignments
          </div>

          <!-- 2) Circle at the very bottom -->
          <v-card
            class="d-flex align-center justify-center elevation-10 rounded-circle mb-2"
            style="width: 7vw; height: 15vh;"
          >
            <v-progress-circular
              color="teal"
              :model-value="value"
              rotate="360"
              size="80"
              width="15"
            >
              <template #default>{{ value }}%</template>
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

  const value = ref(0);

  let interval = -1;
  onMounted(() => {
    interval = setInterval(() => {
      if (value.value === 100) {
        return (value.value = -3);
      }
      value.value += 1;
    }, 50);
  });
  onBeforeUnmount(() => {
    clearInterval(interval);
  });
</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
.custom-height{
  height:28%;
}
.m-auto{
  margin:auto;
}
.responsive{
  overflow: none;
  flex-wrap: wrap;
}
</style>
