<template>
	<div class="comment">
		<!-- Name -->
		<div class="comment__name">{{ comment.name }}</div>

		<!-- E-mail -->
		<div class="comment__cell">
			<div class="comment__cell__key">e-mail:</div>
			<div class="comment__cell__value">{{ comment.email }}</div>
		</div>

		<!-- Post id -->
		<div class="comment__cell">
			<div class="comment__cell__key">post id:</div>
			<div class="comment__cell__value">{{ comment.postId }}</div>
		</div>

		<!-- Id -->
		<div class="comment__cell">
			<div class="comment__cell__key">id:</div>
			<div class="comment__cell__value">{{ comment.id }}</div>
		</div>

		<!-- Body -->
		<div class="comment__body">{{ comment.body }}</div>
	</div>
</template>

<script>
export default {
	props: ["comment"],
};
</script>

<style scoped>
@import "@/assets/styles/Comment.css";
</style>
