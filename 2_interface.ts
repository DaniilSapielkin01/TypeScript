interface Rect {
  readonly id: string;
  color?: string;
  size: {
    wigth: number;
    height: number;
  };
}

const react1: Rect = {
  id: "1234",
  size: {
    wigth: 20,
    height: 30,
  },
  color: "#ccc",
};

const rect2: Rect = {
  id: "12",
  size: {
    wigth: 20,
    height: 30,
  },
};
rect2.color = "black";

const rect3 = {} as Rect;
//================================
interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect5: RectWithArea = {
  id: "123",
  size: {
    wigth: 20,
    height: 30,
  },
  color: "red",
  getArea(): number {
    return this.size.wigth * this.size.height;
  },
};
//================================
interface IClock {
  date: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

//================================
interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: "1px solid black",
  marginTop: "2px",
  borderRadius: "5px",
};
