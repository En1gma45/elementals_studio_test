import { Color, User } from "../types/player";

function generateRandomColor(): Color {
  const colors = [Color.RED, Color.GREEN, Color.BLUE];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function generateRandomName(): string {
  const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Isaac", "Jane"];
  const surnames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Addeman"];
  const randomIndex = Math.floor(Math.random() * names.length);
  return `${names[randomIndex]} ${surnames[randomIndex]}`;
}

function generateRandomSpeed(): number {
  return Math.floor(Math.random() * 301 + 50); // Random speed between 50 to 350
}

function generateRandomTime(): number {
  return Math.random() * (600000 - 60000 + 1) + 60000; // Random time between 1 to 10 minutes in milliseconds(60000 600000)
}

export function generateRandomUsers(length: number): User[] {
  const users: User[] = [];

  for (let i = 0; i < length; i++) {
    const user: User = {
      color: generateRandomColor(),
      name: generateRandomName(),
      speed: generateRandomSpeed(),
      time: generateRandomTime(),
    };
    users.push(user);
  }

  return users;
}
export {
  generateRandomColor,
  generateRandomName,
  generateRandomSpeed,
  generateRandomTime,
};
