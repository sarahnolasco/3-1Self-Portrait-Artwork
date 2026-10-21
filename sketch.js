
let decorations = [];

function setup() {
  createCanvas(400, 500);
}

function draw() {
  background("#fff1df");
  noStroke();

  // Colorful background circles
  fill("#ffc4d6");
  circle(65, 75, 70);

  fill("#ffe17a");
  circle(335, 90, 65);

  fill("#c9b5f5");
  circle(55, 350, 55);

  fill("#a8dfc6");
  circle(345, 355, 65);

  fill("#ffad80");
  circle(325, 200, 35);

  // Tiny background sparkles
  fill("#e96b99");
  circle(115, 120, 10);
  circle(295, 125, 8);
  circle(75, 250, 9);
  circle(325, 285, 10);

  // Hair behind the head
  fill("#382522");
  ellipse(200, 220, 195, 255);

  // Neck
  fill("#e9a47f");
  rect(180, 300, 40, 55, 15);

  // Shirt
  fill("#f276a3");
  ellipse(200, 430, 205, 160);

  // Shirt collar
  fill("#ffb6cf");
  triangle(170, 350, 230, 350, 200, 395);

  // Ears
  fill("#e9a47f");
  ellipse(127, 230, 35, 45);
  ellipse(273, 230, 35, 45);

  // Face
  fill("#ffd0a8");
  ellipse(200, 230, 150, 180);

  // Hair framing the face
  fill("#382522");
  ellipse(200, 157, 175, 85);
  ellipse(137, 220, 35, 145);
  ellipse(263, 220, 35, 145);

  // Little hair highlights
  stroke("#704638");
  strokeWeight(4);
  noFill();
  arc(160, 165, 35, 45, 190, 280);
  arc(240, 165, 35, 45, 260, 350);
  noStroke();

  // Big cartoon eyes
  fill("#ffffff");
  ellipse(170, 220, 39, 43);
  ellipse(230, 220, 39, 43);

  fill("#594039");
  ellipse(174, 224, 23, 29);
  ellipse(226, 224, 23, 29);

  fill("#241b19");
  circle(176, 225, 15);
  circle(224, 225, 15);

  // Eye sparkles
  fill("#ffffff");
  circle(179, 217, 8);
  circle(221, 217, 8);
  circle(170, 230, 4);
  circle(230, 230, 4);

  // Eyelashes
  stroke("#382522");
  strokeWeight(3);
  line(154, 207, 150, 201);
  line(165, 200, 164, 194);
  line(246, 207, 250, 201);
  line(235, 200, 236, 194);

  // Rosy cheeks
  noStroke();
  fill("#f79bb0");
  ellipse(151, 253, 30, 17);
  ellipse(249, 253, 30, 17);

  // Little smile
  noFill();
  stroke("#9f514e");
  strokeWeight(3);
  arc(200, 255, 23, 17, 10, 170);

  // Earrings
  stroke("#ffd95c");
  strokeWeight(4);
  noFill();
  circle(126, 258, 13);
  circle(274, 258, 13);

  // Small flower on the shirt
  noStroke();
  fill("#ffe17a");
  ellipse(190, 390, 13, 20);
  ellipse(210, 390, 13, 20);
  ellipse(200, 380, 13, 20);
  ellipse(200, 400, 13, 20);

  fill("#f276a3");
  circle(200, 390, 10);

  // Draw decorations added by clicking
  for (let i = 0; i < decorations.length; i++) {
    let x = decorations[i].x;
    let y = decorations[i].y;
    let s = decorations[i].size;

    fill(decorations[i].color);

    if (decorations[i].shape == 0) {
      // Random-sized circle
      circle(x, y, s);

    } else if (decorations[i].shape == 1) {
      // Random-sized square
      rect(x, y, s, s);

    } else {
      // Random-sized sparkle
      triangle(
        x, y - s / 2,
        x - s / 4, y,
        x + s / 4, y
      );

      triangle(
        x, y + s / 2,
        x - s / 4, y,
        x + s / 4, y
      );

      triangle(
        x - s / 2, y,
        x, y - s / 4,
        x, y + s / 4
      );

      triangle(
        x + s / 2, y,
        x, y - s / 4,
        x, y + s / 4
      );
    }
  }
}

// Click to add colorful decorations
function mousePressed() {
  if (
    mouseX >= 0 && mouseX <= width &&
    mouseY >= 0 && mouseY <= height
  ) {
    let colors = [
      "#f276a3",
      "#ffe17a",
      "#c9b5f5",
      "#a8dfc6",
      "#ffad80"
    ];

    decorations.push({
      x: mouseX,
      y: mouseY,
      color: random(colors),
      shape: floor(random(3)),
      size: random(10, 30)
    });
  }
}