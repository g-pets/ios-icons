function canvasHelpers() {

	const backgroundGradient = (ctx, size, c1, c2) => {
		let gradient = ctx.createLinearGradient(0,0,0,size)
		gradient.addColorStop(0, c1)
		gradient.addColorStop(1, c2)
		ctx.fillStyle = gradient
		ctx.fillRect(0, 0, size, size)
	}

	const glossLayer = (ctx, size) => {
		// Sizes
		let width = size
		let height = size/2
		let curveStart = width/3
		let curveEnd = width/1.6

		// Gradient
		let gradient = ctx.createLinearGradient(0,0,0,height)
		gradient.addColorStop(0, "#ffffff75")
		gradient.addColorStop(1, "#ffffff15")
		ctx.fillStyle = gradient

		// Path
		ctx.beginPath()
		ctx.moveTo(0,0)
		ctx.lineTo(width,0)
		ctx.lineTo(width,curveStart)
		ctx.quadraticCurveTo(width/2,curveEnd,0,curveStart)
		ctx.lineTo(0,0)
		ctx.closePath()
		ctx.fill()


		
		// ctx.fillRect(0, 0, width, height)
	}

	return { backgroundGradient, glossLayer }
}

export { canvasHelpers }