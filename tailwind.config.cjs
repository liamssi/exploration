const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");
const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
        content: [
            "./src/**/*.html",
            "./src/**/*.svelte"
        ],
        options: {
            defaultExtractor: (content) => [
                ...tailwindExtractor(content),
                ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
            ],
            keyframes: true,
        },
    },
    darkMode: 'class',
	theme: {
        
		extend: {
            colors: {
                orange:colors.orange
            }
        },
	},
	variants: {
		extend: {
            width: ['hover', 'focus-within']
        },
	},
	plugins: [require('@tailwindcss/typography'),require('tailwindcss-shadow-outline-colors')()],
};
