/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#FF6B00', // Phoenix Orange
                    dark: '#CC5500',
                    light: '#FF8533',
                },
                secondary: {
                    DEFAULT: '#6D28D9', // Phoenix Violet
                    light: '#8B5CF6',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
