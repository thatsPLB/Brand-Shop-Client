import { useState } from "react";
import Navbar from "../Home/Navbar";
import axios from "axios";

const AddProducts = () => {
  // const handleAddProducts = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const name = form.name.value;
  //   const url = form.url.value;
  //   const bName = form.bname.value;
  //   const type = form.type.value;
  //   const description = form.description.value;
  //   const rating = form.rating.value;

  //   const newProducts = { name, url, bName, type, description, rating };
  //   console.log(newProducts);

  //   // send data to the server
  // };

  const [pname, setPname] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [bname, setBname] = useState("");
  const [sdiscription, setSdiscription] = useState("");
  const [option, setOption] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");

  // const [type]
  const addProduct = () => {
    axios
      .post("http://localhost:8000/addproduct", {
        product_name: pname,
        image_url: imageurl,
        brand_name: bname,
        discription: sdiscription,
        option: option,
        rating: rating,
        price: price
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-sky-100 p-24">
        <h2 className="text-3x text-center font-extrabold">Add Products</h2>
        <form onSubmit={addProduct}>
          {/* form row */}
          <div className="md:flex ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text ">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Product name"
                  name="name"
                  className="input input-bordered w-full"
                  onChange={(e) => setPname(e.target.value)}
                  style={{ color: "white" }}
                />
              </label>
            </div>

            <div className="form-control md: w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Product Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  placeholder="product price"
                  name="rating"
                  className="input input-bordered w-full"
                  style={{ color: "white" }}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>
            </div>

            
          </div>

          <div>
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Image URL"
                  name="url"
                  className="input input-bordered w-full"
                  style={{ color: "white" }}
                  onChange={(e) => setImageurl(e.target.value)}
                />
              </label>
            </div>
          </div>
          {/* Brand name & type row */}
          <div className="md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="brand name"
                  name="bname"
                  className="input input-bordered  w-full"
                  style={{ color: "white" }}
                  onChange={(e) => setBname(e.target.value)}
                />
              </label>
            </div>
            <div className="form-control md: w-1/2 ml-4">
              {/* <label className="label">
                <span className="label-text">Type</span>
              </label>
              <label className="input-group">
                <select name="" id="">
                  <option value="phone">Phone</option>
                  <option value="laptop">Laptop</option>
                </select> */}
              {/* <input
                  type="text"
                  placeholder="Type"
                  name="type"
                  className="input input-bordered w-full"
                  style={{ color: "white" }}
                /> */}
              {/* </label> */}

              <label for="countries" class="label">
                <span className="label-text">Select a type</span>
              </label>
              <select
                id="countries"
                class=" rounded-r block w-full p-3 bg-gray-950 text-white"
                onChange={(e) => setOption(e.target.value)}
              >
                <option selected>Choose a type</option>
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
                <option value="laptop">Laptop</option>
                <option value="headphone">Headphone</option>
              </select>
            </div>
          </div>
          {/* Short description & rating  row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text ">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="short description"
                  name="description"
                  className="input input-bordered text-white w-full"
                  style={{ color: "white" }}
                  onChange={(e) => setSdiscription(e.target.value)}
                />
              </label>
            </div>
            <div className="form-control md: w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  placeholder="rating"
                  name="rating"
                  className="input input-bordered w-full"
                  style={{ color: "white" }}
                  onChange={(e) => setRating(e.target.value)}
                />
              </label>
            </div>
            
          </div>

          <input
            type="submit"
            value="Add Products"
            className="btn btn-block"
          />
        </form>
      </div>
    </>
  );
};

export default AddProducts;
