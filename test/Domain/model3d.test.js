const { Model3d } = require("../../app/Domain/model3d");

describe("Model Entity", () => {
  test("should create a model with provided attributes", () => {
    const model = new Model3d("name", "description", "projectId");
    expect(model.id).not.toBe(null);
    expect(model.name).toBe("name");
    expect(model.description).toBe("description");
    expect(model.projectId).toBe("projectId");
  });
});
