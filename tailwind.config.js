const defaultTheme = require("tailwindcss/defaultTheme")

export default {
    theme: {
        extend: {
            colors: {
                terracotta80: "#BF714D",
                blue80: "#6AD3E5",
                darkblue: "#111827"
            },
            fontFamily: {
                sans: ["TexGyreHeros", ...defaultTheme.fontFamily.sans],
            },
            fontWeight: {
                bold: "600"
            },
            fontSize: {
                sm: ["1rem", "1.5rem"],
                base: ["1.125rem", "1.75rem"],
                lg: ["1.25rem", "1.75rem"],
                xl: ["1.5rem", "2rem"],
                "2xl": ["1.875rem", "2.25rem"],
                "3xl": ["2.25rem", "3rem"]
            }
        }
    }
}