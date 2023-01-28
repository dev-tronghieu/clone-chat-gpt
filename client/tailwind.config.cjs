/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#6377b0",
                secondary: "#445073",
                background: "#536494",
            },
        },
    },
    plugins: [],
};
