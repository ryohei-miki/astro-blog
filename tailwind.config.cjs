/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        purple: "#C778DD",
        cyan: "#7CDBCB",
        red: "#E43777",
        navy: "#574EC1",
        grey: "#CECECE",
        blue: "#38bdf9",
      }
    }
  },
	plugins: [
		require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
	],
}
