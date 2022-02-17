// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
          backgroundImage: (theme) => ({
            lasfotosbackground: "url('/background.jpg')",
          }),
        },
      },
      variants: {
        extend: {},
      },
      plugins: [],
};