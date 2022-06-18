var img = [];
var img2 = [];
var img3 = [];
var img4 = [];
var img5 = [];
var img6 = [];
var pdf;
var contadora = 0;
var contadorb = 0;
var contadorc = 0;
var contadord = 0;
var contadore = 0;
var contadorf = 0;
var tempo = 0;
let tamb1;
let tamb2;
let tamb3;
let tamb11;
let tamb22;
let tamb33;
let matafundo;
let b1;
let b2;
let b3;
let b4;
let b5;

function preload() {
  pdf = loadImage('pdf.png');

  soundFormats('mp3');
  tamb1 = loadSound('./Sons/tambor1.mp3');
  tamb2 = loadSound('./Sons/tambor2.mp3');
  tamb3 = loadSound('./Sons/tambor3.mp3');
  tamb11 = loadSound('./Sons/tambor4.mp3');
  tamb22 = loadSound('./Sons/tambor5.mp3');
  tamb33 = loadSound('./Sons/tambor6.mp3');
  matafundo = loadSound('./Sons/Matofundo.mp3');
  b1 = loadSound('./Sons/b1.mp3');
  b2 = loadSound('./Sons/b2.mp3');
  b3 = loadSound('./Sons/b3.mp3');
  b4 = loadSound('./Sons/b4.mp3');
  b5 = loadSound('./Sons/b5.mp3');

  img[0] = loadImage('./Flores/Flor0000.png');
  img[1] = loadImage('./Flores/Flor0001.png');
  img[2] = loadImage('./Flores/Flor0002.png');
  img[3] = loadImage('./Flores/Flor0003.png');
  img[4] = loadImage('./Flores/Flor0004.png');
  img[5] = loadImage('./Flores/Flor0005.png');
  img[6] = loadImage('./Flores/Flor0006.png');
  img[7] = loadImage('./Flores/Flor0007.png');
  img[8] = loadImage('./Flores/Flor0008.png');
  img[9] = loadImage('./Flores/Flor0009.png');
  img[10] = loadImage('./Flores/Flor0010.png');
  img[11] = loadImage('./Flores/Flor0011.png');
  img[12] = loadImage('./Flores/Flor0012.png');
  img[13] = loadImage('./Flores/Flor0013.png');
  img[14] = loadImage('./Flores/Flor0014.png');
  img[15] = loadImage('./Flores/Flor0015.png');
  img[16] = loadImage('./Flores/Flor0016.png');
  img[17] = loadImage('./Flores/Flor0017.png');
  img[18] = loadImage('./Flores/Flor0018.png');
  img[19] = loadImage('./Flores/Flor0019.png');
  img[20] = loadImage('./Flores/Flor0020.png');
  img[21] = loadImage('./Flores/Flor0021.png');
  img[22] = loadImage('./Flores/Flor0022.png');
  img[23] = loadImage('./Flores/Flor0023.png');
  img[34] = loadImage('./Flores/Flor0024.png');
  img[25] = loadImage('./Flores/Flor0025.png');
  img[26] = loadImage('./Flores/Flor0026.png');
  img[26] = loadImage('./Flores/Flor0027.png');
  img[28] = loadImage('./Flores/Flor0028.png');
  img[29] = loadImage('./Flores/Flor0029.png');
  img[30] = loadImage('./Flores/Flor0030.png');
  img[31] = loadImage('./Flores/Flor0031.png');

  img2[0] = loadImage('./Flores2/Flor2-0000.PNG');
  img2[1] = loadImage('./Flores2/Flor2-0001.PNG');
  img2[2] = loadImage('./Flores2/Flor2-0002.PNG');
  img2[3] = loadImage('./Flores2/Flor2-0003.PNG');
  img2[4] = loadImage('./Flores2/Flor2-0004.PNG');
  img2[5] = loadImage('./Flores2/Flor2-0005.PNG');
  img2[6] = loadImage('./Flores2/Flor2-0006.PNG');
  img2[7] = loadImage('./Flores2/Flor2-0007.PNG');
  img2[8] = loadImage('./Flores2/Flor2-0008.PNG');
  img2[9] = loadImage('./Flores2/Flor2-0009.PNG');
  img2[10] = loadImage('./Flores2/Flor2-0010.PNG');
  img2[11] = loadImage('./Flores2/Flor2-0011.PNG');
  img2[12] = loadImage('./Flores2/Flor2-0012.PNG');
  img2[13] = loadImage('./Flores2/Flor2-0013.PNG');
  img2[14] = loadImage('./Flores2/Flor2-0014.PNG');
  img2[15] = loadImage('./Flores2/Flor2-0015.PNG');
  img2[16] = loadImage('./Flores2/Flor2-0016.PNG');
  img2[17] = loadImage('./Flores2/Flor2-0017.PNG');
  img2[18] = loadImage('./Flores2/Flor2-0018.PNG');
  img2[19] = loadImage('./Flores2/Flor2-0019.PNG');
  img2[20] = loadImage('./Flores2/Flor2-0020.PNG');
  img2[21] = loadImage('./Flores2/Flor2-0021.PNG');
  
  img3[0] = loadImage('./Flores3/Flor03-0000.png');
  img3[1] = loadImage('./Flores3/Flor03-0001.png');
  img3[2] = loadImage('./Flores3/Flor03-0002.png');
  img3[3] = loadImage('./Flores3/Flor03-0003.png');
  img3[4] = loadImage('./Flores3/Flor03-0004.png');
  img3[5] = loadImage('./Flores3/Flor03-0005.png');
  img3[6] = loadImage('./Flores3/Flor03-0006.png');
  img3[7] = loadImage('./Flores3/Flor03-0007.png');
  img3[8] = loadImage('./Flores3/Flor03-0008.png');
  img3[9] = loadImage('./Flores3/Flor03-0009.png');
  img3[10] = loadImage('./Flores3/Flor03-0010.png');
  img3[11] = loadImage('./Flores3/Flor03-0011.png');
  img3[12] = loadImage('./Flores3/Flor03-0012.png');
  img3[13] = loadImage('./Flores3/Flor03-0013.png');
  img3[14] = loadImage('./Flores3/Flor03-0014.png');
  img3[15] = loadImage('./Flores3/Flor03-0015.png');
  img3[16] = loadImage('./Flores3/Flor03-0016.png');
  img3[17] = loadImage('./Flores3/Flor03-0017.png');
  img3[18] = loadImage('./Flores3/Flor03-0018.png');
  img3[19] = loadImage('./Flores3/Flor03-0019.png');
  img3[20] = loadImage('./Flores3/Flor03-0020.png');
  img3[21] = loadImage('./Flores3/Flor03-0021.png');

  img4[0] = loadImage('./Flores4/Flor04-0000.png');
  img4[1] = loadImage('./Flores4/Flor04-0001.png');
  img4[2] = loadImage('./Flores4/Flor04-0002.png');
  img4[3] = loadImage('./Flores4/Flor04-0003.png');
  img4[4] = loadImage('./Flores4/Flor04-0004.png');
  img4[5] = loadImage('./Flores4/Flor04-0005.png');
  img4[6] = loadImage('./Flores4/Flor04-0006.png');
  img4[7] = loadImage('./Flores4/Flor04-0007.png');
  img4[8] = loadImage('./Flores4/Flor04-0008.png');
  img4[9] = loadImage('./Flores4/Flor04-0009.png');
  img4[10] = loadImage('./Flores4/Flor04-0010.png');
  img4[11] = loadImage('./Flores4/Flor04-0011.png');
  img4[12] = loadImage('./Flores4/Flor04-0012.png');
  img4[13] = loadImage('./Flores4/Flor04-0013.png');
  img4[14] = loadImage('./Flores4/Flor04-0014.png');
  img4[15] = loadImage('./Flores4/Flor04-0015.png');
  img4[16] = loadImage('./Flores4/Flor04-0016.png');
  img4[17] = loadImage('./Flores4/Flor04-0017.png');
  img4[18] = loadImage('./Flores4/Flor04-0018.png');
  img4[19] = loadImage('./Flores4/Flor04-0019.png');
  img4[20] = loadImage('./Flores4/Flor04-0020.png');

  img5[0] = loadImage('./Flores5/Flor05-0000.png');
  img5[1] = loadImage('./Flores5/Flor05-0001.png');
  img5[2] = loadImage('./Flores5/Flor05-0002.png');
  img5[3] = loadImage('./Flores5/Flor05-0003.png');
  img5[4] = loadImage('./Flores5/Flor05-0004.png');
  img5[5] = loadImage('./Flores5/Flor05-0005.png');
  img5[6] = loadImage('./Flores5/Flor05-0006.png');
  img5[7] = loadImage('./Flores5/Flor05-0007.png');
  img5[8] = loadImage('./Flores5/Flor05-0008.png');
  img5[9] = loadImage('./Flores5/Flor05-0009.png');
  img5[10] = loadImage('./Flores5/Flor05-0010.png');
  img5[11] = loadImage('./Flores5/Flor05-0011.png');
  img5[12] = loadImage('./Flores5/Flor05-0012.png');
  img5[13] = loadImage('./Flores5/Flor05-0013.png');
  img5[14] = loadImage('./Flores5/Flor05-0014.png');
  img5[15] = loadImage('./Flores5/Flor05-0015.png');
  img5[16] = loadImage('./Flores5/Flor05-0016.png');
  img5[17] = loadImage('./Flores5/Flor05-0017.png');
  img5[18] = loadImage('./Flores5/Flor05-0018.png');
  img5[19] = loadImage('./Flores5/Flor05-0019.png');
  img5[20] = loadImage('./Flores5/Flor05-0020.png');
  img5[21] = loadImage('./Flores5/Flor05-0021.png');
  img5[22] = loadImage('./Flores5/Flor05-0022.png');

  img6[0] = loadImage('./Flores6/Flor6-0000.png')
  img6[1] = loadImage('./Flores6/Flor6-0001.png')
  img6[2] = loadImage('./Flores6/Flor6-0002.png')
  img6[3] = loadImage('./Flores6/Flor6-0003.png')
  img6[4] = loadImage('./Flores6/Flor6-0004.png')
  img6[5] = loadImage('./Flores6/Flor6-0005.png')
  img6[6] = loadImage('./Flores6/Flor6-0006.png')
  img6[7] = loadImage('./Flores6/Flor6-0007.png')
  img6[8] = loadImage('./Flores6/Flor6-0008.png')
  img6[9] = loadImage('./Flores6/Flor6-0009.png')
  img6[10] = loadImage('./Flores6/Flor6-0010.png')
  img6[11] = loadImage('./Flores6/Flor6-0011.png')
  img6[12] = loadImage('./Flores6/Flor6-0012.png')
  img6[13] = loadImage('./Flores6/Flor6-0013.png')
  img6[14] = loadImage('./Flores6/Flor6-0014.png')
  img6[15] = loadImage('./Flores6/Flor6-0015.png')
  img6[16] = loadImage('./Flores6/Flor6-0016.png')
  img6[17] = loadImage('./Flores6/Flor6-0016.png')
  img6[18] = loadImage('./Flores6/Flor6-0018.png')
  img6[19] = loadImage('./Flores6/Flor6-0019.png')
}

