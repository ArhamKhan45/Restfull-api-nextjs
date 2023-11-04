import {
  datasender,
  customerror,
  catchAsyncError,
} from "@/Middleware/allerror";
import { ConnectDatabase } from "@/utils/ConnectDatabase";
import productmodel from "@/schema/productschema";

const Product = catchAsyncError(async (req = Request, res = Response) => {
  await ConnectDatabase();

  // get a product
  if (req.method === "GET") {
    const product = await productmodel.findById(req.query.id);

    datasender(res, 200, product);
  }

  // update a product
  if (req.method === "PUT") {
    let product = await productmodel.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
    });

    datasender(res, 201, product);
  }

  // delete a product

  if (req.method === "DELETE") {
    const product = await productmodel.findByIdAndDelete(req.query.id);

    if (product) {
      datasender(res, 201, "PRODUCT DELETED SUCCESSFULLY");
    } else {
      customerror(req, res, 404, "PRODUCT NOT FOUND");
    }
  }
});
export default Product;
