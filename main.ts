scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.placeOnTile(jamal, tiles.getTileLocation(0, 20))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile21`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.placeOnTile(jamal, tiles.getTileLocation(5, 46))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile19`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.placeOnTile(jamal, tiles.getTileLocation(2, 24))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile26`, function (sprite, location) {
    tiles.setTilemap(tilemap`level2`)
    scene.setBackgroundColor(7)
    tiles.placeOnTile(jamal, tiles.getTileLocation(5, 44))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile8`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.placeOnTile(jamal, tiles.getTileLocation(2, 24))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile5`, function (sprite, location) {
    scene.setBackgroundColor(12)
    tiles.setTilemap(tilemap`level3`)
    info.changeLifeBy(1)
    tiles.placeOnTile(jamal, tiles.getTileLocation(0, 22))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile6`, function (sprite, location) {
    tiles.placeOnTile(jamal, tiles.getTileLocation(1, 21))
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile15`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.placeOnTile(jamal, tiles.getTileLocation(2, 24))
})
info.onLifeZero(function () {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile24`, function (sprite, location) {
    info.changeLifeBy(-100000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile13`, function (sprite, location) {
    scene.setBackgroundColor(12)
    tiles.setTilemap(tilemap`level3`)
    info.changeLifeBy(1)
    tiles.placeOnTile(jamal, tiles.getTileLocation(0, 20))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile20`, function (sprite, location) {
    tiles.setTilemap(tilemap`level1`)
    scene.setBackgroundColor(3)
    music.magicWand.play()
    tiles.placeOnTile(jamal, tiles.getTileLocation(8, 9))
    game.showLongText("You found my secret level wow", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile22`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.placeOnTile(jamal, tiles.getTileLocation(5, 46))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile9`, function (sprite, location) {
    info.changeLifeBy(2)
    scene.setBackgroundColor(4)
    tiles.setTilemap(tilemap`level5`)
    tiles.placeOnTile(jamal, tiles.getTileLocation(2, 24))
})
let jamal: Sprite = null
jamal = sprites.create(img`
    ...............................
    ...............................
    ...............................
    ...............................
    ...............................
    .............fffff.............
    ............f11111f............
    ...........f1111111f...........
    ...........f11f1f11f...........
    ...........f1111111f...........
    ...........f1111111f...........
    ...........f11fff1ff...........
    ............f11e11f............
    .............fffff.............
    ...............f...............
    ........fff...fff...fff........
    ...........fff.f.fff...........
    ...............f...............
    ...............f...............
    ...............f...............
    ...............f...............
    ..............fff..............
    .............ff.ff.............
    ............ff...ff............
    ............f.....f............
    ............f.....f............
    ............f.....f............
    ............f.....f............
    ............f.....f............
    ............f.....f............
    ............f.....f............
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level4`)
tiles.placeOnTile(jamal, tiles.getTileLocation(1, 29))
scene.cameraFollowSprite(jamal)
info.setLife(1)
info.setScore(0)
controller.moveSprite(jamal, 100, 0)
jamal.ay = 500
forever(function () {
    if (jamal.tileKindAt(TileDirection.Bottom, sprites.castle.tileGrass3)) {
        jamal.vy = -300
    }
    if (jamal.tileKindAt(TileDirection.Bottom, sprites.builtin.forestTiles0)) {
        jamal.vy = -300
    }
    if (jamal.tileKindAt(TileDirection.Bottom, sprites.dungeon.floorDark2)) {
        jamal.vy = -300
    }
    if (jamal.tileKindAt(TileDirection.Bottom, assets.tile`myTile3`)) {
        jamal.vy = -300
    }
    if (jamal.tileKindAt(TileDirection.Bottom, assets.tile`myTile4`)) {
        jamal.vy = -300
    }
    if (jamal.tileKindAt(TileDirection.Bottom, assets.tile`tile10`)) {
        jamal.vy = -500
    }
    if (jamal.tileKindAt(TileDirection.Bottom, sprites.dungeon.floorLight0)) {
        jamal.vy = -300
    }
    if (jamal.tileKindAt(TileDirection.Bottom, sprites.dungeon.floorLight4)) {
        jamal.vy = -300
    }
    if (jamal.tileKindAt(TileDirection.Bottom, assets.tile`tile2`)) {
        jamal.vy = -300
    }
    if (jamal.tileKindAt(TileDirection.Bottom, assets.tile`myTile`)) {
        jamal.vy = -300
    }
    if (jamal.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
        jamal.vy = -300
    }
})
forever(function () {
    pause(1000)
    info.changeScoreBy(-1)
})
