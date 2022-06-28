import React from "react";

const MenuItem = (props) => {
  return (
    <>
      <div className="menu-items container-fluid mt-3">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5 gx-5">
              {props.items.map((elem) => {
                const { id, name, image, description, price } = elem;

                return (
                  <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 mb-5">
                    <div className="row Item-inside">
                      <div className="col-3 col-md-4 col-lg-4 img-div">
                        <img src={image} alt={name} className="img-fluid" />
                      </div>

                      <div className="col-9 col-md-8 col-lg-8">
                        <div className="main-title pt-4 pb-3">
                          <h1>{name}</h1>
                          <p>{description}</p>
                        </div>

                        <div className="menu-price">
                          <div className="price-book d-flex justify-content-between ">
                            <h2>price : {price}</h2>
                            <a href="#">
                              <button className="btn btn-primary">
                                Order Now
                              </button>
                            </a>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MenuItem;
