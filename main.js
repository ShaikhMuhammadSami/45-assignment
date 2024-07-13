// #!/usr/bin/env node
function create_car(manufacturer, model, optional) {
    return {
        manufacturer,
        model,
        ...optional
    };
}
const myCar = create_car("Toyota", "Corolla", { color: "White", year: "2024" });
console.log(myCar);
export {};
