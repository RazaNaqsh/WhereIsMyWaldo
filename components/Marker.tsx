import { Marker } from "@/utils/types";

const MarkerCircle = ({ marker }: { marker: Marker }) => {
  return (
    <div
      className="absolute w-[90px] h-[90px] rounded-full border-[5px] border-dashed border-blue-500 bg-black bg-opacity-40 transform -translate-x-1/2 -translate-y-1/2 z-50"
      style={{ left: marker.x, top: marker.y }}
    ></div>
  );
};

export default MarkerCircle;
