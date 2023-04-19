let strip: neopixel.Strip = null
let song = 0
dfplayermini.connect(SerialPin.P0, SerialPin.P1)
dfplayermini.setVolume(20)
let mood = pins.analogReadPin(AnalogPin.P10)
pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
basic.forever(function () {
    serial.writeValue("value", pins.analogReadPin(AnalogPin.P10))
    if (mood >= 0 && mood <= 204) {
        strip = neopixel.create(DigitalPin.P0, 22, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        strip.setBrightness(255)
    } else if (mood >= 205 && mood <= 409) {
        strip = neopixel.create(DigitalPin.P0, 22, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.setBrightness(255)
    } else if (mood >= 410 && mood <= 614) {
        strip = neopixel.create(DigitalPin.P0, 22, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        strip.setBrightness(255)
    } else if (mood >= 615 && mood <= 819) {
        strip = neopixel.create(DigitalPin.P0, 22, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        strip.setBrightness(255)
    } else if (mood >= 820 && mood <= 1023) {
        strip = neopixel.create(DigitalPin.P0, 22, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        strip.setBrightness(255)
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        dfplayermini.press(dfplayermini.playType.PlayNext)
    }
})
