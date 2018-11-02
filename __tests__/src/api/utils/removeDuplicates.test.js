import { arrayOfObjects, array } from "../../../../src/api/utils/removeDuplicates";

test("Should remove duplicate objects", () => {
  let list = [
    { id: 1, payload: "String" },
    { id: 1, payload: "String" },
    { id: 2, payload: "Array" }
  ];
  let newList = arrayOfObjects({ list, key: "id" });
  expect(newList).toBeInstanceOf(Array);
  expect(newList.length).toBe(2);
  expect(newList.map((o) => o.id)).toEqual([1, 2]);
});

test("Should remove duplicates from array", () => {
  let list = ["hi", "hi", "hello", "greetings"];
  let newList = array(list);
  expect(newList).toBeInstanceOf(Array);
  expect(newList.length).toBe(3);
  expect(newList).toEqual(["hi", "hello", "greetings"]);
});
