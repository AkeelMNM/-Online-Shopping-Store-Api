import request from "supertest";
import app from "../app";

const cartItem = {
    userId: "641fea3f8bd157533c96831b",
    productId: "prod-1",
    variantId: "var-1123",
    title: "Formal Dress Shirts Casual Long Sleeve Slim Fit",
    size: "XS",
    color: "blue",
    quantity: 1,
    price: 25,
    isFreeShipping: false,
    image: "https://localhost:5000/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Blue.png",
    isPaymentComplete: false,
}

let itemId = '';

describe("POST cart/", () => {
    it("Should store the cart item", async () => {
        const res = await request(app).post("/cart").send(cartItem);
        expect(res.statusCode).toBe(200);
        expect(res.body.userId).toBe(cartItem.userId);
        itemId = res.body._id;
    });
});

describe("GET cart/:userId", () => {
    it("Should return cart item by user", async () => {
        const res = await request(app).get(`/cart/${cartItem.userId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body[0].userId).toBe(cartItem.userId);
    });
});

describe("PUT cart/", () => {
    it("Should update the cart item", async () => {
        const res = await request(app).put(`/cart/${itemId}`).send({ quantity: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("Shopping cart item successfully updated");
    });
});

describe("PUT cart/payment/status", () => {
    it("Should update payment status of the cart item", async () => {
        const res = await request(app).put(`/cart/payment/status`).send({ itemIds: [itemId] });
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("Shopping cart item payment status updated");
    });
});

describe("DELETE cart/id", () => {
    it("Should delete the cart item", async () => {
        const res = await request(app).del(`/cart/${itemId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("Shopping Cart Item Successfully Removed");
    });
});

describe("DELETE cart/user/userId", () => {
    it("Should delete cart items of the user", async () => {
        const res = await request(app).del(`/cart/user/${cartItem.userId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe(`Shopping Cart Items of userId:${cartItem.userId} Successfully Removed`);
    });
});
