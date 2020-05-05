namespace SpriteKind {
    export const Power_up = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
info.player2.onLifeZero(function () {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 1e+58; index++) {
        controller.moveSprite(mySprite, 200, 200)
        pause(5000)
    }
})
info.onLifeZero(function () {
    game.over(false, effects.splatter)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . . 1 1 1 1 1 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 50, 50)
let Roctek = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 1 . . . . . . . . 1 . . . . 
. . . 1 . . . . . . 1 . . . . . 
. . . . . 8 8 8 8 . . . . . . . 
. . . 8 . . . . . . 8 . . . . . 
. . . 8 . f f f f . 8 . . . . . 
. . . 8 . f f f f . 8 . . . . . 
. . . 8 . f f f f . 8 . . . . . 
. . . 8 . f f f f . 8 . . . . . 
. . . . . . . . . . . . . . . . 
. . . 1 . 8 8 8 8 . 1 . . . . . 
. . 1 . . . . . . . . 1 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath5],
            TileScale.Sixteen
        ))
info.setLife(100)
info.player2.setLife(30000)
let Emeny = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 5 . 5 . 5 . . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
Emeny.follow(mySprite, 50)
Emeny.setPosition(Math.randomRange(0, 10), Math.randomRange(0, 10))
mySprite.setFlag(SpriteFlag.StayInScreen, true)
Emeny.setFlag(SpriteFlag.StayInScreen, true)
game.splash("Espace the red cube!", "")
game.setDialogCursor(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
forever(function () {
    Roctek.follow(Emeny, 200)
    if (Emeny.overlapsWith(mySprite)) {
        info.changeLifeBy(-1)
    }
    if (mySprite.overlapsWith(Emeny)) {
        info.player2.changeLifeBy(-1)
        info.player2.changeLifeBy(-1)
    }
    if (Emeny.overlapsWith(Roctek)) {
        info.player2.changeLifeBy(-1)
        info.player2.changeLifeBy(-1)
    }
})
