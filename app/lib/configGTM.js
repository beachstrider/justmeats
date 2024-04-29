export const configGTM = () => {
  ;(function (w, d, s, l, i) {
    w[l] = w[l] || []
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : ''
    j.async = true
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
    f.parentNode.insertBefore(j, f)
  })(window, document, 'script', 'dataLayer', 'GTM-53HM3TQ7')

  window.dataLayer = window.dataLayer || []

  if (!window.localStorage.getItem('_already_visited')) {
    window.dataLayer.push({ event: 'first_visit' })
    window.localStorage.setItem('_already_visited', JSON.stringify(true))
  }

  window.document.addEventListener('click', ({ target }) => {
    window.dataLayer.push({ event: 'click' })

    if (target.matches('.btn-add-to-cart, .btn-add-to-cart *')) {
      window.dataLayer.push({ event: 'add_to_cart' })
    }

    // Hub Events
    if (
      target.matches(
        '#search-kb-card .rmzfa-search, #search-kb-card .rmzfa-search *',
      )
    ) {
      window.dataLayer.push({ event: 'Hub: FAQ Search' })
    }

    if (
      target.matches('#orders-card .card-body a, #orders-card .card-body a *')
    ) {
      window.dataLayer.push({ event: 'Hub: Orders Order Clicked' })
    }

    if (target.matches('.btn-checkout, .btn-checkout *')) {
      window.dataLayer.push({ event: 'begin_checkout' })
    }

    if (
      target.matches('.product-grid .img-wrapper, .product-grid .img-wrapper *')
    ) {
      window.dataLayer.push({ event: 'view_item' })
    }

    // if (target.matches('')) {
    //   console.debug('clicked')
    //   window.dataLayer.push({ event: '' })
    // }
  })

  window.document.addEventListener('submit', ({ target }) => {
    window.dataLayer.push({ event: 'form_submit' })

    if (target.matches('#messages-list .message.staff form')) {
      window.dataLayer.push({
        event: 'Conversation Staff First Response Receiv',
      })
      window.dataLayer.push({ event: 'Message Appreciated' })
    }

    if (target.matches('#orders-card .card-body form')) {
      window.dataLayer.push({ event: 'Hub: Orders Search' })
    }
  })

  window.addEventListener('storage', (event) => {
    if (event.key === 'rmz.chat.minimized') {
      if (!window.localStorage.getItem('rmz.chat.minimized')) {
        window.dataLayer.push({ event: 'Shoutbox Trigger Clicked' })
      } else {
        window.dataLayer.push({ event: 'Shoutbox Closed' })
      }
    }
    if (event.key === 'rmz.route') {
      const route = window.localStorage.getItem('rmz.chat.minimized')
      if (route === 'hub:index') {
        window.dataLayer.push({ event: 'Hub Shown' })
      }
      if (route === 'conversations:show') {
        window.dataLayer.push({ event: 'Conversation Started' })
      }
      if (route === 'kb:index') {
        window.dataLayer.push({ event: 'KB Shown' })
      }
    }

    if (event.key === 'rmz._vd' && window.localStorage.getItem('rmz._vd')) {
      const rmzInfo = JSON.parse(window.localStorage.getItem('rmz._vd'))
      if (rmzInfo?.email) {
        window.dataLayer.push({ event: 'detect_user' })
      }
    }
  })

  window.document.addEventListener('input', ({ target }) => {
    if (target.matches('input')) {
      if (!window.isFormStarted) {
        window.dataLayer.push({ event: 'form_start' })
        window.isFormStarted = true
      }
    }
  })

  window.document.addEventListener('scroll', () => {
    window.dataLayer.push({ event: 'scroll' })
  })
}
