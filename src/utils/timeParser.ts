export const convertMsToHMS = (timeInMs: number): string => {
  const hours = Math.floor(timeInMs / (1000 * 60 * 60));
  const minutes = Math.floor((timeInMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeInMs % (1000 * 60)) / 1000);

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};
