import { convertMsToHMS } from "./timeParser";

describe("parse ms in hh:mm:ss", () => {
  it("should return correct time", () => {
    // Test cases with expected results
    const testCases = [
      { ms: 1234, expected: "00:00:01" }, // 1 second
      { ms: 123456, expected: "00:02:03" }, // 2 minutes and 3 seconds
      { ms: 12345678, expected: "03:25:45" }, // 3 hours, 25 minutes, and 45 seconds
      { ms: 0, expected: "00:00:00" }, // 0 milliseconds
    ];

    testCases.forEach((testCase) => {
      const { ms, expected } = testCase;
      const result = convertMsToHMS(ms);
      expect(result).toBe(expected);
    });
  });
});
