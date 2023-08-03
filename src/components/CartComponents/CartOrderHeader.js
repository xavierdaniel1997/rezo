const CartOrderHeader = ({item}) => {
    return (
        <div className=" flex items-start gap-4">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/okmxkcngbaqghhnxtgf5"
            alt=""
            className="w-20"
          />
          <div>
            <h1 className="font-medium">Restaruant Name</h1>
            <p className="pb-6">Location</p>
            <hr className="w-12 h-1 bg-black" />
          </div>
        </div>
    )
}
export default CartOrderHeader;