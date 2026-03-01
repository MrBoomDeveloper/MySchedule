import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

import node from "@astrojs/node";

export default defineConfig({
	redirects: {
		"/schedule": "/"
	},

	integrations: [
		vue()
	],

	adapter: node({
		mode: "server"
	})
});