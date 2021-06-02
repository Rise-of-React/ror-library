export function helper(type, props, ...children) {
  return { type, props, children };
}

{
  /*
<ul class='list'>
  <li>item1</li>
  <li>item2</li>
</ul>
*/
}

const example = helper('ul', { className: 'list' }, helper('li', {}, 'item1'), helper('li', {}, 'item2'));
console.log(example);
