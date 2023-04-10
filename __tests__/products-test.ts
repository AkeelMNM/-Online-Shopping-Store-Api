import request from "supertest";
import app from "../app";

describe("GET /products", () => {
  it("Should return all products", async () => {
    const res = await request(app).get("/product");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("GET /product/category", () => {
  it("Should return all products category", async () => {
    const res = await request(app).get("/product/category?name=Dress;Men");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});