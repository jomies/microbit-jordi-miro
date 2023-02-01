i = 0
bclicked = 0
base = 0
altura = 0
hipotenusa = 0

def interact():
    global base, altura
    basic.clear_screen()
    base = inputEnters("Tria base")
    altura = inputEnters("Tria altura")

def teoremaPitagoras(base, altura):
    c = (altura**2 + base**2)**0.5
    return c

    hypotenusa = teoremaPitagoras(base, altura)
    print("El resultado de la hypotenusa és: )" + hypotenusa)
    
    
def inputEnters(missatge: text):
    global bclicked
    valor = 0
    basic.show_string(missatge)
    while bclicked < 1:
        if input.button_is_pressed(Button.A):
            basic.show_string("A")
            basic.clear_screen()
            valor += 1
            basic.show_string("" + str(valor))
        elif input.button_is_pressed(Button.B):
            basic.show_string("B")
            bclicked += 1
        basic.pause(50)
    basic.clear_screen()
    bclicked = 0
    return valor

def showIcon():
    basic.clear_screen()
    music.start_melody(music.built_in_melody(Melodies.ENTERTAINER),
        MelodyOptions.ONCE)
    for index in range(4):
        basic.show_icon(IconNames.BUTTERFLY)
        basic.pause(100)
        basic.show_icon(IconNames.DIAMOND)
        basic.pause(100)
    basic.clear_screen()
    basic.show_string("Pitagoras")
    basic.clear_screen()

def on_forever():
    music.set_built_in_speaker_enabled(True)
    bclicked = 0
    showIcon()
    basic.show_string("Càlcul hipotenusa")
    interact()
    hipotenusa = teoremaPitagoras(base, altura)
    basic.show_number(hipotenusa)
    basic.pause(500)
basic.forever(on_forever)