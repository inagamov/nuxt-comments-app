<template>
	<div>
		<!-- Title -->
		<h1 class="container__title">Comments.</h1>

		<div class="table">
			<!-- Columns -->
			<div class="table__columns">
				<div class="table__columns__sort_column" @click="toggleIdSortOrder()">
					id
					<svg
						:class="
							sort.id == 'ascending' ? 'table__columns__sort_column__ascending' : 'table__columns__sort_column__descending'
						"
						viewBox="0 0 48 48"
						fill="none"
					>
						<rect width="48" height="48" fill="white" fill-opacity="0.01" />
						<path d="M13 30L25 18L37 30" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</div>
				<div>name</div>
				<div>e-mail</div>
			</div>

			<!-- Loader -->
			<loaderTable v-if="loading" />

			<!-- Rows -->
			<commentsRow v-else :comments="sorted_comments" />
		</div>
	</div>
</template>

<script>
export default {
	props: ["loading", "comments"],

	data: () => ({
		sorted_comments: [],
		sort: {
			id: "ascending",
		},
	}),

	watch: {
		comments() {
			this.sortComments();
		},
	},

	methods: {
		toggleIdSortOrder() {
			this.sort.id = this.sort.id == "ascending" ? "descending" : "ascending";
			this.sortComments();
		},

		sortComments() {
			if (this.sort.id == "ascending") {
				this.sorted_comments = this.comments.sort(function (a, b) {
					return a.id - b.id;
				});
			} else {
				this.sorted_comments = this.comments.sort(function (a, b) {
					return b.id - a.id;
				});
			}
		},
	},
};
</script>

<style scoped>
@import "@/assets/styles/Table.css";
</style>
