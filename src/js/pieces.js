import { chessNotationToGridPosition } from './utils'
/**
 *
 * @param {String} pos
 * @param {Boolean} isWhite
 */
export function Pawn(pos, isWhite) {
	this.cnPos = pos
	this.pos = pos
	this.isWhite = isWhite

	/**
	 *
	 * @param {Object} chessboard
	 */
	this.draw = function (chessboard) {
		const ctx = chessboard.ctx
		const width = chessboard.cellWidth
		const height = chessboard.cellHeight
		const x = this.pos.x * width + width / 2
		const y = this.pos.y * height + height / 2
		const r = width * 0.3 * 0.5

		ctx.beginPath()
		ctx.arc(x, y, r, 0, 2 * Math.PI, false)
		if (this.isWhite) {
			ctx.strokeStyle = 'rgb(0, 0, 0)'
			ctx.stroke()
		} else {
			ctx.fillStyle = 'rgb(0, 0, 0)'
			ctx.fill()
		}
		ctx.closePath()
	}
}

/**
 *
 * @param {String} pos
 * @param {Boolean} isWhite
 */
export function Rook(pos, isWhite) {
	this.cnPos = pos
	this.pos = pos
	this.isWhite = isWhite

	/**
	 *
	 * @param {Object} chessboard
	 */
	this.draw = function (chessboard) {
		const ctx = chessboard.ctx
		const width = chessboard.cellWidth
		const height = chessboard.cellHeight
		const rectWidth = width * 0.4
		const rectHeight = height * 0.6
		const x = this.pos.x * width + (width - rectWidth) * 0.5
		const y = this.pos.y * height + (height - rectHeight) * 0.5
		const r = width * 0.3 * 0.5

		if (this.isWhite) {
			ctx.strokeStyle = 'rgb(0,0,0)'
			ctx.strokeRect(x, y, rectWidth, rectHeight)
		} else {
			ctx.fillStyle = 'rgb(0,0,0)'
			ctx.fillRect(x, y, rectWidth, rectHeight)
		}
	}
}

/**
 *
 * @param {String} pos
 * @param {Boolean} isWhite
 */
export function Knight(pos, isWhite) {
	this.cnPos = pos
	this.pos = pos
	this.isWhite = isWhite

	/**
	 *
	 * @param {Object} chessboard
	 */
	this.draw = function (chessboard) {
		const ctx = chessboard.ctx
		const width = chessboard.cellWidth
		const height = chessboard.cellHeight
		const horizontalW = width * 0.5
		const horizontalH = width * 0.2
		const verticalW = width * 0.3
		const verticalH = width * 0.6
		const x = -verticalW * 0.5
		const y = -verticalH * 0.5
		const tx = this.pos.x * width + horizontalW
		const ty = this.pos.y * height + horizontalW

		ctx.translate(tx, ty)
		if (!this.isWhite) ctx.scale(-1, 1)
		ctx.beginPath()
		ctx.moveTo(x, y)
		ctx.lineTo(x + horizontalW, y)
		ctx.lineTo(x + horizontalW, y + horizontalH)
		ctx.lineTo(x + verticalW, y + horizontalH)
		ctx.lineTo(x + verticalW, y + verticalH)
		ctx.lineTo(x, y + verticalH)
		ctx.closePath()
		ctx.setTransform(1, 0, 0, 1, 0, 0)
		ctx.strokeStyle = 'rgb(0, 0, 0)'
		if (this.isWhite) {
			ctx.strokeStyle = 'rgb(0, 0, 0)'
			ctx.stroke()
		} else {
			ctx.fillStyle = 'rgb(0, 0, 0)'
			ctx.fill()
		}
	}
}

/**
 *
 * @param {String} pos
 * @param {Boolean} isWhite
 */
export function Bishop(pos, isWhite) {
	this.cnPos = pos
	this.pos = pos
	this.isWhite = isWhite

	/**
	 *
	 * @param {Object} chessboard
	 */
	this.draw = function (chessboard) {
		const ctx = chessboard.ctx
		const width = chessboard.cellWidth
		const height = chessboard.cellHeight
		const tWidth = width * 0.4
		const tHeight = height * 0.6
		const x = this.pos.x * width + width * 0.5
		const y = this.pos.y * height + (height - tHeight) * 0.5

		ctx.beginPath()
		ctx.moveTo(x, y)
		ctx.lineTo(x + tWidth * 0.5, y + tHeight)
		ctx.lineTo(x - tWidth * 0.5, y + tHeight)
		ctx.closePath()
		ctx.strokeStyle = 'rgb(0, 0, 0)'
		if (this.isWhite) {
			ctx.strokeStyle = 'rgb(0, 0, 0)'
			ctx.stroke()
		} else {
			ctx.fillStyle = 'rgb(0, 0, 0)'
			ctx.fill()
		}
	}
}

/**
 *
 * @param {String} pos
 * @param {Boolean} isWhite
 */
