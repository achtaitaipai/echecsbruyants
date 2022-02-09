/**
 *
 * @param {HTMLElement} canvas
 */
export default function Chessboard(canvas) {
	this.ctx = canvas.getContext('2d')
	this.width = canvas.width
	this.height = canvas.width
	this.cellWidth = this.width / 8
	this.cellHeight = this.height / 8
	this.draw = function () {
		this.ctx.clearRect(0, 0, this.width, this.height)
		for (let index = 0; index < 64; index++) {
			const y = Math.floor(index / 8)
			const x = index - y * 8
			const color = 'rgb(233, 244, 251)'
			this.ctx.strokeStyle = color
			this.ctx.strokeRect(x * this.cellWidth, y * this.cellHeight, this.cellWidth, this.cellHeight)
		}
	}
}
