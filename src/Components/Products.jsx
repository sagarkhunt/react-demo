import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/products/product.fetch";
import { Col, Form, Row } from "react-bootstrap";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state?.products);

  // const [temp, setTemp] = useState("");
  const [sort, setSort] = useState("");

  const [filter, setFilters] = useState({
    limit: 50,
    page: 1,
    search: "",
  });
  // const changeFilter = (name, value) => {
  //   setFilters({ ...filter, [name]: value });
  // };

  const handleSort = (value) => setSort(value);

  const changeLimit = (limit) => {
    setFilters({ ...filter, limit: limit, page: 1 });
  };

  const changeSearch = (search) => {
    setFilters({ ...filter, search: search, page: 1 });
  };
  useEffect(() => {
    const payload = { ...filter };

    switch (sort) {
      case "name_desc":
        payload["sortBy"] = "fullName";
        payload["sort"] = 1;
        break;

      case "date_desc":
        payload["sortBy"] = "createdAt";
        payload["sort"] = -1;
        break;

      default:
        payload["sortBy"] = "fullName";
        payload["sort"] = -1;
        break;
    }

    dispatch(getProduct(payload));
  }, [filter, dispatch, sort]);
  return (
    <>
      <section className="usersScreenSection w-100">
        <div className="filterPart flex-wrap">
          <div className="leftPart">
            <Form>
              <Row className="gx-2 gx-lg-5">
                <Col
                  lg={"auto"}
                  md={2}
                  sm={12}
                  className="d-flex align-items-center flex-column flex-xl-row mb-3 mb-md-0">
                  <Form.Label className="mb-0 me-2 font18White">
                    Show
                  </Form.Label>
                  <Form.Select
                    value={filter.limit}
                    onChange={(e) => changeLimit(e.target.value)}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                  </Form.Select>
                </Col>
                <Col
                  lg={"auto"}
                  md={3}
                  sm={12}
                  className="d-flex align-items-center flex-column flex-xl-row mb-3 mb-md-0">
                  <Form.Label className="mb-0 me-2 font18White">
                    Filter
                  </Form.Label>
                  <Form.Select
                    value={sort}
                    onChange={(e) => handleSort(e.target.value)}>
                    <option value={"name_asc"}>By Name</option>
                    <option value={"name_desc"}>Sort by Name (A-Z)</option>
                    <option value={"date_desc"}>Sort By Date</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form>
          </div>
          <div className="searchPart position-relative mt-lg-3 mt-xl-0">
            <Form.Control
              type="text"
              placeholder="Search..."
              className="searchField"
              value={filter.search}
              onChange={(e) => changeSearch(e.target.value)}
            />
            <button className="searchBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17">
                <text
                  id="_"
                  data-name=""
                  transform="translate(0 14)"
                  fill="#464646"
                  fontSize="16"
                  fontFamily="FontAwesome5Free-Solid, 'Font Awesome 35  Free'">
                  <tspan x="0" y="0">
                    
                  </tspan>
                </text>
              </svg>
            </button>
          </div>
        </div>
      </section>
      <div style={{ display: "flex" }}>
        <div
          className="App"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            width: "80%",
          }}>
          {products?.records.map((prod) => (
            <div
              key={prod.id}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 10,
                border: "1px solid grey",
                width: "30%",
                marginTop: 10,
                gap: 10,
              }}>
              <img
                src={prod.thumbnail}
                alt={prod.title}
                style={{ height: 200, objectFit: "cover" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{prod.title}</span>
                <b>$ {prod.price}</b>
              </div>
              <button
                style={{
                  padding: 5,
                  border: 0,
                  borderRadius: 5,
                  backgroundColor: "#e53935",
                  color: "white",
                }}
                // onClick={() =>
                //   dispatch({
                //     type: "REMOVE_FROM_CART",
                //     payload: prod,
                //   })
                // }
              >
                Remove from Cart
              </button>
              <button
                style={{
                  padding: 5,
                  border: 0,
                  borderRadius: 5,
                  backgroundColor: "green",
                  color: "white",
                }}
                // onClick={() =>
                //   dispatch({
                //     type: "ADD_TO_CART",
                //     payload: {
                //       id: prod.id,
                //       title: prod.title,
                //       thumbnail: prod.thumbnail,
                //       qty: prod.qty,
                //       price: prod.price,
                //     },
                //   })
                // }
              >
                Add to Cart
              </button>
              {/* {cart.some((p) => p.id === prod.id) ? (
            <button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: "#e53935",
                color: "white",
              }}
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }>
              Remove from Cart
            </button>
          ) : (
            <button
              style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor: "green",
                color: "white",
              }}
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    id: prod.id,
                    title: prod.title,
                    thumbnail: prod.thumbnail,
                    qty: prod.qty,
                    price: prod.price,
                  },
                })
              }>
              Add to Cart
            </button>
          )} */}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 10,
            backgroundColor: "#ececec",
            padding: 10,
            width: "20%",
          }}>
          <b style={{ fontSize: 30, alignSelf: "center" }}>Cart</b>
          <b style={{ alignSelf: "center" }}>Subtotal: $ 10</b>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            {/* {cart.length > 0 ? ( */}
            {/* cart.map((prod) => ( */}
            <div
              // key={prod.title}
              style={{
                display: "flex",
                padding: 10,
                border: "1px solid grey",
                margin: 5,
                justifyContent: "space-between",
              }}>
              <div style={{ display: "flex", gap: 10 }}>
                <img
                  src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                  alt="iPhone"
                  style={{ width: 70, objectFit: "cover" }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}>
                  <span>iPhone 9</span>
                  <b>$ 549</b>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <button
                // onClick={() => changeQty(prod.id, prod.qty - 1)}
                >
                  -
                </button>
                <span>10</span>
                <button
                // onClick={() => changeQty(prod.id, prod.qty + 1)}
                >
                  +
                </button>
              </div>
            </div>
            {/* )) ) : ( */}
            <span style={{ padding: 20, alignSelf: "center" }}>
              Cart is empty
            </span>
            {/* )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
