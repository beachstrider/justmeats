import { StrictMode, startTransition } from 'react'
import { hydrateRoot } from 'react-dom/client'

import { RemixBrowser } from '@remix-run/react'

if (!window.location.origin.includes('webcache.googleusercontent.com')) {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>,
    )
  })
}
