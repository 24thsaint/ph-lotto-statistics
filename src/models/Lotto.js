/* eslint-disable no-console */

class Lotto {
  constructor() {
    this.results = [];
    this.statistics = {};
  }

  addResult(result) {
    this.results.push(result);
    result.combination.forEach((combination) => {
      const combinationFix = `${combination}`.length === 1 ? `0${combination}` : `${combination}`;

      if (!this.statistics[combinationFix]) {
        this.statistics[combinationFix] = 0;
      }

      this.statistics[combinationFix] += 1;
    });

    this.results = this.results.reverse();
  }

  getNormalizedStatistics() {
    let normalizedStatistics = [];
    Object.keys(this.statistics).forEach(key => {
      const data = {name: key, value: this.statistics[key]};
      normalizedStatistics.push(data);
    });
    normalizedStatistics = normalizedStatistics.sort((a, b) => {
      if (a.value === b.value) {
        return 0;
      }
      return a.value < b.value ? -1 : 1;
    });
    return normalizedStatistics;
  }
}

export default Lotto;