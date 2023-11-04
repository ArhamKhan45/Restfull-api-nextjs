import {
  customerror,
  datasender,
  catchAsyncError,
} from "@/Middleware/allerror";

import productmodel from "@/schema/productschema";
import { ConnectDatabase } from "@/utils/ConnectDatabase";

const getallproducts = catchAsyncError(
  async (req = Request, res = Response) => {
    await ConnectDatabase();
    if (req.method === "GET") {
      const allproducts = await productmodel.find();

      datasender(res, 200, allproducts);
    } else {
      customerror(req, res, 200, "Invalid method! For Get method only");
    }
  }
);
export default getallproducts;
