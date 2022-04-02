const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            emerald: colors.emerald,
            yellow: colors.yellow,
            indigo: colors.indigo,
            cyan: colors.cyan,
            rose: colors.rose,
            pink: colors.pink,
            orange: colors.orange,
            amber: colors.amber,
            lime: colors.lime,
            'sky': {
                100: '#BFE4FD',
                200: '#96D0F7',
                300: '#70C1F6',
                400: '#48B0F5',
                500: '#209CEE',
                600: '#1694E7',
                700: '#0B7CC7',
                800: '#0263A4',
                900: '#004471',
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
