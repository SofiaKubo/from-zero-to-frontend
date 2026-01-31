// TODO: Реализуйте абстрактный класс View
abstract class View {
  protected abstract tag: string;
  protected children: Array<View | string>;

  constructor(children: Array<View | string> = []) {
    this.children = children;
  }

  abstract render(): string;

  protected renderChildren() {
    return this.children
      .map((child) => {
        if (typeof child === 'string') {
          return child;
        }

        return child.render();
      })
      .join('');
  }

  protected renderHTML(attributes?: Record<string, string>) {
    const attributesString = Object.entries(attributes || {})
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('');

    const tag = this.tag;
    const childrenString = this.renderChildren();

    if (childrenString) {
      return `<${tag}${attributesString}>${childrenString}</${tag}>`;
    }

    return `<${tag}${attributesString} />`;
  }
}

// TODO: Наследуйте класс View
class Block extends View {
  tag = 'div';
  private id?: string;

  constructor(children: Array<View | string> = [], id?: string) {
    super(children);
    this.id = id;
  }

  render(): string {
    return this.renderHTML(this.id ? { id: this.id } : undefined);
  }
}

// TODO: Наследуйте класс View
class Picture extends View {
  protected tag = 'img';
  private src: string;
  private title: string;

  constructor(src: string, title: string) {
    super();
    this.src = src;
    this.title = title;
  }

  render() {
    return this.renderHTML({ src: this.src, alt: this.title });
  }
}

const image = new Picture('https://some.ru/logo', 'Какой-то логотип');
const header = new Block([image, 'ООО "Космические аппараты"'], 'Header');

console.log(header.render());
