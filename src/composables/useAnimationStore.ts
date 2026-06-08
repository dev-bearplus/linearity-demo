import { ref } from "vue";

// Singleton refs — shared across all components
const isAnimating = ref(false);
const activeSection = ref("");
const animationSpeed = ref(1.0);
const scrollProgress = ref(0);
const customStates = ref<Record<string, any>>({});

export function useAnimationStore() {
  const setAnimating = (value: boolean) => {
    isAnimating.value = value;
  };

  const setActiveSection = (section: string) => {
    activeSection.value = section;
  };

  const setSpeed = (speed: number) => {
    animationSpeed.value = speed;
  };

  const setScrollProgress = (value: number) => {
    scrollProgress.value = value;
  };

  const setCustomState = (key: string, value: any) => {
    customStates.value = {
      ...customStates.value,
      [key]: value,
    };
  };

  const getCustomState = <T>(key: string, defaultValue?: T): T | undefined => {
    return customStates.value[key] !== undefined
      ? customStates.value[key]
      : defaultValue;
  };

  const resetStore = () => {
    isAnimating.value = false;
    activeSection.value = "";
    animationSpeed.value = 1.0;
    customStates.value = {};
  };

  return {
    isAnimating,
    activeSection,
    animationSpeed,
    scrollProgress,
    customStates,
    setAnimating,
    setActiveSection,
    setSpeed,
    setScrollProgress,
    setCustomState,
    getCustomState,
    resetStore,
  };
}
