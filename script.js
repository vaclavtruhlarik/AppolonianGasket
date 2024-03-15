const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const center_x = canvas.width / 2;
const center_y = canvas.height / 2;
const main_r = Math.min(center_x, center_y) * 0.8;

const c1 = new Circle(center_x, center_y, -1 / main_r);
const c2 = new Circle(center_x - c1.r / 2, center_y, 1 / (c1.r / 2));
const c3 = new Circle(center_x + c1.r / 2, center_y, 1 / (c1.r / 2));

c1.draw(ctx);
c2.draw(ctx);
c3.draw(ctx);
