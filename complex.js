class Complex {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add(other) {
        return new Complex(this.a + other.a, this.b + other.b);
    }

    sub(other) {
        return new Complex(this.a - other.a, this.b - other.b);
    }

    scale(value) {
        return new Complex(value * this.a, value * this.b);
    }

    mul(other) {
        let new_a = this.a * other.a - this.b * other.b;
        let new_b = this.a * other.b + this.b * other.a;
        return new Complex(new_a, new_b);
    }

    sqrt() {
        let r = Math.sqrt(Math.sqrt(this.a * this.a + this.b * this.b));
        let theta = Math.atan2(this.b, this.a) / 2;
        return new Complex(r * Math.cos(theta), r * Math.sin(theta));
    }
}
