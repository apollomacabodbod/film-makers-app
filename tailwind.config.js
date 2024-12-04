/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["src/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {


      fontFamily: {
        'roboto': ["Roboto", "sans-serif"],
        'roboto-condensed': ["Roboto Condensed", "sans-serif"],
         'source-sans-pro': ["Source Sans 3", "serif"],
         'inter': ["Inter", "sans-serif"],
       },




       
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
    },


    screens: {

      'xs': '344px',


      'sm': '449px',

      'sm0': '447px',

      'sm0-0': '468px',
      // => @media (min-width: 640px) { ... }
      'sm1': '516px', //common use
      'sm1-1': '546px', //common use

      'sm2': '603px',

      'sm3': '640px',





      'md': '768px',


      'md1': '872px',
      // => @media (min-width: 768px) { ... }

      'md1-1': '980px',


      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }

  },
  plugins: [require("tailwindcss-animate")],
}
