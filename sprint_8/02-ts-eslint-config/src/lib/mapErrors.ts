export function mapErrors(errors: any): string {
    if (typeof errors === 'string') {
        return errors;
    }
    if (Array.isArray(errors)) {
        return errors.filter(error => typeof error === 'string').join('. ');
    }
    return 'Неизвестная ошибка';
}