function mult(x, y) {
	if (y === 0) {
		throw new Error("You can't divide by zero.");
	}
	return Math.round(x * y);
}

// describe(' divide function', () => {
// 	describe('when given to integers', () => {
// 		it('should return a division result', () => {});
// 	});
// });

it('should return a division result', () => {
	const [x, y, expected] = [40, 4, 160];
	const result = mult(x, y);
	expect(result).toEqual(expected);
});
