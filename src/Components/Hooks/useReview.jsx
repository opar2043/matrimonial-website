import { useEffect, useState } from "react";

const useReview = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("https://make-marriege-server.vercel.app/success")
    // fetch('story.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReview(data);
      });
  }, []);

  return [review];
};

export default useReview;
