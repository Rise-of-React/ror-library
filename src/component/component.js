class Component {
  $target = null;

  constructor(target, props) {
    this.$target = target;
    this.$props = props;

    this.render();
  }

  render() {
    this.$target.innerHTML = template();
  }

  template() {
    return `<div>You need to define template source</div>`;
  }
}

export default Component;
