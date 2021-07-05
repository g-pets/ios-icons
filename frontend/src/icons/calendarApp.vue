<template lang="pug">
.icon-body
	.content-header
		.title {{date.weekday}}
	.content-body
		.date {{date.date}}
</template>

<script>
export default {
	name: "calendarAppIcon",
	computed: {
		date() {
			var date = new Date();
			var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
			var weekday = date.getDay()
			var date = date.getDate()
			return {weekday:weekdays[weekday], date}
		}
	}
}
</script>

<style lang="stylus" scoped>
.content-header
	background-image: linear-gradient(180deg, #EC9C9E 12%, #D13335 90%, #7f1517 100%)
.content-body
	background: #fff
	box-shadow: inset 0px 3em 5em rgba(#000,.3)
	.date
		color: #333
		text-align: center
		font-size: 40em
		line-height: 1.2
		font-weight: bold
</style>