<script type="text/javascript">
	class SnakeGame {
  constructor() {
    this.canv = document.getElementById("ff");
    this.ctx = this.canv.getContext("2d"); // สร้าง context 2d
    this.positionX = this.positionY = 10; // ตน.เริ่มต้นของงู
    this.g1 = this.g2 = 24; // ขนาดกรอบ
    this.poitX = this.poitY = 15; // ตั้งจุด
    this.xv = this.yv = 0;
    this.trail = [];
    this.tail = 1;
    this.score = 0;
    document.addEventListener("keydown", this.keyPush.bind(this)); // ตั้ง key push
    document.getElementById("score").innerHTML = 0; // ตั้งค่าscore
    setInterval(() => this.game(), 120); // ตั้งค่าความไวของงู
  }

  game() {
    this.positionX += this.xv;
    this.positionY += this.yv;
    if (this.positionX < 0) {
      this.positionX = this.g2 - 1;
    }
    if (this.positionX > this.g2 - 1) {
      this.positionX = 0;
    }
    if (this.positionY < 0) {
      this.positionY = this.g2 - 1;
    }
    if (this.positionY > this.g2 - 1) {
      this.positionY = 0;
    }
    this.ctx.fillStyle = "black"; //สีวอล
    this.ctx.fillRect(0, 0, this.canv.width, this.canv.height); //ตน.วอล

    this.ctx.fillStyle = "blue"; //สีงู
    for (let i = 0; i < this.trail.length; i++) {
      this.ctx.fillRect(this.trail[i].x * this.g1, this.trail[i].y * this.g1, this.g1 - 2, this.g1 - 2);
      if (this.trail[i].x == this.positionX && this.trail[i].y == this.positionY) {
        this.tail = 3; //ความยาว
      }
    }
    this.trail.push({
      x: this.positionX,
      y: this.positionY
    });
    while (this.trail.length > this.tail) {
      this.trail.shift();
    }

    if (this.poitX == this.positionX && this.poitY == this.positionY) { //งูตอนกิน
      this.tail++;
      this.score++;
      document.getElementById("score").innerHTML = this.score; // เพิ่มความยาวงู
      this.poitX = Math.floor(Math.random() * this.g2); // จุดใหม่ที่ x
      this.poitY = Math.floor(Math.random() * this.g2); // จุดใหม่ที่ y
    }
    this.ctx.fillStyle = "white"; //สีจุด
    this.ctx.fillRect(this.poitX * this.g1, this.poitY * this.g1, this.g1 - 2, this.g1 - 2);
  }

  keyPush(evt) {
    console.log(evt);
    switch (evt.keyCode) {
      case 37: // ซ้าย
        this.xv = -1;
        this.yv = 0;
        break;
      case 38: // ขึ้น
        this.xv = 0;
        this.yv = -1;
        break;
      case 39: // ขวา
        this.xv = 1;
        this.yv = 0;
        break;
      case 40: // ลง
        this.xv = 0;
        this.yv = 1;
    }
  }
}
new SnakeGame();
</script>
