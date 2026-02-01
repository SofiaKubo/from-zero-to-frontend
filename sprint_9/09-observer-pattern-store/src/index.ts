type ObserverFn<T> = (state: T) => void;

interface Observable<T> {
  subscribe(fn: ObserverFn<T>): void;
  unsubscribe(fn: ObserverFn<T>): void;
  notify(data: T): void;
}

class Store<T> implements Observable<T> {
  private state: T;
  private subscribers: ObserverFn<T>[] = [];

  constructor(initialState: T) {
    this.state = initialState;
  }

  subscribe(fn: ObserverFn<T>) {
    /*
            Реализуйте метод subscribe, который
            — принимает функцию,
            — добавляет её в список подписчиков.
        */
    this.subscribers.push(fn);
  }

  unsubscribe(fn: ObserverFn<T>) {
    /*
            Реализуйте метод unsubscribe, который
            — принимает функцию,
            — удаляет её из списка подписчиков.
        */
    this.subscribers = this.subscribers.filter((subscriber) => subscriber !== fn);
  }

  notify(data: T) {
    /*
           Реализуйте метод notify, который:
           — принимает данные,
           — запускает все функции-подписчики с этими данными.
        */
    this.subscribers.forEach((subscriber) => subscriber(data));
  }

  update(newState: T) {
    this.state = newState;
    this.notify(this.state);
  }
}

const store = new Store<string>('');

store.subscribe(console.log);

store.update('Василий');
store.update('Пётр');
store.update('Иван');
