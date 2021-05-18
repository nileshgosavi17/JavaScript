var mobile = {
    name: "iPhone",
    LaunchYear: 2020,
    Processor: "A14",
    model: {
        modelName : "iPhone 12 "
    }
};

console.log(mobile.model.modelName);

mobile.model.newModelname = "iPhone 12 Pro Max";

console.log(mobile.model["newModelname"]);