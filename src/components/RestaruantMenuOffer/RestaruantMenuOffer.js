import "./RestaruantMenuOffer.css";

const RestaruantMenuOffer = ({offers}) => {
  return (
    <>
      {offers.map((offer, index) => {
        const {offerTagColor, offerTag, header, couponCode, description} =
          offer.info;
        return (
          <div className="restaruantMenuOffer-container" key={index}>
            <div className="offers-coupens-container">
              <div className="offer-tag">
                <span
                  className="offer"
                  style={{color: offer.info.offerTagColor}}
                >
                  {offer.info.offerTag}
                  {}
                </span>
              </div>
              <div className="offer-header-coupen-code">
                <span className="offer-name">{offer.info.header}</span>
                <span className="coupen-name">
                  {offer.info.couponCode} | {offer.info.description}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RestaruantMenuOffer;
