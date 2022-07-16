/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            height: {
                "screen-20": "calc(100vh - 5rem)",
            },
            colors: {
                "dark-green": "#006400",
            },
        },
    },
    plugins: [],
};
