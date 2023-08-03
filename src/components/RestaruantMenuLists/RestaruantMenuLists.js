
import {CDN_IMG_URL} from "../../utils/config"

const RestaruantMenuLists = ({itemCards}) => {
  return (
    <>
      {itemCards.map((itemCard, index) => {
        const {name, description, price, imageId} = itemCard?.card?.info;
        return (
          <div className="flex justify-between gap-7 py-7 border-b" key={index}>
            <div className="">
              <div className="w-4 h-4 border-2 border-green-800 relative">
                <div className="rounded-full w-2 h-2 bg-green-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <div className="flex flex-col justify-start gap-1 pt-1">
                <p className="font-bold text-xl text-zinc-600">{name}</p>
                <p className="text-zinc-600">₹ {price /100}</p>
                <p className="text-xs text-gray-400">{description}
                </p>
              </div>
            </div>
            <di className="">
              <div className="w-36 flex flex-col justify-center items-center relative">
                <img
                  src={CDN_IMG_URL+imageId}
                  alt=""
                  className="w-40 h-24 rounded-lg"
                />
                <button className="absolute top-[75] font-bold text-green-600 bg-slate-100 px-6 py-1 rounded-md">ADD</button>
              </div>
            </di>
          </div>
        );
      })}
    </>
  );
};

export default RestaruantMenuLists;
