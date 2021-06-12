const Table = ((_) => {
  const Private = Symbol();
  return class {
    constructor(parent) {}
    async load(url) {}
    _render() {}
  };
})();

const table = new Table('#data');
table.load();

//data load
//loading work

//rendering
//DOM related rendering functions

//native bind
//no dependency with platform

//value Object (VO)
//검증되지않은 데이터들을 검증된 데이터로

// const loader = new Loader();
// loader.load(json=>{
//   const renderer = new Renderer();
//   renderer.setData(json);
//   renderer.render();
// })

const Data = class {
  async getData() {
    throw 'getData must override';
  }
};

const JsonData = class extends Data {
  constructor(data) {
    super();
    this._data = data;
  }

  async getData() {
    if (typeof this.data == 'string') {
      const response = await fetch(this._data);
      return await response.json();
    } else return this._data;
  }
};

const Renderer = class {
  constructor() {}
  async render(data) {
    if (!(data instanceof Data)) throw 'invalid data type';
    const json = await data.getData();
    console.log(json);
  }
};
