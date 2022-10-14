enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Stemina = SpriteKind.create()
    export const point = SpriteKind.create()
}
function setBaseVelocity () {
    if (Level == 2 || Level == 3) {
        mySprite.vx = 80
        mySprite.vy = 100
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    music.footstep.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Stemina, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    otherSprite.destroy()
    mySprite.startEffect(effects.smiles, 1000)
    music.beamUp.play()
})
function Baggrund_til_level_2 () {
    if (Level == 2) {
        scene.setBackgroundImage(img`
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
            7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
            7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
            6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
            6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
            6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
            6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
            6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
            66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
            66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
            66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
            66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
            66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
            6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
            6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
            6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
            bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
            bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
            bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
            bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
            bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
            bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
            bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
            bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
            bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
            bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
            b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
            b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
            b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
            b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
            dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
            9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
            9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
            9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
            9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
            99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
            99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
            9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
            9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
            999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
            d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
            dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
            dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
            9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
            ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
            dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9939999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
            dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
            dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
            dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
            d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
            d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
            d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
            999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
            999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
            999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
            999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
            999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
            999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
            9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
            d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
            ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
            dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
            ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
            ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
            ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
            dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
            dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
            ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
            dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
            ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            `)
        tiles.setCurrentTilemap(tilemap`level1`)
        æg = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg5 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg6 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg7 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg8 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg9 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg10 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg11 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg12 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg13 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg14 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg15 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg16 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg17 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(æg, tiles.getTileLocation(4, 13))
        tiles.placeOnTile(æg1, tiles.getTileLocation(6, 12))
        tiles.placeOnTile(æg2, tiles.getTileLocation(21, 13))
        tiles.placeOnTile(æg3, tiles.getTileLocation(25, 13))
        tiles.placeOnTile(æg4, tiles.getTileLocation(36, 12))
        tiles.placeOnTile(æg5, tiles.getTileLocation(44, 13))
        tiles.placeOnTile(æg6, tiles.getTileLocation(52, 12))
        tiles.placeOnTile(æg7, tiles.getTileLocation(64, 12))
        tiles.placeOnTile(æg8, tiles.getTileLocation(73, 11))
        tiles.placeOnTile(æg9, tiles.getTileLocation(80, 7))
        tiles.placeOnTile(æg10, tiles.getTileLocation(86, 11))
        tiles.placeOnTile(æg11, tiles.getTileLocation(90, 11))
        tiles.placeOnTile(æg12, tiles.getTileLocation(15, 11))
        tiles.placeOnTile(æg13, tiles.getTileLocation(18, 11))
        tiles.placeOnTile(æg14, tiles.getTileLocation(30, 13))
        tiles.placeOnTile(æg15, tiles.getTileLocation(40, 11))
        tiles.placeOnTile(æg16, tiles.getTileLocation(56, 11))
        tiles.placeOnTile(æg17, tiles.getTileLocation(69, 11))
        liv = sprites.create(img`
            ...bbbbbbbbb.........
            ..bbb111111bbbb......
            .bb11111111111bbb....
            bb1111111111111dbb...
            bb111111133111111bb..
            bd333111133111111dbb.
            cb333311111111111ddb.
            cb333311111111333ddbb
            cbb33311111113333bddb
            cbb3331111111333bbddb
            cdbb331111111333bbddb
            ccdbb1111111113bbbddc
            .cddddd1111111dbbdddc
            .cddddddddddddddddddc
            .ccdddddddddddddddddc
            ..cdddddbbbdddddbbdcc
            ..ccdddbbbbbddddbbdc.
            ...ccddbbbbbddddddcc.
            ....ccdbbbbbdddddcc..
            .....cccbbbddddccc...
            ......cccccccccc.....
            `, SpriteKind.Food)
        liv1 = sprites.create(img`
            ...bbbbbbbbb.........
            ..bbb111111bbbb......
            .bb11111111111bbb....
            bb1111111111111dbb...
            bb111111133111111bb..
            bd333111133111111dbb.
            cb333311111111111ddb.
            cb333311111111333ddbb
            cbb33311111113333bddb
            cbb3331111111333bbddb
            cdbb331111111333bbddb
            ccdbb1111111113bbbddc
            .cddddd1111111dbbdddc
            .cddddddddddddddddddc
            .ccdddddddddddddddddc
            ..cdddddbbbdddddbbdcc
            ..ccdddbbbbbddddbbdc.
            ...ccddbbbbbddddddcc.
            ....ccdbbbbbdddddcc..
            .....cccbbbddddccc...
            ......cccccccccc.....
            `, SpriteKind.Food)
        liv2 = sprites.create(img`
            ...bbbbbbbbb.........
            ..bbb111111bbbb......
            .bb11111111111bbb....
            bb1111111111111dbb...
            bb111111133111111bb..
            bd333111133111111dbb.
            cb333311111111111ddb.
            cb333311111111333ddbb
            cbb33311111113333bddb
            cbb3331111111333bbddb
            cdbb331111111333bbddb
            ccdbb1111111113bbbddc
            .cddddd1111111dbbdddc
            .cddddddddddddddddddc
            .ccdddddddddddddddddc
            ..cdddddbbbdddddbbdcc
            ..ccdddbbbbbddddbbdc.
            ...ccddbbbbbddddddcc.
            ....ccdbbbbbdddddcc..
            .....cccbbbddddccc...
            ......cccccccccc.....
            `, SpriteKind.Food)
        tiles.placeOnTile(liv, tiles.getTileLocation(11, 10))
        tiles.placeOnTile(liv1, tiles.getTileLocation(67, 13))
        tiles.placeOnTile(liv2, tiles.getTileLocation(96, 11))
    }
}
function Level_2 () {
    game.splash("LEVEL 2")
    Level = 2
    mySprite.destroy()
    projectile.destroy()
    if (Level == 2) {
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 1 1 . . . . . . . 
            . . . . . 1 1 4 1 5 . . . . . . 
            . . . . . 3 1 1 5 5 5 . . . . . 
            . . . . . 1 1 1 1 . . . . . . . 
            . . . . 1 1 1 1 1 . . . . . . . 
            . . . 1 1 1 1 1 1 1 . . . . . . 
            . . . 1 1 1 1 1 1 1 . . . . . . 
            . . . 1 1 1 1 1 1 1 . . . . . . 
            . . . . 1 1 1 1 1 1 . . . . . . 
            . . . . . . 5 . . . . . . . . . 
            . . . . . . 5 5 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        scene.cameraFollowSprite(mySprite)
        Baggrund_til_level_2()
        Startsted()
        setBaseVelocity()
    }
}
function Level_1 () {
    controller.moveSprite(mySprite, 200, 0)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (Level == 1) {
        info.changeLifeBy(-1)
        scene.cameraShake(4, 500)
        otherSprite.destroy()
        mySprite.startEffect(effects.fire, 1000)
        music.smallCrash.play()
    }
})
function Startsted () {
    if (Level == 2 || Level == 3) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 12))
    }
}
info.onScore(50, function () {
    if (Level == 1) {
        mySprite.startEffect(effects.confetti, 2000)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 12))
        music.powerUp.play()
        Level_2()
        pause(2000)
    }
})
function Flyhop () {
    if (Level == 2 || Level == 3) {
        mySprite.vy = -200
        pause(200)
        mySprite.vy = 200
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    mySprite.startEffect(effects.smiles, 1000)
    music.baDing.play()
})
function Level_3 () {
    game.splash("LEVEL 3")
    mySprite.destroy()
    Level = 3
    if (Level == 3) {
        mySprite = sprites.create(img`
            .........................
            .........................
            .........................
            .........................
            ...........ffffffff......
            .........ffddddfd11f.....
            ........fdd5555fd1f1f....
            .....ffffff5555fd1f1f....
            ....fddddddf5555f111f....
            ...ffdddddddf5555fffff...
            ..f.f55dddd5f555522222f..
            .....f55555f55555fffff...
            ......fffff5555552222f...
            ......f4444444444ffff....
            .......ff44444444f.......
            .........ffffffff........
            .........................
            .........................
            .........................
            .........................
            `, SpriteKind.Player)
        scene.setBackgroundImage(img`
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
            11111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd1111111111111111111
            11111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd111111111111111111
            11111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd111111111111111111
            111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111
            11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111
            11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111
            1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111
            1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111
            111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111
            111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111
            11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111
            11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111
            11ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd111111
            1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111
            1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111
            1dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd111111
            ddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111dd
            dddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddd
            dddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddd
            ddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111ddddddddddddd
            ddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666dddddddddddddddddddddddd
            ddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999dd
            dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999
            9ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd999999999999
            999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd6666663dddddddd99999999999999999dddddddd666666ddddddddd99999999999999
            9999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd999999999999999
            99999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd9999999999999999
            999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999
            999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999
            9999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd9996999999999999999
            9999999996666666666699966999999999999999999999999666666666669996699999999999999999999999966666666666999669999999999999999999999996666666666699966999999999999999
            9999999666666666669999996699999999999999999999966666666666999999669999999999999999999996666666666699999966999999999999999999999666666666669999996699999999999999
            9999999996666666669999966999999999999999999999999666666666999996699999999999999999999999966666666699999669999999999999999999999996666666669999966999999999999999
            9999999996666666999999666699999999999999999999999666666699999966669999999999999999999999966666669999996666999999999999999999999996666666999999666699999999999999
            9999999966966666666996666669999999999999999999996696666666699666666999999999999999999999669666666669966666699999999999999999999966966666666996666669999999999999
            9999999999666666666699966999999999996999999999999966666666669996699999999999699999999999996666666666999669999999999969999999999999666666666699966999999999996999
            9999999966666666666996666669999999996999999999996666666666699666666999999999699999999999666666666669966666699999999969999999999966666666666996666669999999996999
            9996999666666666666966666666999999966699999699966666666666696666666699999996669999969996666666666669666666669999999666999996999666666666666966666666999999966699
            9996699999666666666666666699999999996699999669999966666666666666669999999999669999966999996666666666666666999999999966999996699999666666666666666699999999996699
            9966999966666666666666666666999999966999996699996666666666666666666699999996699999669999666666666666666666669999999669999966999966666666666666666666999999966999
            9996699666666666666666666666699999666699999669966666666666666666666669999966669999966996666666666666666666666999996666999996699666666666666666666666699999666699
            9966666666666666666666666669999999966669996666666666666666666666666999999996666999666666666666666666666666699999999666699966666666666666666666666669999999966669
            9996666666666666666666666666699999666699999666666666666666666666666669999966669999966666666666666666666666666999996666999996666666666666666666666666699999666699
            9996666666666666666666666666669996666669999666666666666666666666666666999666666999966666666666666666666666666699966666699996666666666666666666666666669996666669
            9966666666666666666666666666999999666699996666666666666666666666666699999966669999666666666666666666666666669999996666999966666666666666666666666666999999666699
            9666666666666666666666666666669966666669966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669
            9966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669966666666666666666666666666666996666666
            9966666666666666666666666666669966666666996666666666666666666666666666996666666699666666666666666666666666666699666666669966666666666666666666666666669966666666
            6666666666666666666666666666666966666666666666666666666666666666666666696666666666666666666666666666666666666669666666666666666666666666666666666666666966666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            `)
        tiles.setCurrentTilemap(tilemap`level3`)
        Startsted()
        scene.cameraFollowSprite(mySprite)
        liv = sprites.create(img`
            ...bbbbbbbbb.........
            ..bbb111111bbbb......
            .bb11111111111bbb....
            bb1111111111111dbb...
            bb111111133111111bb..
            bd333111133111111dbb.
            cb333311111111111ddb.
            cb333311111111333ddbb
            cbb33311111113333bddb
            cbb3331111111333bbddb
            cdbb331111111333bbddb
            ccdbb1111111113bbbddc
            .cddddd1111111dbbdddc
            .cddddddddddddddddddc
            .ccdddddddddddddddddc
            ..cdddddbbbdddddbbdcc
            ..ccdddbbbbbddddbbdc.
            ...ccddbbbbbddddddcc.
            ....ccdbbbbbdddddcc..
            .....cccbbbddddccc...
            ......cccccccccc.....
            `, SpriteKind.Stemina)
        tiles.placeOnTile(liv, tiles.getTileLocation(12, 10))
        æg = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg5 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg6 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg7 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg8 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg9 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        æg10 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(æg, tiles.getTileLocation(7, 10))
        tiles.placeOnTile(æg1, tiles.getTileLocation(18, 14))
        tiles.placeOnTile(æg2, tiles.getTileLocation(24, 10))
        tiles.placeOnTile(æg3, tiles.getTileLocation(35, 9))
        tiles.placeOnTile(æg4, tiles.getTileLocation(43, 10))
        tiles.placeOnTile(æg5, tiles.getTileLocation(55, 13))
        tiles.placeOnTile(æg6, tiles.getTileLocation(67, 10))
        tiles.placeOnTile(æg7, tiles.getTileLocation(79, 10))
        tiles.placeOnTile(æg8, tiles.getTileLocation(90, 11))
        tiles.placeOnTile(æg9, tiles.getTileLocation(90, 12))
        tiles.placeOnTile(æg10, tiles.getTileLocation(90, 13))
    }
}
let projectile2: Sprite = null
let Pick_objects = 0
let projectile: Sprite = null
let liv2: Sprite = null
let liv1: Sprite = null
let liv: Sprite = null
let æg17: Sprite = null
let æg16: Sprite = null
let æg15: Sprite = null
let æg14: Sprite = null
let æg13: Sprite = null
let æg12: Sprite = null
let æg11: Sprite = null
let æg10: Sprite = null
let æg9: Sprite = null
let æg8: Sprite = null
let æg7: Sprite = null
let æg6: Sprite = null
let æg5: Sprite = null
let æg4: Sprite = null
let æg3: Sprite = null
let æg2: Sprite = null
let æg1: Sprite = null
let æg: Sprite = null
let mySprite: Sprite = null
let Level = 0
game.splash("ALLE MINE KYLLINGER KOM HJEM")
game.splash("LEVEL 1")
Level = 1
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
    7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
    7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
    6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
    6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
    6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
    6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
    6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
    66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
    66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
    66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
    66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
    66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
    6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
    6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
    6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
    bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
    bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
    bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
    bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
    bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
    bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
    bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
    bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
    bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
    bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
    b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
    b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
    b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
    b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
    dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
    9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
    9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
    9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
    9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
    99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
    99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
    9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
    9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
    999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
    d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
    dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
    dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
    dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
    d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
    9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
    d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
    ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
    dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
    ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
    dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
    ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
    dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
    ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
