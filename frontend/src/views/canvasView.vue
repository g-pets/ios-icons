<template lang="pug">
.icons-container.canvas-view
	canvas-base(v-for="icon in icons" :name="icon.name" :component="icon.component")
</template>

<script>
import canvasBase from '~/canvasVersion/_canvasBase.vue'
export default {
	name: "iosIcons",
	components: { canvasBase },
	data() {
		return {
			icons: [
				// {name: "Text", component: "textApp"},
				// {name: "Calendar", component: "calendarApp"},
				// {name: "Photos", component: "photosApp"},
				// {name: "Camera", component: "cameraApp"},
				// {name: "YouTube", component: "youTubeApp"},
				// {name: "Stocks", component: "stocksApp"},
				// {name: "Maps", component: "mapsApp"},
				// {name: "Weather", component: "weatherApp"},
				// {name: "Clock", component: "clockApp"},
				// {name: "Calculator", component: "calculatorApp"},
				// {name: "Notes", component: "notesApp"},
				// {name: "Settings", component: "settingsApp"},
				{name: "Phone", component: "phoneApp"},
				// {name: "Mail", component: "mailApp"},
				// {name: "Safari", component: "safariApp"},
				// {name: "iPod", component: "iPodApp"},
			]
		}
	}
}
</script>

<style lang="stylus" scoped>
.icons-container.canvas-view
	display: grid
	padding: 5vw
	gap: 5vw
	// grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr))
	grid-template-columns: 1fr
	flex: 0 0 auto
</style>