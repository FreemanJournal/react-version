
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class',
  important:true,
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora',serif",
        dm: "'DM Mono', monospace",
        tajawal: "'Tajawal',serif",
      },
      rotate: {
        360: "360deg",
      },
      keyframes: {
        bounceX: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-20px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        bounceX: "bounceX 1s ease infinite",
      },
      outline: {
        red: ["1px solid #F2856D", "5px"],
      },
    },
  },
  variants: {
    extend: {
      animation: [
        "responsive",
        "motion-safe",
        "motion-reduce",
        "hover",
        "focus",
      ],
      outline: ["hover", "active"],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
