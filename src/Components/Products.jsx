import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/products/product.fetch";
import { Col, Form, Row } from "react-bootstrap";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  console.log("🚀 ~ file: Products.jsx:8 ~ Products ~ products:", products);
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
      <div className="listing-section">
        <div className="product">
          <div className="image-box">
            <div className="images" id="image-1"></div>
          </div>
          <div className="text-box">
            <h2 className="item">Orange</h2>
            <h3 className="price">$4.99</h3>
            <p className="description">A bag of delicious oranges!</p>
            <label htmlFor="item-1-quantity">Quantity:</label>
            <input type="text" name="item-1-quantity" id="item-1-quantity" />
            <button type="button" name="item-1-button" id="item-1-button">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="product">
          <div className="image-box">
            <div className="images" id="image-2"></div>
          </div>
          <div className="text-box">
            <h2 className="item">Apple</h2>
            <h3 className="price">$4.99</h3>
            <p className="description">A bag of delicious apples!</p>
            <label htmlFor="item-2-quantity">Quantity:</label>
            <input type="text" name="item-2-quantity" id="item-2-quantity" />
            <button type="button" name="item-2-button" id="item-2-button">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="product">
          <div className="image-box">
            <div className="images" id="image-3"></div>
          </div>
          <div className="text-box">
            <h2 className="item">Passionfruit</h2>
            <h3 className="price">$4.99</h3>
            <p className="description">A bag of delicious passionfruit!</p>
            <label htmlFor="item-3-quantity">Quantity:</label>
            <input type="text" name="item-3-quantity" id="item-3-quantity" />
            <button type="button" name="item-3-button" id="item-3-button">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="product">
          <div className="image-box">
            <div className="images" id="image-4"></div>
          </div>
          <div className="text-box">
            <h2 className="item">Pineapple</h2>
            <h3 className="price">$4.99</h3>
            <p className="description">A bag of delicious pineapples!</p>
            <label htmlFor="item-4-quantity">Quantity:</label>
            <input type="text" name="item-4-quantity" id="item-4-quantity" />
            <button type="button" name="item-4-button" id="item-4-button">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="product">
          <div className="image-box">
            <div className="images" id="image-5"></div>
          </div>
          <div className="text-box">
            <h2 className="item">Mango</h2>
            <h3 className="price">$4.99</h3>
            <p className="description">A bag of delicious mangos!</p>
            <label htmlFor="item-5-quantity">Quantity:</label>
            <input type="text" name="item-5-quantity" id="item-5-quantity" />
            <button type="button" name="item-5-button" id="item-5-button">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="product">
          <div className="image-box">
            <div className="images" id="image-6"></div>
          </div>
          <div className="text-box">
            <h2 className="item">Coconut</h2>
            <h3 className="price">$4.99</h3>
            <p className="description">A bag of delicious coconuts!</p>
            <label htmlFor="item-6-quantity">Quantity:</label>
            <input type="text" name="item-6-quantity" id="item-6-quantity" />
            <button type="button" name="item-6-button" id="item-6-button">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