export function Queen(pos, isWhite) {
	this.cnPos = pos
	this.pos = pos
	this.isWhite = isWhite

	/**
	 *
	 * @param {Object} chessboard
	 */
	this.draw = function (chessboard) {
		const ctx = chessboard.ctx
		const width = chessboard.cellWidth
		const height = chessboard.cellHeight
		const hWidth = width * 0.6
		const hHeight = width * 0.1
		const vWidth = height * 0.1
		const vHeight = height * 0.6
		const x = (width - vWidth) * 0.5 - width * 0.5
		const y = (height - vHeight) * 0.5 - height * 0.5
		const tx = this.pos.x * width + width * 0.5
		const ty = this.pos.y * height + height * 0.5

		ctx.translate(tx, ty)
		ctx.rotate((45 * Math.PI) / 180)
		ctx.beginPath()
		ctx.moveTo(x, y)
		ctx.lineTo(x + vWidth, y)
		ctx.lineTo(x + vWidth, y + (vHeight - hHeight) * 0.5)
		ctx.lineTo(x + vWidth + (hWidth - vWidth) * 0.5, y + (vHeight - hHeight) * 0.5)
		ctx.lineTo(x + vWidth + (hWidth - vWidth) * 0.5, y + (vHeight + hHeight) * 0.5)
		ctx.lineTo(x + vWidth, y + (vHeight + hHeight) * 0.5)
		ctx.lineTo(x + vWidth, y + vHeight)
		ctx.lineTo(x, y + vHeight)
		ctx.lineTo(x, y + (vHeight + hHeight) * 0.5)
		ctx.lineTo(x - (hWidth - vWidth) * 0.5, y + (vHeight + hHeight) * 0.5)
		ctx.lineTo(x - (hWidth - vWidth) * 0.5, y + (vHeight - hHeight) * 0.5)
		ctx.lineTo(x, y + (vHeight - hHeight) * 0.5)
		ctx.closePath()
		ctx.setTransform(1, 0, 0, 1, 0, 0)
		ctx.strokeStyle = 'rgb(0, 0, 0)'
		if (this.isWhite) {
			ctx.strokeStyle = 'rgb(0, 0, 0)'
			ctx.stroke()
		} else {
			ctx.fillStyle = 'rgb(0, 0, 0)'
			ctx.fill()
		}
	}
}

/**
 *
 * @param {String} pos
 * @param {Boolean} isWhite
 */
export function King(pos, isWhite) {
	this.cnPos = pos
	this.pos = pos
	this.isWhite = isWhite

	/**
	 *
	 * @param {Object} chessboard
	 */
	this.draw = function (chessboard) {
		const ctx = chessboard.ctx
		const width = chessboard.cellWidth
		const height = chessboard.cellHeight
		const hWidth = width * 0.6
		const hHeight = width * 0.2
		const vWidth = height * 0.2
		const vHeight = height * 0.6
		const x = (width - vWidth) * 0.5 - width * 0.5
		const y = (height - vHeight) * 0.5 - height * 0.5
		const tx = this.pos.x * width + width * 0.5
		const ty = this.pos.y * height + height * 0.5

		ctx.translate(tx, ty)
		ctx.beginPath()
		ctx.moveTo(x, y)
		ctx.lineTo(x + vWidth, y)
		ctx.lineTo(x + vWidth, y + (vHeight - hHeight) * 0.5)
		ctx.lineTo(x + vWidth + (hWidth - vWidth) * 0.5, y + (vHeight - hHeight) * 0.5)
		ctx.lineTo(x + vWidth + (hWidth - vWidth) * 0.5, y + (vHeight + hHeight) * 0.5)
		ctx.lineTo(x + vWidth, y + (vHeight + hHeight) * 0.5)
		ctx.lineTo(x + vWidth, y + vHeight)
		ctx.lineTo(x, y + vHeight)
		ctx.lineTo(x, y + (vHeight + hHeight) * 0.5)
		ctx.lineTo(x - (hWidth - vWidth) * 0.5, y + (vHeight + hHeight) * 0.5)
		ctx.lineTo(x - (hWidth - vWidth) * 0.5, y + (vHeight - hHeight) * 0.5)
		ctx.lineTo(x, y + (vHeight - hHeight) * 0.5)
		ctx.closePath()
		ctx.setTransform(1, 0, 0, 1, 0, 0)
		ctx.strokeStyle = 'rgb(0, 0, 0)'
		if (this.isWhite) {
			ctx.strokeStyle = 'rgb(0, 0, 0)'
			ctx.stroke()
		} else {
			ctx.fillStyle = 'rgb(0, 0, 0)'
			ctx.fill()
		}
	}
}

// export pieces = [
// 	new Rook('a1', true),
// 	new Knight('b1', true),
// 	new Bishop('c1', true),
// 	new Queen('d1', true),
// 	new King('e1', true),
// 	new Bishop('f1', true),
// 	new Knight('g1', true),
// 	new Rook('a1', true),
// 	new Rook('h1', true),
// 	new Pawn('a2', true),
// 	new Pawn('b2', true),
// 	new Pawn('c2', true),
// 	new Pawn('d2', true),
// 	new Pawn('e2', true),
// 	new Pawn('f2', true),
// 	new Pawn('g2', true),
// 	new Pawn('h2', true),
// 	new Rook('a8', false),
// 	new Knight('b8', false),
// 	new Bishop('c8', false),
// 	new Queen('d8', false),
// 	new King('e8', false),
// 	new Bishop('f8', false),
// 	new Knight('g8', false),
// 	new Rook('a8', false),
// 	new Rook('h8', false),
// 	new Pawn('a7', false),
// 	new Pawn('b7', false),
// 	new Pawn('c7', false),
// 	new Pawn('d7', false),
// 	new Pawn('e7', false),
// 	new Pawn('f7', false),
// 	new Pawn('g7', false),
// 	new Pawn('h7', false),
// ]
