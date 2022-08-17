<template>
	<NuxtLink
		:to="`/comment/${item.id}`"
		:class="`table__row ${item.id % 2 !== 0 ? 'table__row__gray' : 'table__row__white'}`"
		v-for="item in comments"
		:key="item.id"
	>
		<div>
			<span>{{ item.id }}</span>
		</div>
		<div>{{ item.name }}</div>
		<div>{{ item.email }}</div>
	</NuxtLink>
</template>

<script>
export default {
	props: ["comments"],
};
</script>

<style scoped>
@import "@/assets/styles/Table.css";
</style>
