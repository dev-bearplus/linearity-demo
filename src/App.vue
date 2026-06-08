<script setup>
import { ref } from 'vue'
import WebGLBackground from './components/vue/WebGLBackground.vue'
import GlowingEdgeOverlay from './components/vue/GlowingEdgeOverlay.vue'

const showGradient = ref(true)
const showAIEffect = ref(true)
const isBannerOpen = ref(true)
</script>

<template>
  <WebGLBackground v-if="showGradient" />
  <GlowingEdgeOverlay v-if="showAIEffect" />

  <div class="toggle-banner" :class="{ 'is-closed': !isBannerOpen }">
    <button class="toggle-close" @click="isBannerOpen = !isBannerOpen">
      <svg v-if="isBannerOpen" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
    </button>
    
    <div v-show="isBannerOpen" class="toggle-content">
      <label class="toggle-label">
        <input type="checkbox" v-model="showGradient" />
        Gradient Background
      </label>
      <label class="toggle-label">
        <input type="checkbox" v-model="showAIEffect" />
        AI Effect
      </label>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  overflow: hidden;
  background-color: #050505;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.toggle-banner {
  position: fixed;
  top: 32px;
  right: 32px;
  z-index: 10000;
  background: rgba(45, 140, 120, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 24px 32px;
  color: white;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.toggle-banner.is-closed {
  padding: 0;
  background: rgba(30, 30, 30, 0.8);
  border-radius: 12px;
  border-color: rgba(255, 255, 255, 0.1);
}

.toggle-close {
  position: absolute;
  top: -12px;
  right: -12px;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: rgba(45, 45, 45, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease;
}

.toggle-close:hover {
  background: rgba(60, 60, 60, 1);
  transform: scale(1.05);
}

.toggle-banner.is-closed .toggle-close {
  position: relative;
  top: 0;
  right: 0;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  box-shadow: none;
}

.toggle-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.toggle-label {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  letter-spacing: -0.01em;
}

.toggle-label input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  width: 28px;
  height: 28px;
  background: rgba(0, 0, 0, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  margin: 0;
  flex-shrink: 0;
}

.toggle-label input[type="checkbox"]:hover {
  border-color: rgba(255, 255, 255, 0.6);
}

.toggle-label input[type="checkbox"]:checked {
  background: #1877F2;
  border-color: #1877F2;
}

.toggle-label input[type="checkbox"]:checked::after {
  content: '';
  position: absolute;
  left: 8px;
  top: 3px;
  width: 6px;
  height: 14px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
</style>
