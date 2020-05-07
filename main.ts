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
    //% blockIdentity=images._tile
    export const tile1 = img`
a a a a a a a a f f f f f f f f
a a a a a a a a f f f f f f f f
a a a a a a a a f f f f f f f f
a a a a a a a a f f f f f f f f
a a a a a a a a f f f f f f f f
a a a a a a a a f f f f f f f f
a a a a a a a a f f f f f f f f
a a a a a a a a f f f f f f f f
f f f f f f f f a a a a a a a a
f f f f f f f f a a a a a a a a
f f f f f f f f a a a a a a a a
f f f f f f f f a a a a a a a a
f f f f f f f f a a a a a a a a
f f f f f f f f a a a a a a a a
f f f f f f f f a a a a a a a a
f f f f f f f f a a a a a a a a
`
    //% blockIdentity=images._tile
    export const tile3 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 5 7 5 7 5 7 5 7 5 7 7 7 7
7 7 7 5 5 5 5 5 5 5 5 5 7 7 7 7
7 7 7 4 5 5 5 5 5 5 5 5 7 7 7 7
7 7 7 4 4 4 5 5 5 5 5 5 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
`
}
info.player2.onLifeZero(function () {
    game.over(true)
})
info.onLifeZero(function () {
    game.over(false, effects.splatter)
})
let mySprite = sprites.create(img`
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
controller.moveSprite(mySprite, 100, 100)
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
            hex`1000100002070707070707070707131313131313060101010101010101131313131313130601010101010101010101131313131306010101010101010101010113131313060101010101010101010101011313130601010101010101010101010113131306010101010101010101010101010113060101010101010101010101010101080601010101010101010101010101010806010101010101010101010101010108060101010101010101010101010101080601010101010101010101010101010806010101010101010101010101010108131313130101010101010101010101081313131301010101010101010101010813131313090909090909090909090905`,
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
            [myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.builtin.forestTiles13,sprites.builtin.forestTiles5,sprites.builtin.forestTiles7,sprites.builtin.forestTiles14,sprites.builtin.forestTiles15,sprites.builtin.forestTiles3,sprites.builtin.forestTiles2,sprites.builtin.forestTiles4,sprites.builtin.forestTiles20,myTiles.tile1,myTiles.tile3],
            TileScale.Sixteen
        ))
info.setLife(100)
info.player2.setLife(100)
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
scene.cameraFollowSprite(mySprite)
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
        Roctek.destroy(effects.warmRadial, 500)
        Roctek = sprites.create(img`
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
        Roctek = sprites.create(img`
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
        Roctek = sprites.create(img`
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
        Roctek = sprites.create(img`
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
        Roctek.setPosition(mySprite.x, mySprite.y)
        Roctek.follow(Emeny, 100)
    }
})
