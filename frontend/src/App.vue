<template lang="pug">
glyphs-set
navigation-bar
	button(@click="showOriginal()") Original
	segmented-control(:segments="segments" v-model="segment")
main
	icons-grid(:iconBase="segment.value" :icons="icons")
footer
	small Designed by 
		a(href="https://apple.com" rel="noopener" target="_blank") Apple 
		| in California.<br>
		| Assembled in Prague by 
		a(href="https://gololobov.dev" rel="noopener" target="_blank") Constantine Gololobov
</template>

<script>
import "./assets/styles/index.styl"
import glyphsSet from "~/glyphs/glyphsSet.vue"
import navigationBar from "~/components/navigationBar.vue"
import segmentedControl from "~/components/segmentedControl.vue"
import iconsGrid from "~/components/iconsGrid.vue"
export default {
	name: "iosIcons",
	components: { glyphsSet, navigationBar, segmentedControl, iconsGrid },
	data() {
		return {
			segment: {value: "svgIcon", title: "SVG Version"},
			segments: [
				{value: "svgIcon", title: "SVG Version"},
				{value: "canvasIcon", title: "Canvas Version"},
				{value: "originalIcon", title: "Original Version"}
			],
			icons: [
				{name: "Text", component: "textApp"},
				{name: "Calendar", component: "calendarApp"},
				{name: "Photos", component: "photosApp"},
				{name: "Camera", component: "cameraApp"},
				{name: "YouTube", component: "youTubeApp"},
				{name: "Stocks", component: "stocksApp"},
				{name: "Maps", component: "mapsApp"},
				{name: "Weather", component: "weatherApp"},
				{name: "Clock", component: "clockApp"},
				{name: "Calculator", component: "calculatorApp"},
				{name: "Notes", component: "notesApp"},
				{name: "Settings", component: "settingsApp"},
				{name: "Phone", component: "phoneApp"},
				{name: "Mail", component: "mailApp"},
				{name: "Safari", component: "safariApp"},
				{name: "iPod", component: "iPodApp"},
			]
		}
	},
	methods: {
		showOriginal() {
			if(this.segment.value !== "originalIcon") this.segment.value = "originalIcon"
			else this.segment.value = "svgIcon"
		}
	}
}
</script>

<style lang="stylus" scoped>
.panel
	background: #444
.icons-container
	display: grid
	padding: 5vw
	gap: 5vw
	grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr))
	flex: 0 0 auto
footer
	margin-top: auto
	font-size: 0.85em
	text-align: center
	padding: 1em
footer
	color: #888
	transition: color .3s
	a
		color: inherit
	&:hover
		color: #fff
</style>