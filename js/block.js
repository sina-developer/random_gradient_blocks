class Block {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.w = blockWidth;
    this.h = blockHeight;
    this.color = color;
    this.hovered = false;
  }

  setup() {
    this.calcIndex();
  }

  calcIndex() {
    // console.log(getPerlin2D(this.x, this.y));
    let opacity = mapValues(getPerlin2D(this.x, this.y), -1, 1, 0, 1, true);

    this.index = parseInt(opacity * 10) - 1;
  }

  getColor() {
    // let colors = [
    //   "#eeeeee",
    //   "#E58020",
    //   "#17B0D0",
    //   "#1285E6",
    //   "#AB45C2",
    //   "#FD3B00",
    //   "#FFEA02",
    //   "#D22E61",
    //   "#fefefe",
    //   "#000000",
    // ];
    let colors = [
      "#E3F2FD",
      "#BBDEFB",
      "#90CAF9",
      "#64B5F6",
      "#42A5F5",
      "#2196F3",
      "#1E88E5",
      "#1976D2",
      "#1565C0",
      "#0D47A1",
    ];
    let hover_colors = [
      "#FBE9E7",
      "#FFCCBC",
      "#FFAB91",
      "#FF8A65",
      "#FF7043",
      "#FF5722",
      "#F4511E",
      "#E64A19",
      "#D84315",
      "#BF360C",
    ];

    let color = this.hovered ? hover_colors[this.index] : colors[this.index];
    // this.color = addAlpha(this.color, opacity);
    this.color = addAlpha(color);
  }

  checkIntersects() {
    checkIntersects(
      this,
      (block) => {
        block.hovered = true;
      },
      (block) => {
        // console.log("no");
        block.hovered = false;
      }
    );
  }

  draw() {
    this.getColor();
    drawRect(this.x, this.y, blockWidth, blockHeight, this.color);
  }
}
