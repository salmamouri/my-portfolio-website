/** @type {import('tailwindcss').Config} */
module.exports = {

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#222831",
          secondary: "#00ADB5",
          accent: "#FFFFFF",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  plugins: [
    require('daisyui'),
  ],
}
