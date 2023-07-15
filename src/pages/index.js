import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, setCount, showUserData } from "@/redux/userSlice/userSlice";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "@mui/material";
export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return {
    props: {
      data: data.products.slice(0, 10),
    },
  };
}

const HomePage = ({ data }) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(showUserData(data));
  }, [data, dispatch]);

  console.log(userData);
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <div>
      {userData.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.title}</p>{" "}
            <div className={styles.btn}>
              <Button variant="contained" onClick={() => handleAddToCart(user)}>
                Add To Cart
              </Button>
            </div>
            <div className={styles.image_conatiner}>
              {user.images.map((imageUrl) => (
                <Image
                  key={imageUrl}
                  src={imageUrl}
                  width={177}
                  height={100}
                  alt="userImage"
                />
              ))}
            </div>
            <span>Price:{user.price}</span>
            <h6>Discount:{user.discountPercentage}</h6>
            <h4>Description:{user.description}</h4>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
export default HomePage;
