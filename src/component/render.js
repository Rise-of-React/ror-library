function renderDOM(virtualDOM) {
  const $element = document.createElement(virtualDOM.tag);
  return $element;
}

export function render(virtualDom, container) {
  container.appendChild(renderDOM(virtualDom));
}
