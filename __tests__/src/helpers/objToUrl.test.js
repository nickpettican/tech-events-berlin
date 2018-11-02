import objToUrl from "../../../src/helpers/objToUrl";

test("Should return URL extension", () => {
  let obj = {
    hi: "greeting",
    token: "123"
  };
  let expected = "&hi=greeting&token=123";
  let urlExt = objToUrl(obj);
  expect(urlExt).toBe(expected);
});
