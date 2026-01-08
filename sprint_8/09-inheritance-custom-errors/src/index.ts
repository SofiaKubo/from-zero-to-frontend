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
}

const rangeError = new CalculationError('INVALID_RANGE');

console.log(rangeError.message);
