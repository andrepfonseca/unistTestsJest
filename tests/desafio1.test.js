const ds = require("../desafio1");

describe("doubleANumber", () => {
  it("should return the input times two", () => {
    const result = ds.doubleANumber(1);
    expect(result).toBe(2);
    expect(typeof result).toBe("number");
  });
  it("should return NaN if input is a string", () => {
    const result = ds.doubleANumber("a");
    expect(result).toBeNaN();
  });
  it("should return NaN if input is undefined", () => {
    const result = ds.doubleANumber(undefined);
    expect(result).toBeNaN();
  });
  it("should return 0 if input is null", () => {
    const result = ds.doubleANumber(null);
    expect(result).toBe(0);
  });
});

describe("createFullName", () => {
  it("should return the full name", () => {
    const result = ds.createFullName("Andre", "Fonseca");
    expect(result).toBe("Andre Fonseca");
    expect(typeof result).toBe("string");
  });

  it("should return the concatenation of 2 numbers", () => {
    const result = ds.createFullName(1, 2);
    expect(result).toBe("1 2");
  });
});

describe("calculateTheLenghtOfAString2", () => {
  it("should return the length of a given string", () => {
    const result = ds.calculateTheLenghtOfAString2("A given string");
    expect(result).toBe(14);
    expect(typeof result).toBe("number");
  });

  it("should return the length of a given array", () => {
    const result = ds.calculateTheLenghtOfAString2(["A given ", "string"]);
    expect(result).toBe(2);
  });

  it("should return undefined if an Object is given", () => {
    const result = ds.calculateTheLenghtOfAString2({});
    expect(result).toBeUndefined();
  });
});

describe("numbersArrayIntoString", () => {
  it("should return a string of the numbers in a array", () => {
    const result = ds.numbersArrayIntoString([1, 2, 3, 4]);
    expect(result).toBe("123.4");
    expect(typeof result).toBe("string");
  });
});

describe("addNewLanguage", () => {
  it("should return an object with the new language pushed to languages prop", () => {
    const result = ds.addNewLanguage(ds.programming, "PHP");
    expect(result).toMatchObject(ds.programming);
    expect(typeof result).toBe("object");
  });

  it("should return an object with language array bigger than it was before", () => {
    const initialLength = ds.programming.languages.length;
    const result = ds.addNewLanguage(ds.programming, "PHP");
    expect(result.languages.length).toBeGreaterThan(initialLength);
  });
});

describe("votersResult", () => {
  it("should return an object with the count of the voters filtered by age", () => {
    const result = ds.votersResult(ds.voters);
    expect(result).toEqual({
      numYoungVotes: expect.any(Number),
      numYoungPeople: expect.any(Number),
      numMidVotesPeople: expect.any(Number),
      numMidsPeople: expect.any(Number),
      numOldVotesPeople: expect.any(Number),
      numOldsPeople: expect.any(Number),
    });
    expect(typeof result).toBe("object");
  });
});
