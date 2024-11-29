"use client"

import { ThemeProvider } from 'styled-components'
import { I18nextProvider } from 'react-i18next'
import StyledComponentsRegistry from 'lib/registry'
import { GlobalStyles } from 'styles/GlobalStyles'
import { theme } from 'styles/theme'
import i18n from 'lib/i18n'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Gravité0 - Parapente Tandem & Formation à Verbier" />
        <meta property="og:description" content="Découvrez le parapente en tandem et formations à Verbier" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gravite0.com" />
        <link rel="canonical" href="https://gravite0.com" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              {children}
            </ThemeProvider>
          </I18nextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}