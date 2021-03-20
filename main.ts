let duckyRightImg=assets.image`pink ducky`
let ducky = sprites.create(duckyRightImg, SpriteKind.Player)
controller.moveSprite(ducky, 100, 0)
ducky.setStayInScreen(true)
ducky.setPosition(80, 110)
let duckyleftImg= duckyRightImg.clone()
duckyleftImg.flipX()
controller.left.onEvent(ControllerButtonEvent.Pressed, function() {
ducky.setImage(duckyleftImg)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function() {
ducky.setImage(duckyRightImg)
})
scene.setBackgroundImage(assets.image`snowy day`)
function makeEnemy(){
let meteor = sprites.create(assets.image`meteor`,SpriteKind.Enemy)
meteor.setVelocity(40, 60) 
meteor.setPosition(randint(0, 160), 0) 
meteor.setBounceOnWall(true)
meteor.ay=70

}
game.onUpdateInterval(500, function() {
makeEnemy()    
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})