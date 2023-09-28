document.addEventListener("DOMContentLoaded", function () {
    // Crear arreglos para almacenar los números
    var a = [];
    var b = [];
    var c = [];
    var todo = [];

    // Función para recalcular los números al azar
    function recalcularNumerosAzar() {
        // Limpiar arreglos
        a = [];
        b = [];
        c = [];
        todo = [];

        // Generar 3 números aleatorios
        for (var i = 0; i < 3; i++) {
            var numero;
            var valor = false; // Variable para controlar el bucle while

            while (!valor) {
                numero = Math.floor(Math.random() * 100) + 1; // Generar número aleatorio entre 1 y 100

                // Comprobar si el número es único en el arreglo "todo"
                if (!todo.includes(numero) && !todo.includes(numero - 1) && !todo.includes(numero - 2) && !todo.includes(numero + 1) && !todo.includes(numero + 2)) {
                    valor = true;
                }
            }

            // Comprobar si es múltiplo de 10
            if (numero % 10 === 0) {
                a.push(numero);
                a.push(numero - 1);
                a.push(numero - 2);

                todo.push(numero);
                todo.push(numero - 1);
                todo.push(numero - 2);
            }
            // Comprobar si es múltiplo de 11
            else if ((numero - 1) % 10 === 0) {
                b.push(numero);
                b.push(numero + 1);
                b.push(numero + 2);

                todo.push(numero);
                todo.push(numero + 1);
                todo.push(numero + 2);
            }
            // Si no es múltiplo de 10 ni de 11
            else {
                c.push(numero);
                c.push(numero + 1);
                c.push(numero - 1);

                todo.push(numero);
                todo.push(numero + 1);
                todo.push(numero - 1);
            }
        }

        // Genera 3 números enteros al azar entre 1 y 100
        var numerosAlAzar = []; // Crear un arreglo para almacenar los números al azar
        for (var i = 0; i < 3; i++) {
            var numeroAlAzar = Math.floor(Math.random() * 100) + 1;
            numerosAlAzar.push(numeroAlAzar); // Agregar el número al azar al arreglo
        }

        // Mostrar los arreglos en la lista HTML "todo"
        mostrarEnLista(todo, "todo");

        // Muestra el número al azar en el párrafo
        var numeroAzarParrafo = document.getElementById("numeroAzar");
        numeroAzarParrafo.textContent = "Números al azar: " + numerosAlAzar.join(", ");

        // Llamar a la función para crear la matriz 10x10 y colorear los valores
        crearMatriz(10, 10, a, b, c);
    }

    // Asociar el evento clic al botón
    var recalcularBtn = document.getElementById("recalcularBtn");
    recalcularBtn.addEventListener("click", recalcularNumerosAzar);

    // Llamar a la función para calcular los números al azar inicialmente
    recalcularNumerosAzar();

    // Función para mostrar un arreglo en una lista HTML
    function mostrarEnLista(arreglo, idLista) {
        var lista = document.getElementById(idLista);
        lista.innerHTML = ''; // Limpiar la lista antes de agregar elementos
        arreglo.forEach(function (elemento) {
            var listItem = document.createElement("li");
            listItem.textContent = elemento;
            lista.appendChild(listItem);
        });
    }

    // Función para crear y mostrar la matriz
    function crearMatriz(filas, columnas, arregloA, arregloB, arregloC) {
        var tabla = document.querySelector('table');
        tabla.innerHTML = ''; // Limpiar la tabla antes de generar una nueva matriz

        for (var i = 0; i < filas; i++) {
            var fila = document.createElement('tr');
            for (var j = 0; j < columnas; j++) {
                var celda = document.createElement('td');
                var valor = i * columnas + j + 1;
                celda.textContent = valor.toString();

                // Agregar clases para colorear según los arreglos
                if (arregloA.includes(valor)) {
                    celda.classList.add('todo');
                } else if (arregloB.includes(valor)) {
                    celda.classList.add('todo');
                } else if (arregloC.includes(valor)) {
                    celda.classList.add('todo');
                }

                fila.appendChild(celda);
            }
            tabla.appendChild(fila);
        }
    }
});