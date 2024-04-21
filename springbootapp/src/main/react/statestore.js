// stateStore.js
import {create} from 'zustand';

export const useStore = create((set, get) => ({
  // State
  selection: 'count',
  count: '',
  startDate: '',
  endDate: '',
  apods: [],
  apodData: null,
  date: new Date().toISOString().split('T')[0],

  // Setters
  setSelection: (selection) => set({ selection }),
  setCount: (count) => set({ count }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
  setApods: (apods) => set({ apods }),
  setApodData: (apodData) => set({ apodData }),
  setDate: (date) => set({ date }),

  // Fetch APODs by count or date range
  fetchApods: async () => {
    let apiUrl = '/apod/call?';
    const { selection, count, startDate, endDate } = get();
    if (selection === 'count') {
      apiUrl += `count=${count}`;
    } else {
      apiUrl += `start_date=${startDate}&end_date=${endDate}`;
    }

    const response = await fetch(apiUrl);
    const data = await response.json();
    set({ apods: data });
  },

  // Fetch APOD by specific date
  fetchAPOD: async () => {
    const { date } = get();
    let apiUrl = '/apod/call';
    if (date) apiUrl += `?date=${date}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    set({ apodData: data });
  }
}));

// export default useStore;
