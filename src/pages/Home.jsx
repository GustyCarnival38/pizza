import { useState, useEffect } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

function Home({ searchValue }) {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProperty: "rating",
  });

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6808f857942707d722e0948a.mockapi.io/react-pizza?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortType.sortProperty}${
        sortType.sortProperty === "title" ? "" : "&order=desc"
      }${searchValue ? `&search=${searchValue}` : ""}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      });
    window.scroll(0, 0);
  }, [categoryId, sortType, searchValue]);

  const skeletonsList = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const pizzasList = pizzas
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue)) {
        return true;
      }
      return false;
    })
    .map((item) => <PizzaBlock key={item.id} {...item} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(index) => setCategoryId(index)}
        />
        <Sort
          sortValue={sortType}
          onClickType={(index) => setSortType(index)}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? skeletonsList : pizzasList}
      </div>
    </div>
  );
}

export default Home;
