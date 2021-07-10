<template lang="pug">
.app-icon
	canvas(ref="container")
</template>

<script>
import { ref, onMounted } from "vue"
import { canvasHelpers } from "~/utils/canvasHelpers.js"
export default {
	name: "cameraApp",
	setup() {
		const container = ref(null);
		const { backgroundGradient } = canvasHelpers()
		function drawIcon (ctx, size) {
			backgroundGradient(ctx, size, "#F9F9F9", "#8F9096")

			let center = size/2
			let outer = ctx.createRadialGradient(center,center,0,center,center,size/3)
			outer.addColorStop(0, "#3C3C3C")
			outer.addColorStop(0.73, "#3C3C3C")

			// Big Ring
			outer.addColorStop(0.73, "#535353") // light color
			outer.addColorStop(0.82, "#454545") // dark color
			outer.addColorStop(0.825, "#323232") // shadow start
			outer.addColorStop(0.83, "#323232") // shadow end
			
			let smallRingsStart = 0.8
			let startPosition
			for(var i=1; i<=4; i+=1) {
				let totalWidth = 0.03
				let colorWidth = 0.02
				let shadowWidth = 0.004
				let ringStart = i * totalWidth + smallRingsStart
				outer.addColorStop(ringStart, "#535353")
				outer.addColorStop(ringStart+colorWidth, "#454545")
				outer.addColorStop(ringStart+colorWidth+shadowWidth, "#323232") // shadow end
				startPosition = ringStart+colorWidth+shadowWidth*2
			}

			// Outer Ring
			outer.addColorStop(startPosition, "#535353")
			outer.addColorStop(1, "#4E4E4E")

			ctx.fillStyle = outer
			// ctx.fillRect(0, 0, size, size)

			ctx.arc(center,center,size/3,0,2*Math.PI,true)
			ctx.fill()


			
		}
		onMounted(() => {
			let canvas = container.value
			let size = canvas.width = canvas.offsetWidth * 4
			canvas.height = size
			const ctx = canvas.getContext("2d")
			drawIcon(ctx, size)
		})

		return { container }
	},
};
</script>

<style lang="stylus" scoped>
.app-icon
	position: relative
canvas
	width: 100%
	height: 100%
	border-radius: 1em
</style>