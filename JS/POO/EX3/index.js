class Component {
  #reference;
  constructor(element) {
    this.element = element;
    this.#reference;
  }

  build(id) {
    const item = document.createElement(this.element);
    if (id) item.id = id;
    this.#reference = item;
  }

  readReference() {
    return this.#reference;
  }

  render(father, item) {
    const Father = father ?? "main";
    const Item = item ?? this.#reference;
    document.getElementById(Father).appendChild(Item);
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
    newInput.render(this.element);
  }

  addLabel(text) {
    const newLabel = new Label(text);
    newLabel.build();
    const item = newLabel.readReference();
    item.innerText = text;
    newLabel.render(this.element);
  }
}

const formulario = new Form();

formulario.build('form');
formulario.render();
formulario.addLabel("Label teste:");
formulario.addInput("number");
