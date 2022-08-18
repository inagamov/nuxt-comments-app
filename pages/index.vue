<template>
	<div class="container">
		<!-- Table -->
		<commentsTable :loading="loading" :comments="comments" />

		<!-- Pagination -->
		<pagination :total_pages="total_pages" :current_page="current_page" @changePage="current_page = $event" />
	</div>
</template>

<script>
import axios from "axios";

export default {
	data: () => ({
		comments: [],

		loading: true,
		total_pages: null,
		current_page: 1,
	}),

	mounted() {
		this.fetchComments();
	},

	watch: {
		current_page() {
			this.fetchComments();
		},
	},

	methods: {
		fetchComments() {
			this.loading = true;

			// Access .env
			const config = useRuntimeConfig();

			axios
				.get(config.API_URL, {
					params: {
						_limit: config.LIMIT,
						_page: this.current_page,
					},
				})
				.then((response) => {
					this.loading = false;
					this.comments = response.data;

					// Compute total pages amount
					this.total_pages = Math.ceil(response.headers["x-total-count"] / config.LIMIT);
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
};
</script>

<style>
@import "@/assets/styles/App.css";
</style>
