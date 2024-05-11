import { Route, Routes } from "react-router-dom";
import "./App.css";
import EffectOne from "./components/02-03/03-03/EffectOne";
import Counter from "./components/02-03/counter";
import EffectTwo from "./components/02-03/03-03/EffectTwo";
import EffectThree from "./components/02-03/03-03/EffectThree";
import EffectFour from "./components/02-03/03-03/EffectFour";
import Welcome from "./components/02-03/03-03/Welcome";
import Register from "./components/02-03/06-03/Register";
import CounterRedux from "./components/02-03/20-03/CounterRedux";
import UseReducer from "./components/02-03/09-03/UseReducer";
import UseMemo from "./components/02-03/22-03/Usememo";
import UseCallback from "./components/02-03/23-03/UseCallback";
import { useState } from "react";
import PropsDrilling from "./components/02-03/09-03/PropsDrilling";
import AllProducts from "./components/02-03/10-03/AllProducts";
import Themechanging from "./components/02-03/themeredux/Themeindex";
import { useDispatch, useSelector } from "react-redux";
import FakeStoreAllProducts from "./components/02-03/10-03/FakeStoreAllProducts";
import Home from "./components/02-03/Home";
import Login from "./components/Login";
import Todo from "./components/Todo";
import NotFound from "./components/Notfound";
import FakeStoreSingleProduct from "./components/16-03/FakeStoreSingleProducts";
import PropFilter from "./components/PropFilter";
import Navbar2 from "./components/Navbar";
import AddProduct from "./components/09-05/AddProduct";


function App() {
  const [allProducts, setAllProducts] = useState([]); // to just get products 20 -> 20
  //   console.log(allProducts, "allProducts");

  const [search, setSearch] = useState(""); // shose
  const [filterProducts, setFilterProducts] = useState([]); // [{},{} ] setting here // 20 -> 10 4
  //

  function handleChange(event) {
    console.log(event.target.value);
    setSearch(event.target.value);

    let userword = event.target.value.toLowerCase();

    const filteredProduts = allProducts.filter((product) => {
      // 20 -> men
      // 20 -> 4 -> 4 result show
      return product.title.toLowerCase().includes(userword);
    });

    setFilterProducts(filteredProduts); // 20 -> 4

    console.log(filteredProduts, "filteredProduts");
  }
  const theme = useSelector((state) => state.changeTheTheme);
  // const dispatch = useDispatch();
  const [students, setStudents] = useState(["a", "b", "c", "d"]);
  const [counter, setCounter] = useState(1234);
  const [products, setProducts] = useState([
    {
      name: "T-shirt",
      image:
        "https://www.beyoung.in/api/cache/catalog/products/images_for_customized_products_26_4_2022/custom_t-shirt_men_base_26_4_2022_700x933.jpg",
    },
    {
      name: "Jeans",
      image:
        "https://www.beyoung.in/api/cache/catalog/products/images_for_customized_products_26_4_2022/custom_t-shirt_men_base_26_4_2022_700x933.jpg",
    },
    {
      name: "Cap",
      image:
        "https://www.beyoung.in/api/cache/catalog/products/images_for_customized_products_26_4_2022/custom_t-shirt_men_base_26_4_2022_700x933.jpg",
    },
    {
      name: "Cap",
      image:
        "https://www.beyoung.in/api/cache/catalog/products/images_for_customized_products_26_4_2022/custom_t-shirt_men_base_26_4_2022_700x933.jpg",
    },
    {
      name: "Cap",
      image:
        "https://www.beyoung.in/api/cache/catalog/products/images_for_customized_products_26_4_2022/custom_t-shirt_men_base_26_4_2022_700x933.jpg",
    },
    {
      name: "Cap",
      image:
        "https://www.beyoung.in/api/cache/catalog/products/images_for_customized_products_26_4_2022/custom_t-shirt_men_base_26_4_2022_700x933.jpg",
    },
    {
      name: "Cap",
      image:
        "https://www.beyoung.in/api/cache/catalog/products/images_for_customized_products_26_4_2022/custom_t-shirt_men_base_26_4_2022_700x933.jpg",
    },
    {
      name: "Cap",
      image:
        "https://www.beyoung.in/api/cache/catalog/products/images_for_customized_products_26_4_2022/custom_t-shirt_men_base_26_4_2022_700x933.jpg",
    },
    {
      name: "Cap",
      image:
        "https://www.beyoung.in/api/cache/catalog/products/images_for_customized_products_26_4_2022/custom_t-shirt_men_base_26_4_2022_700x933.jpg",
    },
    {
      name: "Cap",
      image:
        "https://www.beyoung.in/api/cache/catalog/products/images_for_customized_products_26_4_2022/custom_t-shirt_men_base_26_4_2022_700x933.jpg",
    },
  ]);

  return (
    <div className="App" style={{ backgroundColor: theme === "DARK" ? "black" : "white" }}>
      {/* <Navbar2 search={search} handleChange={handleChange} /> */}
      <Routes>
      <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/counter" element={<Counter />} />
        <Route path="/effect-1" element={<EffectOne />} />
        <Route path="/effect-2" element={<EffectTwo />} />
        <Route path="/effect-3" element={<EffectThree />} />
        <Route path="/effect-4" element={<EffectFour />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/propsdrilling"
          element={<PropsDrilling counter={counter} students={students} />}
        />
        <Route path="/todo" element={<Todo />} />
        <Route path="/counter-redux" element={<CounterRedux />} />
        <Route path="/use-reducer" element={<UseReducer />} />
        <Route path="/use-memo" element={<UseMemo />} />
        <Route path="/use-callback" element={<UseCallback />} />
        <Route path="/All-products" element={<AllProducts awdiz={products} />}/>
        <Route path="/fake-all-products" element={<FakeStoreAllProducts/>}/>
        <Route path="/fake-single-product/:id" element={<FakeStoreSingleProduct/>}/>
        {/* <Route path="/currencyConverter" element={<CurrencyConverter/>}/> */}
        <Route
          path="/prop-filter"
          element={
            <PropFilter
              setAllProducts={setAllProducts}
              setFilterProducts={setFilterProducts}
              filterProducts={filterProducts}
            />
          }
        />
        <Route path="/add-product" element={<AddProduct/>}/>
        </Routes>
    </div>
  );
}

export default App;
