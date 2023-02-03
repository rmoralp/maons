const BOTS_USER_AGENTS = [
  'googlebot',
  'google-structured-data-testing-tool',
  'bingbot',
  'linkedinbot',
  'mediapartners-google',
  'googlebot-image',
  'googlebot-news',
  'googlebot-video'
]

export const isBot = userAgent => {
  return userAgent
    ? BOTS_USER_AGENTS.some(ua => userAgent.toLowerCase().includes(ua))
    : false
}
