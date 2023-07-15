// import Image from "next/image";
import { removeCartItem } from "@/redux/userSlice/userSlice";
import { Button } from "@mui/material";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.user);
  // window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // JSON.parse(window.localStorage.getItem("cartItems"));
  console.log(cartItems);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>

          {item.images.map((imageUrl) => (
            <Image
              key={imageUrl}
              src={imageUrl}
              width={177}
              height={100}
              alt="userImage"
            />
          ))}
          <p>{item.category}</p>
          <p>{item.description}</p>
          <Button
            color="error"
            variant="contained"
            onClick={() => dispatch(removeCartItem(item.id))}
          >
            Remove From Cart
          </Button>
          <hr />
        </div>
      ))}
    </div>
  );
}
