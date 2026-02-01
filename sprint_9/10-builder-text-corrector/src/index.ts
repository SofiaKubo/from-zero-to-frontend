type Rule = {
  search: string[];
  replaceTo: string;
};

class Corrector {
  constructor(public rules: Rule[] = []) {}

  handle(text: string) {
    return this.rules.reduce((value, rule) => {
      return rule.search.reduce((value, search) => {
        return value.replace(new RegExp(search, 'g'), rule.replaceTo);
      }, value);
    }, text);
  }
}

class CorrectorBuilder {
  private corrector: Corrector;

  constructor() {
    this.corrector = new Corrector();
  }

  addRule(search: string | string[], replaceTo: string) {
    /* TODO: реализуйте метод addRule */
    const searchArray = Array.isArray(search) ? search : [search];
    this.corrector.rules.push({ search: searchArray, replaceTo });
    return this;
  }

  getResult() {
    /* TODO: реализуйте метод getResult */
    return this.corrector;
  }
}

const builder = new CorrectorBuilder().addRule('жы', 'жи').addRule('шы', 'ши');

builder.addRule(['твой', 'мой'], 'наш');

const corrector = builder.getResult();

console.log(corrector.handle('Этот твой кот испортил мой любимый диван! Ну что за глупое жывотное!'));

// Этот наш кот испортил наш любимый диван! Ну что за глупое животное!
