import {
  datasender,
  customerror,
  catchAsyncError,
} from "@/Middleware/allerror";
import productmodel from "@/schema/productschema";
import { ConnectDatabase } from "@/utils/ConnectDatabase";
const newproduct = catchAsyncError(async (req = Request, res = Response) => {
  if (req.method === "POST") {
    await ConnectDatabase();
    const newproduct = await productmodel.create(req.body);
    datasender(res, 201, newproduct);
  } else {
    customerror(req, res, 404, "Invalid method! For Post method only");
  }
});
export default newproduct;