function setup() {
  createCanvas(2160, 1620);
  matafundo.loop();
  matafundo.setVolume(0.17);

  b1.loop();
  b1.setVolume(0.1);

  b2.loop();
  b2.setVolume(0.1);

  b3.loop();
  b3.setVolume(0.1);

  b4.loop();
  b4.setVolume(0.1);

  b5.loop();
  b5.setVolume(0.1);
}

function draw() {
  background(pdf, 0);

  image(img[contadora%24], 0,758,433,599);

  image(img2[contadorb%22], 15, 1200, 522, 454);

  image(img3[contadorc%21], 400, 1100, 564, 584);

  image(img4[contadord%20], 800, 1100, 568, 624);

  image(img5[contadore%22], 1800, 1100, 401, 405);

  image(img6[contadorf%19], 1250, 1190, 579, 483);

  if (keyIsDown(LEFT_ARROW)) {
    value = tempo++;
    if(tempo>1.5){
      contadora++;
      tempo = 0;
    }
    if(contadora>=24){
      contadora = 23;
    }
  }

  if (keyIsDown(DOWN_ARROW)) {
    value = tempo++;
    if(tempo>1.5){
      contadorb++;
      tempo = 0;
    }
    if(contadorb>=21){
      contadorb = 20;
    }
  }

  if (keyIsDown(RIGHT_ARROW)) {
    value = tempo++;
    if(tempo>1.5){
      contadorc++;
      tempo = 0;
    }
    if(contadorc>=21){
      contadorc = 20;
    }
  }

  if (keyIsDown(BACKSPACE)) {
    value = tempo++;
    if(tempo>1.5){
      contadord++;
      tempo = 0;
    }
    if(contadord>=20){
      contadord = 19;
    }
  }

  if (keyIsDown(ENTER)) {
    value = tempo++;
    if(tempo>1.5){
      contadore++;
      tempo = 0;
    }
    if(contadore>=22){
      contadore = 21;
    }
  }

  if (keyIsDown(ALT)) {
    value = tempo++;
    if(tempo>1.5){
      contadorf++;
      tempo = 0;
    }
    if(contadorf>=19){
      contadorf = 18;
    }
  }

}

