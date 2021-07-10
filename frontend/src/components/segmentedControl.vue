<template lang="pug">
.segmented-control
	label.control(v-for="segment in segments" :title="segment.title")
		input(type="radio" name="versions" class="input-real" :checked="modelValue.value == segment.value" @click="selectOption(segment)")
		.title {{segment.title}}
</template>

<script>
export default {
	name: "segmentedControl",
	emits: ['update:modelValue'],
	props: {
		segments: Array,
		modelValue: Object,
	},
	methods: {
		selectOption(segment) {
			this.$emit('update:modelValue', segment)
		}
	}
}
</script>

<style lang="stylus" scoped>
.segmented-control
	width: max-content
	margin: auto
	display: flex
	border-radius: 0.4em
	box-shadow: 0 1px 0 rgba(#fff,0.2)
	border: 1px solid rgba(#000,0.3)
	overflow: hidden
	.control
		flex: 1 0 auto
		overflow: hidden
		.input-real
			height: 0
			width: 0
			visibility: hidden
			display: none
		.title
			text-align: center
			line-height: 1
			text-shadow: 0px -0.05em 0 rgba(#000,.5)
			padding: 0.6em 0.9em 0.6em
			font-weight: bold
			color: #fefefe
			cursor: pointer
		+ .control
			border-left: 0.1em solid rgba(#000,0.3)
		input:checked + .title
			background: linear-gradient(180deg, #96a6bd 0%, #617ca1 50%, #43608a 100%)
</style>