tiles.setCurrentTilemap(tilemap`level11`)
info.setLife(10)
mySprite = sprites.create(img`
    .........................
    .........................
    .........................
    .........................
    .........................
    ...cc...............cc...
    .ccc55.............55ccc.
    cccd5555.........55555ccc
    cdddd5555......555d55555c
    cccbdd555555555555ddddddc
    cccbbddd55d5555dd55bbcccc
    .ccbbbddddd555dddbbbcccc.
    ..cccbbbbbddd5ddbbbcccc..
    ...cccccbbddbbbbbccccc...
    .....ccccbbbcccccccc.....
    .......ccccccccccc.......
    .........................
    .........................
    .........................
    .........................
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 14))
scene.cameraFollowSprite(mySprite)
info.setScore(0)
Level_1()
forever(function () {
    if (Level == 1) {
        Pick_objects = randint(1, 5)
        if (Pick_objects == 1) {
            projectile = sprites.createProjectileFromSide(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . b b b b . . . . . . 
                . . . . b b 1 1 1 1 b b . . . . 
                . . . . b 1 1 1 3 3 1 b . . . . 
                . . . b 1 1 1 1 3 3 3 1 b . . . 
                . . . b 1 1 3 1 1 3 3 1 b . . . 
                . . b d 1 1 1 1 1 1 1 1 d b . . 
                . . b d 3 3 1 1 1 1 1 1 d b . . 
                . . b b 3 3 1 1 1 1 3 3 d b . . 
                . . c b b d 1 1 1 3 3 b d c . . 
                . . c d d d d d d b b b d c . . 
                . . c b d d b b d b b d b c . . 
                . . . c d d b b d d d d c . . . 
                . . . . c b d d d d b c . . . . 
                . . . . . c c c c c c . . . . . 
                `, 0, 60)
            projectile.setKind(SpriteKind.Food)
        } else if (Pick_objects == 2 && info.score() >= 5) {
            projectile = sprites.createProjectileFromSide(img`
                ......cc......ff
                ......cbc...ffbf
                ......cbccffcbbf
                ......cdbcccbbf.
                ......cddbccbf..
                .......cdbbff...
                .......cbcf.....
                .......fccfc....
                ......fccccbc...
                .....fcccccbdc..
                ....fcccccccddc.
                ff..fcccccccddc.
                fbffccbbbcccddff
                fbbfbbccbbccdfbf
                cbfbbcbbbbbcfbbf
                cbfbbbccbbbbbbdf
                .cfbbcbbbbbbbdbf
                .fbbbbbbbbbbbbf.
                .fbffbbbb11ccf..
                .fbff11111111f..
                .fbb11c3cc111c..
                .fb11c1331c11c..
                .fb11cc333311c..
                .fb11c1c3311c...
                .fbb1cc.ccc1c...
                .fbbb1f...cc....
                ..ffff..........
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                ................
                `, 0, 85)
        } else if (Pick_objects == 3 && info.score() >= 15) {
            projectile = sprites.createProjectileFromSide(img`
                . f c . . . . . . . . . . . . . 
                . f b c c c c c . . . . . . . . 
                . f b b c c b b c . . c . . . . 
                . . c b c b b c c c c c . . . . 
                . . f b b c c c c f f f f . . . 
                . . . f b b b c c b b b c f . . 
                . . . f f f b b c b b b b c f . 
                . . . c c c c b b b b b b b f . 
                . . c c b b b b b b b b b b f . 
                . . c 3 3 b 1 b c f f f 2 b f . 
                . . . c c b b b 1 1 f 2 2 2 f . 
                f c c c b b b b f f f 2 2 2 f . 
                f c c 3 3 b b b f f f 2 2 2 f . 
                f f c c c b 1 b 1 1 f 2 2 f . . 
                . f f f f c c b b f f f f . . . 
                . f f f f f c c c c f f . . . . 
                `, 0, 110)
        } else if (Pick_objects == 4 && info.score() >= 30) {
            projectile = sprites.createProjectileFromSide(img`
                ........................
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ....7.fd11111111df......
                ...7..fd11111111df......
                ...7..fd11111111df......
                ...7..fddd1111dddff.....
                ...77.fbdbfddfbdbfcf....
                ...777fcdcf11fcdcfbf....
                ....77fffbdb1bdffcf.....
                ....fcb1bcffffff........
                ....f1c1c1ffffff........
                ....fdfdfdfffff.........
                .....f.f.f..............
                ........................
                ........................
                ........................
                `, 0, 135)
        } else {
            projectile = sprites.createProjectileFromSide(img`
                e e e . . . . e e e . . . . 
                c d d c . . c d d c . . . . 
                c b d d f f d d b c . . . . 
                c 3 b d d b d b 3 c . . . . 
                f b 3 d d d d 3 b f . . . . 
                e d d d d d d d d e . . . . 
                e d f d d d d f d e . b f b 
                f d d f d d f d d f . f d f 
                f b d d b b d d 2 f . f d f 
                . f 2 2 2 2 2 2 b b f f d f 
                . f b d d d d d d b b d b f 
                . f d d d d d b d d f f f . 
                . f d f f f d f f d f . . . 
                . f f . . f f . . f f . . . 
                `, 0, 60)
        }
        projectile.x = randint(200, 0)
        pause(500)
    }
})
forever(function () {
    if (Level == 2 || Level == 3) {
        if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile`) || (mySprite.tileKindAt(TileDirection.Center, sprites.builtin.brick) || (mySprite.tileKindAt(TileDirection.Center, sprites.builtin.brick) || mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`)))) {
            info.changeLifeBy(-1)
            scene.cameraShake(4, 500)
            mySprite.vx = 0
            pause(400)
            Startsted()
        }
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, sprites.castle.tileGrass1) || mySprite.tileKindAt(TileDirection.Bottom, sprites.castle.tileGrass3) && Level == 2) {
        if (controller.up.isPressed()) {
            Flyhop()
        }
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`transparency16`) && Level == 3) {
        if (controller.up.isPressed()) {
            Flyhop()
        }
    }
    if (mySprite.tileKindAt(TileDirection.Center, sprites.dungeon.darkGroundNorthEast0)) {
        mySprite.vx = 2
        mySprite.startEffect(effects.confetti, 2000)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 12))
        music.powerUp.play()
        Level_3()
        pause(2000)
    }
    if (mySprite.tileKindAt(TileDirection.Center, sprites.dungeon.collectibleInsignia)) {
        game.over(true)
    }
    if (Level == 2 || Level == 3) {
        setBaseVelocity()
    }
})
forever(function () {
    if (info.life() == 0) {
        game.over(false)
        music.wawawawaa.play()
    }
})
forever(function () {
    if (Level == 1) {
        pause(10000)
        projectile2 = sprites.createProjectileFromSide(img`
            ...bbbbbbbbb.........
            ..bbb111111bbbb......
            .bb11111111111bbb....
            bb1111111111111dbb...
            bb111111133111111bb..
            bd333111133111111dbb.
            cb333311111111111ddb.
            cb333311111111333ddbb
            cbb33311111113333bddb
            cbb3331111111333bbddb
            cdbb331111111333bbddb
            ccdbb1111111113bbbddc
            .cddddd1111111dbbdddc
            .cddddddddddddddddddc
            .ccdddddddddddddddddc
            ..cdddddbbbdddddbbdcc
            ..ccdddbbbbbddddbbdc.
            ...ccddbbbbbddddddcc.
            ....ccdbbbbbdddddcc..
            .....cccbbbddddccc...
            ......cccccccccc.....
            `, 0, 60)
        projectile2.setKind(SpriteKind.Stemina)
        projectile2.x = randint(200, 0)
    }
})
