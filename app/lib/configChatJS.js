export const configChatJS = () => {
  window._support = window._support || { ui: {}, user: {} }
  window._support['account'] = 'justmeats'
  window._support['ui']['contactMode'] = 'mixed'
  window._support['ui']['enableKb'] = 'true'
  window._support['ui']['styles'] = {
    widgetColor: 'rgb(178, 40, 58)',
  }
  window._support['ui']['shoutboxFacesMode'] = 'default'
  window._support['ui']['shoutboxHeaderLogo'] = true
  window._support['ui']['widget'] = {
    icon: 'chat',
    displayOn: 'all',
    fontSize: 'default',
    allowBotProcessing: true,
    slug: 'just-meats-chat-slash-contact-form-shoutbox-8e3b2a708f0e830c',
    label: {
      text: 'Let us know if you have any questions! &#128522;',
      mode: 'none',
      delay: 3,
      duration: 30,
    },
    position: 'bottom-left',
    mobilePosition: 'bottom-right',
  }
  window._support['apps'] = {
    recentConversations: {},
    faq: { enabled: true },
    orders: { enabled: true },
  }
}
