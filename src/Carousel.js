import react, { useEffect, useState } from "react";

const items = [
  {
    id: 1,
    imageUrl:
      "https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 1",
    description: "Description of item 1"
  },
  {
    id: 2,
    imageUrl:
      "https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 2",
    description: "Description of item 2"
  },
  {
    id: 3,
    imageUrl:
      "https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Item 3",
    description: "Description of item 3"
  }
];

export default function Carousel() {
  const [currentState, setState] = useState(0);
  const next = () => {
    if (currentState === items.length - 1) {
      setState(0);
    } else {
      setState((curr) => curr + 1);
    }
  };
  const prev = () => {
    if (currentState === 0) {
      setState(items.length - 1);
    } else {
      setState((curr) => curr - 1);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 2000);
    return () => clearInterval(timer);
  }, [currentState]);

  return (
    <>
      <button onClick={prev}>Previous</button>
      <div>
        <img
          height="100"
          width="200"
          src={items[currentState].imageUrl}
          alt={items[currentState].title}
        />
      </div>
      <div>{items[currentState].description}</div>
      <button onClick={next}>Next</button>
    </>
  );
}
