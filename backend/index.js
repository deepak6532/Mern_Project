const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Stripe = require("stripe");

const app = express();
app.use(cors()); // allows all origins

app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;
// MONGODB CONNACTION
// console.log(process.env.MONGODB_URL);
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connect to Databse"))
  .catch((err) => console.log(err));

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

// model
const userModel = mongoose.model("user", userSchema);

// API
app.get("/", (req, res) => {
  res.send("deepak is running");
});
//sign up
app.post("/signup", async (req, res) => {
  // console.log(req.body);
  const { email } = req.body;

  userModel.findOne({ email: email }, (err, result) => {
    // console.log(result);
    console.log(err);
    if (result) {
      res.send({ message: "Email id is already register", alert: false });
    } else {
      const data = userModel(req.body);
      const save = data.save();
      res.send({ message: "Successfully sign up", alert: true });
    }
  });
});
//api login
app.post("/login", (req, res) => {
  // console.log(req.body);
  const { email } = req.body;
  userModel.findOne({ email: email }, (err, result) => {
    if (result) {
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };
      //   console.log(dataSend);
      res.send({
        message: "Login is successfully",
        alert: true,
        data: dataSend,
      });
    } else {
      res.send({
        message: "Email is not available, please sign up",
        alert: false,
      });
    }
  });
});

//product section

const schemaProduct = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String,
});
const productModel = mongoose.model("product", schemaProduct);

//save product in data
//api
app.post("/uploadProduct", async (req, res) => {
  // console.log(req.body)
  const data = await productModel(req.body);
  const datasave = await data.save();
  res.send({ message: "Upload successfully" });
});

// get product
app.get("/product", async (req, res) => {
  const data = await productModel.find({});
  res.send(JSON.stringify(data));
});

// Update product
app.put("/updateProduct/:id", async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const result = await productModel.findByIdAndUpdate(id, updatedData, {
      new: true, // returns the updated document
    });

    if (result) {
      res.send({ message: "Product updated successfully", data: result });
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error updating product", error });
  }
});



// Delete product
app.delete("/deleteProduct/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await productModel.findByIdAndDelete(id);

    if (result) {
      res.send({ message: "Product deleted successfully", data: result });
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error deleting product", error });
  }
});




/*****payment getWay */
// console.log(process.env.STRIPE_SECRET_KEY);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      // shipping_options: [{ shipping_rate: "shr_1NBY3pSIdZYVEHlOjpjx9hLn" }],

      line_items: req.body.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.name,
              // images : [item.image]
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.qty,
        };
      }),
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    };

    const session = await stripe.checkout.sessions.create(params);
    // console.log(session)
    res.status(200).json({sessionId: session.id});
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
});

app.listen(PORT, () => console.log("Server is running at port: " + PORT));
// om12345
