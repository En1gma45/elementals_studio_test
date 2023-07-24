import { FunctionComponent } from "react";
import { User } from "src/types/player";
import { convertMsToHMS } from "../utils/timeParser";
import HelmetIcon from "../assets/HelmetIcon";

interface PlayerCardProps extends User {
  position: number;
}

const PlayerCard: FunctionComponent<PlayerCardProps> = ({
  position,
  name,
  color,
  speed,
  time,
}) => {
  return (
    <div className="w-full h-full flex flex-row justify-between items-center border-2 rounded border-black my-4 px-4">
      <p className=" w-2 text-xs mid:text-base">{position}</p>
      <div className="h-full scale-[65%] flex items-center">
        <HelmetIcon color={color}/>
      </div>
      <div className=" flex flex-col items-center w-1/2" id="info">
        <p className="">{name}</p>
        <p className=" text-purple-600 text-xs mid:text-base">
          {convertMsToHMS(time)}{" "}
          <span className=" text-sky-600">| {speed} км/ч</span>
        </p>
      </div>
    </div>
  );
};

export default PlayerCard;
