const request = require("supertest");
const app = require("../src/app");

describe("Page Pulse API", () => {

    test("GET / should return application info", async () => {

        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body.application).toBe("Page Pulse API");

    });

    test("POST /api/audit without URL should return 400", async () => {

        const response = await request(app)
            .post("/api/audit")
            .send({});

        expect(response.statusCode).toBe(400);

    });

});