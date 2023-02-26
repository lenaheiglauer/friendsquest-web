const defaultTheme = require("tailwindcss/defaultTheme")

export default {
    theme: {
        extend: {
            colors: {
                terracotta80: "rgba(175, 78, 33, 0.8)",
                blue80: "rgba(6, 182, 212, 0.8)",
                darkblue: "rgb(17, 24, 39)"
            },
            fontFamily: {
                sans: ["TexGyreHeros", ...defaultTheme.fontFamily.sans],
            },
            fontWeight: {
                bold: "600"
            }
        }
    }
}