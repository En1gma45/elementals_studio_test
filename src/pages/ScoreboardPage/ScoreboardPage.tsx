import PlayerCard from "components/PlayerCard";
import { useCallback, useRef, useState } from "react";
import { useAddNewPlayer } from "hooks/useAddNewPlayers";

const ScoreboardPage = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const { isLoading, players } = useAddNewPlayer(page);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastVisiblePlayer = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

  return (
    <div className="bg-slate-500 w-full h-full p-4">
      {isLoading && <div className="w-[100vw] h-[100vh] bg-slate-500"></div>}
      {players.map((item, index) => {
        if (players.length === index + 1) {
          return (
            <div
              ref={lastVisiblePlayer}
              key={`${item.name}+${item.time}`}
              className="min:w-full mid:w-1/2 max:w-1/3 mx-auto h-16"
            >
              <PlayerCard
                position={index + 1}
                name={item.name}
                color={item.color}
                speed={item.speed}
                time={item.time}
              />
            </div>
          );
        }
        return (
          <div
            key={`${item.name}+${item.time}`}
            className="min:w-full mid:w-1/2 max:w-1/3 mx-auto h-16"
          >
            <PlayerCard
              position={index + 1}
              name={item.name}
              color={item.color}
              speed={item.speed}
              time={item.time}
            />
          </div>
        );
      })}
      {isLoading && players.length > 0 && (
        <div className="mx-auto h-60 flex justify-center items-center">
          Loading...
        </div>
      )}
    </div>
  );
};

export default ScoreboardPage;
