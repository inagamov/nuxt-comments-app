import {defineNuxtConfig} from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	publicRuntimeConfig: {
		API_URL: process.env.API_URL,
		LIMIT: process.env.LIMIT,
	},
	target: "static",
	router: {
		base: "/nuxt-comments-app/",
	},
});
