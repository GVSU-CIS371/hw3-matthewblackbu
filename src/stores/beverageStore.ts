import { defineStore } from "pinia";
import {
  BaseBeverageType,
  CreamerType,
  SyrupType,
  BeverageType,
} from "../types/beverage";
import tempretures from "../data/tempretures.json";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: [] as BaseBeverageType[],
    currentBase: null as BaseBeverageType | null,
    syrups: [] as SyrupType[],
    currentSyrup: null as SyrupType | null,
    creamers: [] as CreamerType[],
    currentCreamer: null as CreamerType | null,
    beverages: [] as BeverageType[],
    currentBeverage: null as BeverageType | null,
    currentName: "",
    savedBeverages: [] as BeverageType[], // Array to hold saved beverages from Firestore
  }),

  actions: {
    async init() {
      try {
        const basesSnapshot = await getDocs(collection(db, 'bases'));
        const creamersSnapshot = await getDocs(collection(db, 'creamers'));
        const syrupsSnapshot = await getDocs(collection(db, 'syrups'));

        this.bases = basesSnapshot.docs.map(
          (doc): BaseBeverageType => ({ id: doc.id, ...(doc.data() as Omit<BaseBeverageType, 'id'>) })
        );

        this.creamers = creamersSnapshot.docs.map(
          (doc): CreamerType => ({ id: doc.id, ...(doc.data() as Omit<CreamerType, 'id'>) })
        );

        this.syrups = syrupsSnapshot.docs.map(
          (doc): SyrupType => ({ id: doc.id, ...(doc.data() as Omit<SyrupType, 'id'>) })
        );

        this.currentBase = this.bases[0] || null;
        this.currentCreamer = this.creamers[0] || null;
        this.currentSyrup = this.syrups[0] || null;
      } catch (error) {
        console.error('Error initializing beverage store:', error);
      }
    },

    // Add a new beverage to Firestore
    async makeBeverage() {
      const newBeverage: BeverageType = {
        id: crypto.randomUUID(),
        name: this.currentName,
        base: this.currentBase!,
        syrup: this.currentSyrup!,
        creamer: this.currentCreamer!,
        temp: this.currentTemp,
      };

      try {
        // Add the new beverage to Firestore
        const docRef = await addDoc(collection(db, "beverages"), newBeverage);
        newBeverage.id = docRef.id; // Set the ID to the newly generated Firestore ID
        this.savedBeverages.push(newBeverage); // Add it to the savedBeverages array in the store
        this.currentBeverage = newBeverage; // Display the created beverage immediately
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    },

    // Fetch all beverages from Firestore
    async fetchBeverages() {
      try {
        const beveragesSnapshot = await getDocs(collection(db, "beverages"));
        this.savedBeverages = beveragesSnapshot.docs.map(
          (doc): BeverageType => ({ id: doc.id, ...(doc.data() as Omit<BeverageType, 'id'>) })
        );
      } catch (error) {
        console.error('Error fetching beverages:', error);
      }
    },

    // Show the selected beverage
    showBeverage(beverage: BeverageType) {
      this.currentBeverage = beverage;
    
      // Set the form fields based on the selected beverage
      this.currentName = beverage.name;
      this.currentBase = beverage.base;
      this.currentSyrup = beverage.syrup;
      this.currentCreamer = beverage.creamer;
      this.currentTemp = beverage.temp;
    },

    resetStore() {
      this.$reset();
    },
  },
});
