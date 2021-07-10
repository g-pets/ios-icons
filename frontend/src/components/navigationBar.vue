<template lang="pug">
.navigation-bar
	slot
</template>

<script>
import segmentedControl from '~/components/segmentedControl.vue'
export default {
	name: "navigationBar",
	components: { segmentedControl },
}
</script>

<style lang="stylus" scoped>
.navigation-bar
	background: linear-gradient(180deg, #c1cbdb 0%, #8093b3 50%, #577398 100%)
	box-shadow: inset 0 -1px 0 rgba(#000,0.3), inset 0 1px 0 rgba(#fff,0.5)
	color: #fffffa
	padding: 0.45em 0.3em
	display: flex
</style>