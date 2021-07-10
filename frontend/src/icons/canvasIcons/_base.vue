<template lang="pug">
component(:is="icon")
</template>

<script>
import phoneApp from './phoneApp.vue'
// import youTubeApp from './youTubeApp.vue'
// import cameraApp from './cameraApp.vue'
export default {
	name: "canvasBase",
	components: {
		phoneApp,
		// youTubeApp,
		// cameraApp
	},
	props: {
		name: String,
		icon: String
	}
}
</script>

<style lang="stylus" scoped>
// .app-icon
// 	overflow: hidden
// 	border-radius: 15vw
</style>