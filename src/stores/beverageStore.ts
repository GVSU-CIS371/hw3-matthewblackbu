import { defineStore } from "pinia";
import {
  BaseBeverageType,
  CreamerType,
  SyrupType,
  BeverageType,
} from "../types/beverage";
import tempretures from "../data/tempretures.json";
import db from "../firebase";
import {
  collection,
  getDocs,
  //setDoc,
  //doc,
  //QuerySnapshot,
  //QueryDocumentSnapshot,
  //onSnapshot,
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
  }),

  actions: {
    async init() {
    try {
      const  basesSnapshot = await getDocs(collection(db, 'bases'));
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
    makeBeverage() {},
      
    showBeverage() {},
    resetStore() {
      this.$reset();
    }
  },
});
