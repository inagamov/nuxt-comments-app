<template>
	<div class="container">
		<!-- Title -->
		<NuxtLink to="/" class="container__title">
			<div class="container__title__icon">
				<svg viewBox="0 0 486.975 486.975">
					<path
						d="M473.475,230.025h-427.4l116-116c5.3-5.3,5.3-13.8,0-19.1c-5.3-5.3-13.8-5.3-19.1,0l-139,139c-5.3,5.3-5.3,13.8,0,19.1 l139,139c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-116-116h427.5c7.5,0,13.5-6,13.5-13.5 S480.975,230.025,473.475,230.025z"
					/>
				</svg>
			</div>
			<h1>Back.</h1>
		</NuxtLink>

		<!-- Loader -->
		<LoaderComment v-if="loading" />

		<!-- Comment data -->
		<Comment v-else :comment="comment" />
	</div>
</template>

<script>
import axios from "axios";

export default {
	data: () => ({
		comment: [],

		loading: true,
		error: false,
	}),

	mounted() {
		this.fetchComment();
	},

	methods: {
		fetchComment() {
			this.loading = true;

			const id = useRoute().params.id;
			const config = useRuntimeConfig();

			axios
				.get(config.API_URL + id)
				.then((response) => {
					this.loading = false;
					this.comment = response.data;
				})
				.catch(() => {
					window.location.href = "/404";
				});
		},
	},
};
</script>
