class Circle {
    constructor(x, y, k) {
        this.x = x;
        this.y = y;
        this.r = Math.abs(1 / k);
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
