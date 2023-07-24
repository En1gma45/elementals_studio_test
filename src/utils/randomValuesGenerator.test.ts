import { Color } from "../types/player";
import {
  generateRandomColor,
  generateRandomName,
  generateRandomSpeed,
  generateRandomTime,
  generateRandomUsers,
} from "./randomValuesGenerator";

describe("generateRandomColor", () => {
  it("should return a valid color", () => {
    const color = generateRandomColor();
    expect([Color.RED, Color.GREEN, Color.BLUE]).toContain(color);
  });
});

describe("generateRandomName", () => {
  it("should return a valid name", () => {
    const name = generateRandomName();
    expect(typeof name).toBe("string");
    expect(name).toBeTruthy(); // Check if the name is not an empty string
  });
});

describe("generateRandomSpeed", () => {
  it("should return a valid speed", () => {
    const speed = generateRandomSpeed();
    expect(speed).toBeGreaterThanOrEqual(50);
    expect(speed).toBeLessThanOrEqual(350);
  });
});

describe("generateRandomTime", () => {
  it("should return a valid time", () => {
    const time = generateRandomTime();
    expect(time).toBeGreaterThanOrEqual(60000); // 1 minute in ms
    expect(time).toBeLessThanOrEqual(600000); // 10 minutes in ms
  });
});

describe("generateRandomUserArray", () => {
  it("should return an array with the specified length", () => {
    const numberOfUsers = 5;
    const users = generateRandomUsers(numberOfUsers);
    expect(users).toHaveLength(numberOfUsers);
  });

  it("each user object should have valid properties", () => {
    const numberOfUsers = 10;
    const users = generateRandomUsers(numberOfUsers);

    for (const user of users) {
      expect(user).toHaveProperty("color");
      expect(user).toHaveProperty("name");
      expect(user).toHaveProperty("speed");
      expect(user).toHaveProperty("time");

      expect(typeof user.color).toBe("number");
      expect(typeof user.name).toBe("string");
      expect(typeof user.speed).toBe("number");
      expect(typeof user.time).toBe("number");
    }
  });
});
