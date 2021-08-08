<template lang="pug">
.icons-grid
	template(v-for="icon in icons")
		.app-item
			component.app-icon(:is="iconBase" :icon="icon.component")
			.app-name {{icon.name}}
</template>

<script>
import svgIcon from "~/icons/svgIcons/_base.vue"
export default {
	name: "iconsGrid",
	components: { svgIcon },
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
	.app-name
		text-align: center
</style>