class BaseError {
    code: string;

    constructor(code: string) {
        this.code = code;
    }

    get message() {
        return 'Неизвестная ошибка';
    }
}

class CalculationError extends BaseError {
  constructor(code: string) {
    super(code);
}

  get message() {
    switch (this.code) {
      case 'DIVISION_BY_ZERO':
        return 'Ошибка деления на ноль';
      case 'INVALID_RANGE':
        return 'Число должно быть в пределах от 5 до 10';
      default:
        return super.message;
    }
  }
}

const rangeError = new CalculationError('INVALID_RANGE');

console.log(rangeError.message);
