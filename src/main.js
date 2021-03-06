import Chessboard from './js/chessboard'
// import pieces from './js/pieces'
import { Pawn, Rook, Knight, Bishop, Queen, King } from './js/pieces'
import { Pgn } from 'cm-pgn'
import FenParser from '@chess-fu/fen-parser'
import { rounds } from './pgn/pgns'

const prev = document.getElementById('prev-js')
const play = document.getElementById('play-js')
const next = document.getElementById('next-js')
const stop = document.getElementById('stop-js')
const delay = document.getElementById('delay-js')
const gameInput = document.getElementById('game-js')
const audioInputs = [...document.getElementsByClassName('audio-input')]
let audios = {}

let cursor = 0
let pgn, fens, moves, boards
const chessboard = new Chessboard(document.getElementById('chessboard'))

/**
 * Load a game
 * @param {Number} g number of the game to load
 */
function initGame(g) {
	cursor = 0
	pgn = new Pgn(rounds[g])
	fens = pgn.history.moves.map(m => {
		const fen = new FenParser(m.fen)
		return fen.ranks
	})
	const initialPosition = new FenParser('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
	fens.unshift(initialPosition.ranks)

	boards = []
	fens.forEach(fen => {
		const pieces = []
		fen.forEach((row, y) => {
			;[...row].forEach((p, x) => {
				if (p === 'P') {
					pieces.push(new Pawn({ y: x, x: 7 - y }, true))
				} else if (p === 'p') {
					pieces.push(new Pawn({ y: x, x: 7 - y }, false))
				} else if (p === 'r') {
					pieces.push(new Rook({ y: x, x: 7 - y }, false))
				} else if (p === 'R') {
					pieces.push(new Rook({ y: x, x: 7 - y }, true))
				} else if (p === 'n') {
					pieces.push(new Knight({ y: x, x: 7 - y }, false))
				} else if (p === 'N') {
					pieces.push(new Knight({ y: x, x: 7 - y }, true))
				} else if (p === 'b') {
					pieces.push(new Bishop({ y: x, x: 7 - y }, false))
				} else if (p === 'B') {
					pieces.push(new Bishop({ y: x, x: 7 - y }, true))
				} else if (p === 'q') {
					pieces.push(new Queen({ y: x, x: 7 - y }, false))
				} else if (p === 'Q') {
					pieces.push(new Queen({ y: x, x: 7 - y }, true))
				} else if (p === 'k') {
					pieces.push(new King({ y: x, x: 7 - y }, false))
				} else if (p === 'K') {
					pieces.push(new King({ y: x, x: 7 - y }, true))
				}
			})
		})
		boards.push(pieces)
	})
	moves = pgn.history.moves.map(m => {
		return m.flags
	})
}
/**
 * draw chessboard and pieces of current position of current game
 */
function draw() {
	chessboard.draw()

	boards[cursor].forEach(p => {
		p.draw(chessboard)
	})
}
/**
 * play the correspondant audio on new move
 */
function nextMove() {
	const m = moves[cursor]
	if (audios[m]) {
		audios[m].play()
	}
}

/////Events
//event on each audio input
audioInputs.forEach(el => {
	el.addEventListener('change', e => {
		const id = e.target.id
		// Make sure we have files to use
		if (!e.target.files.length) return

		// Create a blob that we can use as an src for our audio element
		const urlObj = URL.createObjectURL(e.target.files[0])

		// Create an audio element
		audios[id] = document.createElement('audio')

		// Clean up the URL Object after we are done with it
		audios[id].addEventListener('load', () => {
			URL.revokeObjectURL(urlObj)
		})

		// Append the audio element
		// document.body.appendChild(audio)

		// Allow us to control the audio
		audios[id].controls = 'true'

		// Set the src and start loading the audio from the file
		audios[id].src = urlObj
		audios[id].play()
	})
})

//event on select game
gameInput.addEventListener('change', e => {
	initGame(e.target.value)
})

//event on next btn
next.addEventListener('click', e => {
	nextMove()
	cursor = Math.min(cursor + 1, boards.length - 1)
	draw()
})

//event on prev btn
prev.addEventListener('click', e => {
	cursor = Math.max(cursor - 1, 0)
	draw()
})

//event on stop btn
stop.addEventListener('click', e => {
	cursor = 0
	if (playing) playPause()
	draw()
})

//play/pause game
let playingId
let playing = false
play.addEventListener('click', playPause)

function playPause() {
	playing = !playing
	play.innerHTML = playing ? '<i class="fa fa-pause" aria-hidden="true"></i>' : '<i class="fa fa-play" aria-hidden="true"></i>'
	if (playing) {
		playingId = window.setInterval(() => {
			nextMove()
			cursor++
			if (cursor >= boards.length - 1) playPause()
			else draw()
		}, delay.value * 1000)
	} else {
		clearInterval(playingId)
	}
}

initGame(0)
draw()
