<template lang="pug">
.icons-grid
	//- canvas-base(v-for="icon in icons" :name="icon.name" :component="icon.component")
	template(v-for="icon in icons")
		.app-item
			component.app-icon(:is="iconBase" :icon="icon.component")
			.app-name {{icon.name}}
</template>

<script>
import svgIcon from '~/icons/svgIcons/_base.vue'
import canvasIcon from '~/icons/canvasIcons/_base.vue'
import originalIcon from '~/icons/originalIcons/_base.vue'
export default {
	name: "iconsGrid",
	components: { svgIcon, canvasIcon, originalIcon  },
	props: {
		iconBase: String,
		icons: Array
	}
}
</script>

<style lang="stylus" scoped>
.icons-grid
	display: grid
	padding: 5vw
	gap: 5vw
	grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr))
	flex: 0 0 auto
	.app-icon
		border-radius: 1.5em
		overflow: hidden
		// width: 100%
		// height: 100%
	.app-name
		text-align: center
</style>