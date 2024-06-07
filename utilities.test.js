const { shouldAdmit, generateRanking } = require("./utilities");

describe("utilities", () => {
  describe("shouldAdmit", () => {
    it("should qualify without needing tolerance if more than 4yrs", () => {
      // setup
      const inputYear = 2019;
      const inputMonth = 9;

      // act
      const { qualifies, qualifiesOnTolerance } = shouldAdmit(
        inputYear,
        inputMonth
      );

      // assert
      expect(qualifies).toBe(true);
      expect(qualifiesOnTolerance).toBe(false);
    });

    it("should qualify if age is exactly 4yrs", () => {
      // setup
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear(); // 2024
      const inputYear = currentYear - 4; // 2020
      const currentMonth = currentDate.getMonth(); // 0 based
      const inputMonth = currentMonth + 1; // 6

      // act
      const { qualifies, qualifiesOnTolerance } = shouldAdmit(
        inputYear,
        inputMonth
      );

      // assert
      expect(qualifies).toBe(true);
      expect(qualifiesOnTolerance).toBe(false);
    });

    it("should qualify on tolerance if student is 3yrs 9months old with tolerance of 4", () => {
      // setup
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear(); // 2024
      const baseYear = currentYear - 4; // 2020
      const currentMonth = currentDate.getMonth(); // 0 based: 0-Jan, 11-Dec
      let inputMonth = currentMonth + 1;
      let inputYear = baseYear;

      // we just want to pick 3 months in the past from current month
      const difference = currentMonth - 3;
      if (difference < 0) {
        // we have backed into a previous year
        inputYear = baseYear - 1;
        inputMonth = 13 + difference; // get a 0 based month which is 3 months back.
      }

      // act
      const { qualifies, qualifiesOnTolerance } = shouldAdmit(
        inputYear,
        inputMonth
      );

      // assert
      expect(qualifies).toBe(true);
      expect(qualifiesOnTolerance).toBe(true);
    });

    it("should not qualify if student is 3yrs 6months old given tolerance of 4", () => {
      // setup
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear(); // 2024
      const baseYear = currentYear - 3; // 2020
      const currentMonth = currentDate.getMonth(); // 0 based: 0-Jan, 11-Dec
      let inputMonth = currentMonth + 1;
      let inputYear = baseYear;

      // we just want to pick 6 months in the past from current month
      const difference = currentMonth - 6;
      if (difference < 0) {
        // we have backed into a previous year
        inputYear = baseYear - 1;
        inputMonth = 13 + difference; // get a 0 based month which is 6 months back.
      }

      // act
      const { qualifies, qualifiesOnTolerance } = shouldAdmit(
        inputYear,
        inputMonth
      );

      // assert
      expect(qualifies).toBe(false);
      expect(qualifiesOnTolerance).toBe(false);
    });
  });

  describe("generateRanking", () => {});
});
