<template lang="pug">
.app-icon
	canvas(ref="container")
</template>

<script>
import { ref, onMounted } from "vue"
import { canvasHelpers } from "~/utils/canvasHelpers.js"
export default {
	name: "phoneApp",
	setup() {
		const container = ref(null)
		const { backgroundGradient, glossLayer } = canvasHelpers()
		function drawIcon (ctx, size) {
			ctx.fillStyle = "white"
			let glyph = new Path2D("M1.8945 2.2866c.0592-.1245.1838-.2008.3216-.205l2.6023-.0814a.3887.3887 0 01.379.2603L6.6537 6.427c.049.14.014.2957-.0902.4013L5.2693 8.1398c-.102.1033-.1375.2542-.0842.3892.2474.6262 1.0862 2.4698 2.909 4.0548 1.8155 1.5788 3.567 2.1957 4.1606 2.3717.131.0389.2703-.0026.3647-.1014l1.8083-1.8904a.3886.3886 0 01.4176-.0952l3.9028 1.467a.3889.3889 0 01.2519.3639v2.2986c0 .0985-.0368.1927-.1101.2584-.3752.3363-1.7124 1.3685-4.0686 1.4497-2.8182.0972-6.6192-1.2576-9.5454-4.0815-2.5528-2.4635-4.0597-5.5392-4.254-7.9687-.1593-1.9909.595-3.786.8726-4.3693z")
			ctx.scale(7, 7)
			ctx.translate(8, 6)
			ctx.fill(glyph)
		}

		onMounted(() => {
			let canvas = container.value
			let size = canvas.width = canvas.offsetWidth * window.devicePixelRatio
			canvas.height = size
			const ctx = canvas.getContext("2d")
			backgroundGradient(ctx, size, "#207f19", "#1AD010")
			glossLayer(ctx, size)
			drawIcon(ctx, size)
			
		})

		return { container }
	}
}
</script>

<style lang="stylus" scoped>
.app-icon
	position: relative
	canvas
		width: 100%
		height: 100%
</style>