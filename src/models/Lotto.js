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

  getBellCurveStatistics() {
    let bellCurveStatistics = [];
    Object.keys(this.statistics).forEach(key => {
      const data = {name: key, value: this.statistics[key]};
      bellCurveStatistics.push(data);
    });

    let bellCurveStatistics1 = bellCurveStatistics.slice(0, (bellCurveStatistics.length / 2));
    let bellCurveStatistics2 = bellCurveStatistics.slice((bellCurveStatistics.length / 2), bellCurveStatistics.length);

    bellCurveStatistics1 = bellCurveStatistics1.sort((a, b) => {
      if (a.value === b.value) {
        return 0;
      }
      return a.value < b.value ? -1 : 1;
    });

    bellCurveStatistics2 = bellCurveStatistics2.sort((a, b) => {
      if (a.value === b.value) {
        return 0;
      }
      return a.value > b.value ? -1 : 1;
    });

    console.log(bellCurveStatistics1.concat(bellCurveStatistics2));
    return bellCurveStatistics1.concat(bellCurveStatistics2);
  }
}

export default Lotto;