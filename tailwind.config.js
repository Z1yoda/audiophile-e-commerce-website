/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{html,js}"], // Specify the files where Tailwind should look for classes
  theme: {
    extend: {}, // Extend the default Tailwind CSS theme if needed
  },
  plugins: [
    require('@tailwindcss/forms') // Enable Tailwind CSS forms plugin
  ],
};
