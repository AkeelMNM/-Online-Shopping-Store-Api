import request from "supertest";
import app from "../app";

const contentItem = {
    type:'Test Type',
    image:'Test Image'
}

describe("POST content/", () => {
    it("Should store the content item", async () => {
        const res = await request(app).post("/content").send(contentItem);
        expect(res.statusCode).toBe(200);
        expect(res.body.type).toBe(contentItem.type);
    });
});


describe("GET content/", () => {
  it("Should return all content", async () => {
    const res = await request(app).get("/content");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
