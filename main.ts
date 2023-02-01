let i = 0
let bclicked = 0
let base = 0
let altura = 0
let hipotenusa = 0
function interact() {
    
    basic.clearScreen()
    base = inputEnters("Tria base")
    altura = inputEnters("Tria altura")
}

function teoremaPitagoras(base: number, altura: number): number {
    let c = (altura ** 2 + base ** 2) ** 0.5
    return c
    let hypotenusa = teoremaPitagoras(base, altura)
    console.log("El resultado de la hypotenusa és: )" + hypotenusa)
}

function inputEnters(missatge: string): number {
    
    let valor = 0
    basic.showString(missatge)
    while (bclicked < 1) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("A")
            basic.clearScreen()
            valor += 1
            basic.showString("" + ("" + valor))
        } else if (input.buttonIsPressed(Button.B)) {
            basic.showString("B")
            bclicked += 1
        }
        
        basic.pause(50)
    }
    basic.clearScreen()
    bclicked = 0
    return valor
}

function showIcon() {
    basic.clearScreen()
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Butterfly)
        basic.pause(100)
        basic.showIcon(IconNames.Diamond)
        basic.pause(100)
    }
    basic.clearScreen()
    basic.showString("Pitagoras")
    basic.clearScreen()
}

basic.forever(function on_forever() {
    music.setBuiltInSpeakerEnabled(true)
    let bclicked = 0
    showIcon()
    basic.showString("Càlcul hipotenusa")
    interact()
    let hipotenusa = teoremaPitagoras(base, altura)
    basic.showNumber(hipotenusa)
    basic.pause(500)
})
