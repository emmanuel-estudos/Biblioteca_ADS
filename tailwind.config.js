/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,mdx}", // O .mdx é vital aqui!
    ],
    theme: {
        extend: {
            colors: {
                // Isso permite usar classes como bg-primary ou text-secondary
                primary: "var(--primary)",
                secondary: "var(--secondary)",
            }
        },
    },
    plugins: [],
}