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

  getMean() {
    return this.combination.reduce((prev, curr) => (prev += parseInt(curr)), 0);
  }
}

export default Result;