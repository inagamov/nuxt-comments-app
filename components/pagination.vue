<template>
	<div class="pagination">
		<div
			:class="`pagination__item ${item == current_page ? 'pagination__item__current' : ''}`"
			v-for="item in displayed_pages"
			:key="item.id"
			@click="this.$emit('changePage', item)"
		>
			{{ item }}
		</div>
	</div>
</template>

<script>
export default {
	props: ["total_pages", "current_page"],

	data: () => ({
		displayed_pages: [],
	}),

	watch: {
		total_pages() {
			this.computePages();
		},
		current_page() {
			this.computePages();
		},
	},

	methods: {
		computePages() {
			// Clear previous data
			this.displayed_pages = [];

			for (let i = 1; i <= this.total_pages; i++) {
				if (
					(i >= this.current_page && i <= this.current_page + 2) || // Current page and 2 forward
					(i <= this.current_page && i >= this.current_page - 2) || // Current page and 2 backwards
					i == 1 || // The first one
					i == this.total_pages // The last one
				) {
					this.displayed_pages.push(i);
				}
			}
		},
	},
};
</script>

<style scoped>
@import "@/assets/styles/Pagination.css";
</style>
