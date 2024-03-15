class Circle {
    constructor(x, y, k) {
        this.center = new Complex(x, y);
        this.r = Math.abs(1 / k);
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.center.a, this.center.b, this.r, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
