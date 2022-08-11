/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': 'Manrope',
      }
    }
  },
  // plugins: [
  //   plugin(({ addUtilities }) => {
  //     addUtilities({
  //       // 😎 similar to `@apply`
  //       btn: `px-4 py-1 rounded-full bg-red-800 text-white`,
  //       'body-text': `font-serif leading-relaxed tracking-wide text-gray-800`,
  //     });
  //   }),
  // ]
}
