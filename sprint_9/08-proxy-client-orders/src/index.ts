interface IClient {
  name: string;
  makeOrder(meal: string): void;
}

class Client implements IClient {
  constructor(public name: string) {}

  makeOrder(meal: string) {
    console.log(`${this.name} заказал ${meal}`);
  }
}

class ClientProxy implements IClient {
  private client: IClient;

  /* TODO: Объявите приватный счетчик заказов */
  private orderCount: number;

  constructor(client: IClient) {
    this.client = client;

    /* TODO: Инициализируйте счётчик нулём */
    this.orderCount = 0;
  }

  get name() {
    return this.client.name;
  }

  set name(value: string) {
    this.client.name = value;
  }

  makeOrder(meal: string) {
    /* TODO: Реализуйте метод makeOrder:
            1. Выполните исходный makeOrder
            2. Увеличьте счётчик
            3. Если клиент сделал 5 заказов, выведите строку:
                "{имя}, поздравляем! Теперь вы наш постоянный клиент и получаете скидку 10%!"
         */
    this.client.makeOrder(meal);
    this.orderCount += 1;
    if (this.orderCount === 5) {
      console.log(`${this.client.name}, поздравляем! Теперь вы наш постоянный клиент и получаете скидку 10%!`);
    }
  }
}

const client = new ClientProxy(new Client('Игорь'));

client.makeOrder('салат Оливье');
client.makeOrder('шашлык');
client.makeOrder('пюре с котлетой');
client.makeOrder('салат Оливье');
client.makeOrder('борщ');
