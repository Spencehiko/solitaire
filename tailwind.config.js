/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            height: {
                "screen-20": "calc(100vh - 5rem)",
            },
            colors: {
                "light-green": "#00b300",
                "dark-green": "#006400",
                "darkest-green": "#002b00",
                "suits-red": "#C6302C",
            },
            flexBasis: {
                "1/7": "14.2857143%",
                "2/7": "28.5714286%",
                "3/7": "42.8571429%",
                "4/7": "57.1428571%",
                "5/7": "71.4285714%",
                "6/7": "85.7142857%",
            },
        },
    },
    plugins: [],
};
