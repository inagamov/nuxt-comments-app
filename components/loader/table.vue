<template>
	<div class="table__row" v-for="index in 10" :key="index">
		<div class="loader"></div>
		<div class="loader"></div>
		<div class="loader"></div>
	</div>
</template>

<style scoped>
@import "@/assets/styles/Table.css";
</style>
