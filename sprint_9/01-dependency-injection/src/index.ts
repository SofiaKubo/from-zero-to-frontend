/* Напишите интерфейс Logger с методом log */
interface Logger {
  log(message: string): void;
}

type Status = 'open' | 'in-progress' | 'closed';

const getCurrentTime = () => new Date().toLocaleString();

class Task {
  title: string;
  status: Status;
  logger: Logger;

  /* Конструктор должен получать зависимость типа Logger */
  constructor(logger: Logger, title: string) {
    this.logger = logger;
    this.title = title;
    this.status = 'open';

    /* Класс не должен напрямую использовать вывод в консоль */
    this.logger.log(`[${getCurrentTime()}] Задача «${this.title}» создана`);
  }

  start() {
    this.status = 'in-progress';

    this.logger.log(`[${getCurrentTime()}] Задача «${this.title}» взята в работу`);
  }

  close() {
    this.status = 'closed';

    this.logger.log(`[${getCurrentTime()}] Задача «${this.title}» завершена`);
  }
}

/* Передайте console в качестве объекта типа Logger */
const task = new Task(console, 'Первая');

task.start();

setTimeout(() => task.close(), 1000);
