class BaseError {
    code: string;

    constructor(code: string) {
        this.code = code;
    }

    get message() {
        return 'Неизвестная ошибка';
    }
}

/** todo: Напишите класс CalculationError на основе BaseError */

class CalculationError extends BaseError {

}

const rangeError = new CalculationError('INVALID_RANGE');

console.log(rangeError.message);
