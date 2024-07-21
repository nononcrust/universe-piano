import colors from "tailwindcss/colors";

export const theme = {
  colors: {
    primary: "#6857FF",
    primaryLighter: colors.purple[200],
    primaryDark: "#5E4EE6",
    primaryContent: "#F3F2FF",
    secondary: colors.gray[100],
    secondaryDark: colors.gray[200],
    main: colors.gray[900],
    sub: colors.gray[500],
    divider: colors.gray[300],
    border: colors.gray[300],
    ring: colors.black,
    error: colors.red[500],
    errorLight: colors.red[400],
    errorLighter: colors.red[200],
    errorDark: colors.red[600],
    success: colors.green[500],
    successLight: colors.green[400],
    content: colors.gray[100],
    contentLight: colors.gray[50],
    kakao: "#FFEB00",
  },
} as const;
