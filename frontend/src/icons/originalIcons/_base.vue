<template lang="pug">
img(:src="`/img/original/${icon}.png`")
</template>

<script>
export default {
	name: "originalBase",
	props: {
		name: String,
		icon: String
	}
}
</script>

<style lang="stylus" scoped>
img
	width: 100%
	// height: 100%
// .app-icon
// 	overflow: hidden
// 	border-radius: 15vw
</style>