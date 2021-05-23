export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    if (!this.members.has(obj)) {
      this.members.add(obj);
    } else {
      throw new Error("Персонаж уже есть в комманде");
    }
  }

  addAll(...arr) {
    arr.forEach((item) => {
      this.members.add(item);
    });
  }

  toArray() {
    const arr = Array.from(this.members);
    return arr;
  }

  [Symbol.iterator]() {
    const entries = this.toArray();
    let index = 0;
    return {
      next() {
        const result = {
          value: entries[index],
          done: index >= entries.length,
        };
        index += 1;
        return result;
      },
    };
  }

  *[Symbol.iterator]() {
    const members = Array.from(this.members);
    for (let i = 0; i < members.length; i += 1) {
      yield members[i];
    }
    // это генератор
    // и здесь есть доступ к this
    // остаётся лишь правильно написать yield
  }
}
