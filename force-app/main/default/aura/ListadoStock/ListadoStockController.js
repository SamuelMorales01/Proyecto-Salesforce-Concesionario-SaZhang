({
    addToStock: function (component, event, helper) {
        var input1 = event.getParams();

        console.log("antes de mostrar datos" + input1);
        if (input1) {
            console.log("Motrando Datos");
            var list = component.get("v.output");
            var objeto1 = { matricula: input1.matricula, marca: input1.marca, modelo: input1.modelo, color: input1.color }
            // var objeto2 = {marca: input2}
            // var objeto3 = {modelo: input3}
            // var objeto4 = {color: input4}
            list.push(objeto1);
            component.set("v.output", list);
        }
        console.log(component.get("v.output"));
    }
})
