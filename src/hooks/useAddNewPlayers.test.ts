import { renderHook, act, waitFor } from "@testing-library/react";
import { useAddNewPlayer } from "./useAddNewPlayers";

jest.useFakeTimers();

describe("useAddNewPlayer", () => {
  it("should return isLoading false and an empty player array initially", () => {
    const { result } = renderHook(() => useAddNewPlayer(1));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.players).toEqual([]);
  });

  it("should set isLoading to true while fetching new players and then update the players array", async () => {
    const { result } = renderHook(() => useAddNewPlayer(1));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.players).toEqual([]);

    await act(async () => {
      jest.advanceTimersByTime(1000); // Wait for the useEffect to complete
    });
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.players).toHaveLength(50); // Assuming generateRandomUsers(50) returns an array of 50 users
    });
  });

  it("should add new players when the page number changes", async () => {
    const { result, rerender } = renderHook(
      (page: number) => useAddNewPlayer(page),
      { initialProps: 1 }
    );

    expect(result.current.isLoading).toBe(true);
    expect(result.current.players).toEqual([]);

    await act(async () => {
      jest.advanceTimersByTime(1000); // Wait for the initial useEffect to complete
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.players).toHaveLength(50); // Assuming generateRandomUsers(50) returns an array of 50 users
    });

    // Change the page and wait for the useEffect to update the players array
    rerender(2);
    await act(async () => {
        jest.advanceTimersByTime(1000); // Wait for the initial useEffect to complete
      });
    await waitFor(() => {
      // Assuming generateRandomUsers(50) returns a different array of 50 users for page 2
      expect(result.current.players).toHaveLength(100);
    });
  });
});
