//ATIVIDADE 1
var notas = [43, 45, 69, 70, 89, 91, 54, 23, 56, 90, 82, 78];

quantidade_alunos = notas

//ATIVIDADE 2

var caixaAzul, caixaVermelha, caixaVerde;

var profundidade;

var quantidade_de_quadros;

var n_aleatorio;

function setup() {
    createCanvas(400, 400);

    //for (var i = 0; i < ; i++) {

    // if ( > 60) {
    //    console.log("" + notas[]);
    // }
    //}





    //ATIVIDADE 2
    caixaAzul = createSprite(100, 100, 50, 50);
    caixaAzul.shapeColor = "blue";

    profundidade = caixaAzul.depth;
    console.log(profundidade);


    caixaVermelha = createSprite(130, 120, 50, 50);
    caixaVermelha.shapeColor = "red";

    profundidade = caixaVermelha.depth;
    console.log(profundidade);

    caixaVerde = createSprite(130, 120, 50, 50);
    caixaVerde.shapeColor = "green";

    profundidade = caixaVerde.depth;
    console.log(profundidade);

}

function draw() {
    background(220);
    drawSprites();
}