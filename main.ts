radio.onReceivedNumber(function (receivedNumber) {
    AUXILIAR = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(201)
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let AUXILIAR = 0
basic.showIcon(IconNames.TShirt)
radio.setGroup(1)
AUXILIAR = 0
PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Color)
let strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (AUXILIAR == 11) {
        if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.blue)) {
            radio.sendNumber(200)
            basic.pause(6000)
            cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x0000ff)
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        }
    }
    if (AUXILIAR == 12) {
        if (PlanetX_AILens.colorCheck(PlanetX_AILens.ColorLs.red)) {
            radio.sendNumber(200)
            cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        }
    }
})
