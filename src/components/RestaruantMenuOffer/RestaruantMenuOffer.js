const RestaruantMenuOffer = ({offers}) => {
  return (
    <>
      {offers.map((offer, index) => {
        const {offerTagColor, offerTag, header, couponCode, description} =
          offer.info;
        return (
          <div className="flex border w-52 h-16 flex-shrink-0 items-center justify-center rounded-md" key={index}>
            {/* <div className="">
              <p className="-rotate-90 font-thin text-xs" style={{color: offer.info.offerTagColor}}>
                {offer.info.offerTag}
              </p>
            </div> */}
            <div className="flex flex-col justify-center items-center">
              <div className="font-bold text-sm text-zinc-600">{offer.info.header}</div>
              <div className="font-bold text-xs text-gray-500">
                {offer.info.couponCode} | {offer.info.description}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RestaruantMenuOffer;
