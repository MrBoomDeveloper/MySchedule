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
		"/schedule": "/dashboard"
	},

	adapter: node({
		mode: "server"
	})
});