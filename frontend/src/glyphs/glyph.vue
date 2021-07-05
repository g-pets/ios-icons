<template lang="pug">
svg.icon(:class="`icon-${name}`")
	use(:xlink:href="`#icon_${name}`")
</template>

<script>
	export default {
		props: {
			name: String
		}
	}
</script>