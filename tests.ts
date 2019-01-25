input.onButtonPressed(Button.B, () => {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    blockyTalkyBLE.sendMessageWithStringValue("Button", "B")
})

blockyTalkyBLE.onStringReceived("show",  ({ stringValue }) =>  {
    basic.showString(stringValue)
})

blockyTalkyBLE.onNumberReceived("show",  ({ numberValue }) =>  {
    basic.showNumber(numberValue)
})
bluetooth.onBluetoothConnected(() => {
    basic.showString("c")
})
basic.showLeds(`
    # # . . .
    # . # . .
    # # . . .
    # . # . .
    # # . . .
    `)
