function createElement(node) {
  if (typeof node === 'string') {
    // text node process
    return document.createTextNode(node);
  }
  // element node process
  const $el = document.createElement(node.type);
  node.children.map(createElement).forEach($el.appendChild.bind($el));
  return $el;
}

function updateElement($parent, newNode, oldNode, index = 0) {
  //when newNode is added
  if (!oldNode) {
    $parent.appendChild(createElement(newNode));
  }
  //when oldNode to be deleted
  else if (!newNode) {
    $parent.removeChild($parent.childNode[index]);
  }
  //when node changed
  else if (notifyChange(newNode, oldNode)) {
    $parent.replaceChild(createElement(newNode), $parent.childNode[index]);
  }
  //compare children
  else if (newNode.type) {
    const newLength = newNode.children.length;
    const oldLength = oldNode.children.length;

    for (let i = 0; i < newLength || i < oldLength; ++i) {
      updateElement($parent.childNodes[index], newNode.children[i], oldNode.children[i], i);
    }
  }
}

function notifyChange(firstNode, secondNode) {
  return (
    typeof firstNode !== secondNode ||
    (typeof firstNode === 'string' && firstNode !== secondNode) ||
    firstNode.type !== secondNode.type
  );
}

export default RorElement = {
  notifyChange: notifyChange,
  updateElement: updateElement,
  createElement: createElement,
};
