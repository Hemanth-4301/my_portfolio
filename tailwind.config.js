/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        primary: {
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81"
        },
        secondary: {
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A"
        },
        accent: {
          100: "#F5F5FF",
          200: "#EBEBFF",
          300: "#D6D6FF",
          400: "#C2C2FF",
          500: "#ADADFF",
          600: "#8A8AFF",
          700: "#6666FF",
          800: "#4D4DFF",
          900: "#3333FF"
        },
        dark: {
          100: "#D1D2D6",
          200: "#A3A6AD",
          300: "#767A85",
          400: "#494D5C",
          500: "#1C2033",
          600: "#161A29",
          700: "#101320",
          800: "#0B0D16",
          900: "#05060C"
        }
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      }
    }
  },
  plugins: []
}