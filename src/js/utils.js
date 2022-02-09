const letterToGrid = {
	a: 0,
	b: 1,
	c: 2,
	d: 3,
	e: 4,
	f: 5,
	g: 6,
	h: 7,
}

/**
 *
 * @param {String} pos
 * @returns {{x:Number, grid:Number}}
 * @example
 * // return {0,0}
 * chessNotationToGridPosition('a1')
 */
export function chessNotationToGridPosition(pos) {
	const y = letterToGrid[pos[0]]
	const x = pos[1] - 1
	return { x, y }
}
