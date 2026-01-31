class EmailInput {
  value: string;

  constructor() {
    this.value = '';
  }

  getErrors(): string | undefined {
    if (!this.value.includes('@')) {
      return 'Введён невалидный email';
    }

    return undefined;
  }
}

interface Editor<Data> {
  initialize: (value: Data) => void;
  validate: () => boolean;
  getValue: () => Data;
}

class EmailEditorAdapter implements Editor<string> {
  constructor(private input: EmailInput) {}

  /* реализуйте метод initialize */
  initialize(value: string): void {
    this.input.value = value;
  }

  /* реализуйте метод validate */
  validate(): boolean {
    return this.input.getErrors() === undefined;
  }

  /* реализуйте метод getValue */
  getValue(): string {
    return this.input.value;
  }
}

const emailInput = new EmailInput();
const emailEditor = new EmailEditorAdapter(emailInput);

emailEditor.initialize('hello@some.ty');

console.log(emailEditor.getValue());

if (emailEditor.validate()) {
  console.log('Email сохранён!');
}
