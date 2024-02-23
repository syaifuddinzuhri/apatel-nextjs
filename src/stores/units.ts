/* eslint-disable import/prefer-default-export */
import { UnitDatesInput } from "@/interfaces/units";
import { addDays } from "date-fns";
import { create } from "zustand";

interface StoreType {
  unitDatesInput?: UnitDatesInput;
  minDate?: any;
  setUnitDatesInput: (unitDatesInput?: UnitDatesInput) => void;
}

let initDate = new Date();
const current = new Date();
const hour = current.getHours();
const minute = current.getMinutes();

if (hour >= 21 && minute > 0) {
  initDate = addDays(new Date(), 1);
}

export const useUnitsStore = create<StoreType>()(set => ({
  unitDatesInput: {
    startDate: initDate,
    endDate: addDays(new Date(initDate), 1),
  },
  minDate: initDate,
  setUnitDatesInput: (unitDatesInput?: UnitDatesInput) => set(state => ({ ...state, unitDatesInput })),
}));
