class Result {
  constructor(combinations, drawDate, jackpot, category) {
    this.combination = combinations.split('-');
    this.drawDate = drawDate;
    this.jackpot = jackpot;
    this.category = category;
  }

  getCombination() {
    return this.combination.join('-');
  }
}

export default Result;