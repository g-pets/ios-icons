import { createApp } from 'vue'
import App from './App.vue'
import glyph from "~/glyphs/glyph.vue"

createApp(App)
	.component('glyph', glyph)
	.mount('#app')