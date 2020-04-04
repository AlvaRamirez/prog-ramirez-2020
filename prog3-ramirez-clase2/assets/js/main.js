/*Javascript ES6, today is the day....*/

// ECMAScript o ES, es un conjunto de especificaciones que salen año tras año.
// ECMAScript6 o ES2015, fue el conjunto de features más grande hasta el momento.


/*
1) Const y Let (Block Scope)
2) Arrow Functions
3) Modules (Imports and Exports)
4) Template Literals
5) Classes (Constructor, Super, Setters and Getters)
6) Default Parameters
7) The Spread Operator
8) Destructuring
9) Prototype
10) map(), filter(), reduce() 
11) Promesas, Async/Await
*/

// 1) Const y Let (Block Scope)

const alumnxs = [

    { nombre: 'Rodrigo Andrade', edad: 23 },
    
    { nombre: 'Nayla Arroyo Lizzio', edad: 32 },
    
    { nombre: 'Marianela De Martino', edad: 20 },
    
    { nombre: 'Axel Julian Dumas Cutuli', edad: 19 },
    
    { nombre: 'Martina Franco', edad: 22 },
    
    { nombre: 'Agustina Garcia Vega', edad: 24 },
    
    { nombre: 'María Agustina Mattioli Pacheco', edad: 19 },
    
    { nombre: 'Franco Picco', edad: 33 },
    
    { nombre: 'Alva Ramírez', edad: 27 },
    
    { nombre: 'Diego Salischiker', edad: 29 },
    
    ];
    
    //1

    var soloNombre = alumnxs.map(function (alumnxs){
        return alumnxs.nombre
    });     

    console.log("1 - nombres:", soloNombre);

    //2

    var mostrarNums =alumnxs.filter(function (alumnxs) {
         if (alumnxs.edad > 25){
            return alumnxs.edad;
         }
    });

    console.log("2 - edades mayores a 25", mostrarNums);

    //3

    const edades = alumnxs.reduce ((accumulator, {edad}) => accumulator + edad, 0);

    console.log("3 - total edades", edades);

   /*const edadTotal = edades(alumnxs);
    console.log("3 - total edades", edadTotal);¨*/

    //4

    const resultado= alumnxs.find (alumnxs => alumnxs.nombre ==='Franco Picco');


    console.log("4 - edad de Franco", resultado);

    //5

    const {nombre,...otrosCampos} = alumnxs [0];
    console.log("5 - primer alumno:", nombre);

    //6

    var soloM = alumnxs.map( (alumno) => {
        const {nombre} = alumno;
        const primeraLetra = nombre.substring(0,1);
        if(primeraLetra === "M")
        {
        return alumno;
        }
       
        });
        
        console.log("6 - nombres que inician con M", soloM);
        

    //7

   /*var agregar = new Set();
 
   agregar.add(nombre);
   agregar.add(edad);

   console.log( "7 - agregar una key/atributo", map.has(nombre), map.has(edad) );*/

   /*
   size: contiene el número de valores.
    forEach( (value, key, map) => {}, [thisValue] ): para recorrer todos elementos contenidos en el mapa.
    values(): devuelve un iterable con los valores del mapa.
    entries(): devuelve un iterable con matrices [value, value] (es equivalente al mismo método en Map, pero devuelve el valor dos veces).
    clear(): elimina todos los valores del objeto Set.*/

const suColor = ['Azul francia', 'Verde menta', 'Rojo pasion', 'Esmeralda', 'Caki', 'Negro opaco', 'Indigo reflectante', 'Violeta agresivo', 'Amarillo a Secas', 'Rosa claro'];
const new_key = alumnxs.map((student, index) => {
    student.color = suColor[index];
    return student;
});

console.log( "7 - alumnos con nuevo atributo", alumnxs);


   //8

        const promedio=() => { return edades / alumnxs.length;
        }
        console.log("8 - promedio entre edades y alumnos",promedio());
        

    //9
        console.log("9 - API: 'https://dog.ceo/api/breeds/image/random'");

    //10 
    function getDataWithPromises(){
            fetch('https://dog.ceo/api/breeds/image/random')
            .then(function(response) {
                return response.json();
            })
            .then(menssage=>{
                console.log("10/11 - me trae esto", menssage);
            });
        }

        getDataWithPromises();


        //11

        async function requestData(){
            const dog_response = await fetch('https://dog.ceo/api/breeds/image/random');
            const menssage = await dog_response.json();
            return menssage;
        }
        
        const mainLogic = async () => {
            const menssage = await requestData(); 
            console.log("la data traída: ", menssage);
        }

        //12 - 13
        const getDataWithAsync = async () => {
            try{
                const menssage = await requestData();
                const imprimir = menssage.map( ({menssage})=>{
        
                    const divContent = document.querySelector('#content');
                    const html = '<img width="40%" src= https://dog.ceo/api/breeds/image/random'+menssage+'></img></div>';
                    divContent.insertAdjacentHTML('beforeend', html);
                })
            }
            catch(error){
                console.error(error);
                const divContent = document.querySelector('#content');
                divContent.innerHTML('El error es: '+error);
            }
        }
        getDataWithAsync();