/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#5F7099",
                secondary: "#5F6088",
                tertiary: "#40414f"
            },
        },
    },
    plugins: [],
};
