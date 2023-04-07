import React from 'react';

declare module '@mui/material/styles' {
  interface Palette {
    light: { [key: string]: string };
    dark: { [key: string]: string };
    danger: { [key: string]: string };
    primary: { [key: string]: string };
    success: { [key: string]: string };
  }

  interface PaletteOptions {
    light?: { [key: string]: string };
    dark?: { [key: string]: string };
    danger?: { [key: string]: string };
    primary?: { [key: string]: string };
    success?: { [key: string]: string };
  }

  interface TypographyVariants {
    regular_text_14: React.CSSProperties;
    regular_text_16: React.CSSProperties;
    medium_text_14: React.CSSProperties;
    bold_text_14: React.CSSProperties;
    large: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    regular_text_14?: React.CSSProperties;
    regular_text_16?: React.CSSProperties;
    medium_text_14?: React.CSSProperties;
    bold_text_14?: React.CSSProperties;
    large?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    regular_text_14: true;
    regular_text_16: true;
    medium_text_14: true;
    bold_text_14: true;
    large: true;
  }
}
