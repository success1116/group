radio.onReceivedNumber(function (receivedNumber) {
    music.play(music.stringPlayable("C D E F G A B C5 ", 100), music.PlaybackMode.InBackground)
    basic.showString("stop")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    radio.setGroup(0)
})
input.onButtonPressed(Button.A, function () {
    radio.setGroup(5)
    basic.showString("5")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(0)
})
radio.onReceivedString(function (receivedString) {
    music.play(music.stringPlayable("C5 B A G F E D C ", 100), music.PlaybackMode.InBackground)
    basic.showString(receivedString)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    radio.setGroup(6)
    radio.sendString(receivedString)
    radio.setGroup(5)
})
basic.forever(function () {
	
})
