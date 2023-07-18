// kPYsTQSzWrahtW0gtdTKNZXYqO2XLj503JdIw6GfCoha7knP0q3LLyv8fjj1AeTW
import { Mongodb } from "@/utils/mongodb";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).end();
    return;
  }

  const result = await Mongodb("find", {});

  res.status(200).json(result);
}
