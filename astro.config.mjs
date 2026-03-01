import { defineConfig, envField } from "astro/config";

import vue from "@astrojs/vue";

import node from "@astrojs/node";

export default defineConfig({
	output: "server",

	i18n: {
		defaultLocale: "en",
		locales: [
			"en",
			"ru"
		]
	},

	env: {
		schema: {
			REGISTRATION_ENABLED: envField.boolean({
				context: "server",
				access: "public"
			})
		}
	},

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