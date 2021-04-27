"use strict";

const supergoose = require("@code-fellows/supergoose");
const { server } = require("../src/server");
const mockReq = supergoose(server);
const basicAuth = require("../src/auth/basicAuth");
const signin = require("../src/auth/signin");

describe("BASIC AUTH TESTING", () => {
  var req;
  var res;
  var next = jest.fn();
  var testuser2 = { username: "test_user2", password: "password" };
  beforeAll(async () => {
    await mockReq.post("/signup").send(testuser2);
  });

  it("The /signup should return the correct status and user record", async () => {
    let testuser = { username: "test_user", password: "password" };
    let res = await mockReq.post("/signup").send(testuser);
    expect(res.body.username).toEqual("test_user");
    expect(res.status).toEqual(201);
  });

  it("The /signup should return an error status for a duplicate username", async () => {
    let testuser = { username: "test_user", password: "password" };
    let tester = { username: "test_user2", password: "1234" };
    await mockReq.post("/signup").send(testuser);
    let res = await mockReq.post("/signup").send(tester);
    expect(res.status).toEqual(403);
  });

  it("The /signin should return the correct status and user record", async () => {
    let res = await mockReq
      .post("/signin")
      .auth(testuser2.username, testuser2.password);
    expect(res.body.user.username).toEqual("test_user2");
    expect(res.status).toEqual(200);
  });

  it("The /signin should return an error for an incorrect password", async () => {
    let res = await mockReq.post("/signin").auth(testuser2.username, 9999);
    expect(res.status).toEqual(500);
  });

  it("The /signin should return an error for a non existing username", async () => {
    let res = await mockReq.post("/signin").auth("random user name", 9999);
    expect(res.status).toEqual(403);
  });

  // it("The middleware function should send the appropriate basic header", async () => {
  // //   let res = await mockReq
  // //     .post("/signin")
  // //     .auth(testuser2.username, testuser2.password);
  // //   console.log(res.body);
  // //   expect(res.body.console).toEqual(
  // //     testuser2.username.concat(":", testuser2.password)
  // //   );
  // //   console.log("mwtest",testuser2)
  //   console.log(await basicAuth(req, res, next));
  // });
});
