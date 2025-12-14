const mySumm = (a: number, b: number): number => a + b;

const palneBaggeChecker = (width: number, height: number, depth: number): string => {
	const demensionsSumm = width + height + depth;

	if (demensionsSumm > 100) {
		const amount = demensionsSumm * 100;

		return `should pay ${amount}` ;
	}

	return 'not should pay';
}
