class Component {
  constructor(element) {
    this.element = element;
    this.object = 0;
  }

  build() {
    const item = document.createElement(this.element);
    this.object = item;
  }

  render() {
    document.getElementById("main").appendChild(this.object);
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
    newInput.object.type = newInput.type;
    const render = () =>
      document.getElementsByTagName("form")[0].appendChild(newInput.object);
    render();
  }

  addLabel(text) {
    const newLabel = new Label(text);
    newLabel.build();
    newLabel.object.innerText = text;
    const render = () =>
      document.getElementsByTagName("form")[0].appendChild(newLabel.object);
    render();
  }
}

const formulario = new Form();

formulario.build();
formulario.render();
formulario.addLabel("Label teste:");
formulario.addInput("number");
