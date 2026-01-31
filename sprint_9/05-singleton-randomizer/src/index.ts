class Randomaizer {
  private participants: string[];

  /* TODO: сделайте статичное приватное поле для хранения инстанса */
  private static instance: Randomaizer;

  /* TODO: сделайте конструктор приватным */
  private constructor() {
    this.participants = [];
  }

  /* TODO: реализуйте статичный метод getInstance, возвращающий инстанс */
  static getInstance(): Randomaizer {
    if (!Randomaizer.instance) {
      Randomaizer.instance = new Randomaizer();
    }
    return Randomaizer.instance;
  }

  private selectRandomIndex() {
    return Math.round(Math.random() * (this.participants.length - 1));
  }

  addParticipant(name: string) {
    this.participants.push(name);
  }

  finish() {
    const winner = this.participants[this.selectRandomIndex()];

    console.log(`Розыгрыш завершён! Количество участников: ${this.participants.length}`);
    console.log(`Победителем становится ${winner}! 🎉`);

    this.participants = [];

    return winner;
  }
}

Randomaizer.getInstance().addParticipant('Егор');
Randomaizer.getInstance().finish();

Randomaizer.getInstance().addParticipant('Игорь');
Randomaizer.getInstance().addParticipant('Вадим');
Randomaizer.getInstance().addParticipant('Сергей');
Randomaizer.getInstance().finish();
