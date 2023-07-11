class Component {
  #reference;
  constructor(element) {
    this.element = element;
    this.#reference;
  }

  build() {
    const item = document.createElement(this.element);
    this.#reference = item;
  }

  readReference() {
    return this.#reference;
  }

  render() {
    document.getElementById("main").appendChild(this.#reference);
  }
}

class Input extends Component {
  constructor(type, element = "input") {
    super(element);
    this.type = type;
  }
}

class Label extends Component {
  constructor(text, element = "label") {
    super(element);
    this.text = text;
  }
}

class Form extends Component {
  constructor(element = "form") {
    super(element);
  }

  addInput(tipo) {
    const newInput = new Input(tipo);
    newInput.build();
    const item = newInput.readReference();
    item.type = newInput.type;
    const render = () =>
      document.getElementsByTagName("form")[0].appendChild(item);
    render();
  }

  addLabel(text) {
    const newLabel = new Label(text);
    newLabel.build();
    const item = newLabel.readReference();
    item.innerText = text;
    const render = () =>
      document.getElementsByTagName("form")[0].appendChild(item);
    render();
  }
}

const formulario = new Form();

formulario.build();
formulario.render();
formulario.addLabel("Label teste:");
formulario.addInput("number");
