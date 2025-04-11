<template>
  <div>
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'" />
    
    <!-- Temperature Selection -->
    <ul>
      <template v-for="temp in beverageStore.temps" :key="temp">
        <label>
          <input
            type="radio"
            name="temperature"
            :id="`r${temp}`"
            :value="temp"
            v-model="beverageStore.currentTemp"
          />
          {{ temp }}
        </label>
      </template>
    </ul>

    <!-- Base Selection -->
    <ul>
      <template v-for="b in beverageStore.bases" :key="b.id">
        <label>
          <input
            type="radio"
            name="bases"
            :id="`r${b.id}`"
            :value="b"
            v-model="beverageStore.currentBase"
          />
          {{ b.name }}
        </label>
      </template>
    </ul>

    <!-- Syrup Selection -->
    <ul>
      <template v-for="s in beverageStore.syrups" :key="s.id">
        <label>
          <input
            type="radio"
            name="syrups"
            :id="`r${s.id}`"
            :value="s"
            v-model="beverageStore.currentSyrup"
          />
          {{ s.name }}
        </label>
      </template>
    </ul>

    <!-- Creamer Selection -->
    <ul>
      <template v-for="c in beverageStore.creamers" :key="c.id">
        <label>
          <input
            type="radio"
            name="creamers"
            :id="`r${c.id}`"
            :value="c"
            v-model="beverageStore.currentCreamer"
          />
          {{ c.name }}
        </label>
      </template>
    </ul>

    <!-- Beverage Name Input -->
    <input 
      type="text" 
      placeholder="Beverage Name" 
      v-model="beverageStore.currentName" 
    />
    
    <!-- Make Beverage Button -->
    <button @click="beverageStore.makeBeverage()">🍺 Make Beverage</button>

    <!-- Saved Beverages List -->
    <div id="beverage-container" v-if="beverageStore.savedBeverages.length > 0">
      <template v-for="option in beverageStore.savedBeverages" :key="option.id">
        <label>
          <input
            type="radio"
            name="options"
            :id="`r${option.name}`"
            :value="option" 
            v-model="beverageStore.currentBeverage"
            @click="beverageStore.showBeverage(option)"
          />
          {{ option.name }}
        </label>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
const beverageStore = useBeverageStore();

// Fetch data when the component mounts
onMounted(() => {
  beverageStore.init();
  beverageStore.fetchBeverages(); // Fetch saved beverages from Firestore
});
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient
}
</style>