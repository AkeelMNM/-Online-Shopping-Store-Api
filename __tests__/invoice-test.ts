import request from "supertest";
import app from "../app";

const invoice = {
    userId: "641fea3f8bd157533c96831b",
    fullName: "User 1",
    address: "Test Address",
    city: "Test City",
    province: "Test Province",
    mobileNo: "1234567890"
}

let invoiceId = '';

describe("POST payment/", () => {
    it("Should store the invoice details", async () => {
        const res = await request(app).post("/payment").send(invoice);
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("User order shipping data is successfully stored");
    });
});

describe("DELETE payment/id", () => {
    it("Should delete the invoice details", async () => {
        const res = await request(app).del(`/payment/${invoiceId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("User Payment Details Successfully Removed");
    });
});