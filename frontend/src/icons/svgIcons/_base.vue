<template lang="pug">
svg.app-icon(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000")
	foreignObject(x="0" y="0")
		component(:is="icon")
</template>

<script>
import phoneApp from './phoneApp.vue'
import textApp from './textApp.vue'
import iPodApp from './iPodApp.vue'
import calculatorApp from './calculatorApp.vue'
import weatherApp from './weatherApp.vue'
import settingsApp from './settingsApp.vue'
import stocksApp from './stocksApp.vue'
import mapsApp from './mapsApp.vue'

// Not Optimized
import clockApp from './clockApp.vue'
import notesApp from './notesApp.vue'
import calendarApp from './calendarApp.vue'
import mailApp from './mailApp.vue'
import safariApp from './safariApp.vue'
import photosApp from './photosApp.vue'
import cameraApp from './cameraApp.vue'
import youTubeApp from './youTubeApp.vue'

export default {
	name: "appIcon",
	components: {
		cameraApp,
		mapsApp,
		iPodApp,
		phoneApp,
		photosApp,
		calculatorApp,
		mailApp,
		stocksApp,
		textApp,
		weatherApp,
		safariApp,
		settingsApp,
		clockApp,
		notesApp,
		calendarApp,
		youTubeApp
	},
	props: {
		name: String,
		icon: String
	}
}
</script>

<style lang="stylus" scoped>
.app-icon
	width: 100%
	:deep(foreignObject)
		width: 100rem
		height: 100rem
		.icon-body
			width: 100%
			height: 100%
			// border-radius: 10em
			// overflow: hidden
			.content-header
				height: 300px
				.title
					color: #fff
					text-align: center
					font-size: 9.5em
					line-height: 1
					padding: 0.6em 0 0.3em
					font-family: Helvetica
					font-weight: bold
					text-shadow: 0px -0.05em 0 rgba(#000,.4)
		.glossy
			position: relative
			&:before
				content: ''
				position: absolute
				top: 0
				left: 0
				width: 100%
				height: 53%
				border-radius: 0 0 70% 70%/0 0 45% 45%
				background: linear-gradient(180deg, rgba(#fff, .75) 0%, rgba(#fff, .15) 100%)
</style>