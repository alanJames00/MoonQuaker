// Import the 'zustand' library for creating custom store
import { create } from 'zustand'


// Create custom hook called 'useStore' with zustand
const useStore = create((set) => ({

    // Initial state properties and handler functions
    view: true,
    changeView: () => set((state) => ({ view: !state.view })),
    year: '1971',
    handleYearChange: (event, data) => set((state) => ({ year: data.value })),
    day:'107',
    handleDayChange: (event, data) => set((state) => ({day: data.value})),
    isPlaying:'false',
    handlePlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
  }))


// Export the 'useStore' hook for use in the application
export default useStore;