function keyTyped(){
  if (key === 'a') {
    value = tempo++;
    if(tempo>0){
      contadora++;
      tempo = 0;
    }
    if(contadora>=9){
      contadora = 0;
    }
    tamb1.play();
  }

  if (key === 's') {
    value = tempo++;
    if(tempo>0){
      contadorb++;
      tempo = 0;
    }
    if(contadorb>=9){
      contadorb = 0;
    }
    tamb1.play();
  }

  if (key === 'd') {
    value = tempo++;
    if(tempo>0){
      contadorc++;
      tempo = 0;
    }
    if(contadorc>=9){
      contadorc = 0;
    }
    tamb2.play();
  }

  if (key === 'f') {
    value = tempo++;
    if(tempo>0){
      contadord++;
      tempo = 0;
    }
    if(contadord>=9){
      contadord = 0;
    }
    tamb2.play();
  }

  if (key === 'g') {
    value = tempo++;
    if(tempo>0){
      contadore++;
      tempo = 0;
    }
    if(contadore>=9){
      contadore = 0;
    }
    tamb2.play();

    tamb3.play();
  }
  if (key === 'h') {
    value = tempo++;
    if(tempo>0){
      contadorf++;
      tempo = 0;
    }
    if(contadorf>=10){
      contadorf = 0;
    }
    tamb3.play();
  }
}

function keyPressed(){
  if(keyIsDown(LEFT_ARROW)){
    tamb1.play();
}

  if(keyIsDown(DOWN_ARROW)){
    tamb11.play();
  }

  if(keyIsDown(RIGHT_ARROW)){
    tamb2.play();
  }

  if(keyIsDown(BACKSPACE)){
    tamb22.play();
  }

  if(keyIsDown(ENTER)){
    tamb3.play();
  }

  if(keyIsDown(ALT)){
    tamb33.play();
  }


}