/*
Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota
máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que
retorne los estudiantes de un semestre dado.
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}
Función: estudiantesSemestre.
Parámetros: estudiantes (array de objetos estudiante), semestre (un número).
Retorno: array de objetos estudiante que pertenecen al semestre indicado.
*/
let estudiantes =[
    {semestre: 1, nombre:"Ana", nota: 15},
    {semestre: 2, nombre:"fabiana", nota: 18},
    {semestre: 3, nombre:"Carlos", nota: 10},
    {semestre: 4, nombre:"Diego", nota: 11},
    {semestre: 5, nombre:"Maria", nota: 15},
    
    ]
    ;
    
    let estudiantesSemestre = (estudiantes, semestres) => {
        let  estudiante = estudiantes.filter ((estu)=> estu.semestre === semestres);
       
      return estudiante;
       

    };
   
    
    let salida = document.getElementById("salida");
    let estudiante1 = estudiantesSemestre (estudiantes, 1);
    
    salida.innerHTML =`estudiantes del Primer semestre :<br>`
    estudiante1.forEach((estudiante1) => {
        salida.innerHTML += `<br> ${estudiante1.nombre} - nota: ${estudiante1.nota}`
    });