const rootElement = document.getElementById('root') as HTMLElement

export const rootShadowDom = rootElement.attachShadow({
  mode: 'closed'
});
