/*
Exercise:
Write a function that filters an array of objects based on a property value. 
The array, property name, and desired value must be passed as arguments.
*/

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' },
    { name: 'Пётр', surname: 'Иванов' },
    { name: 'Иван', surname: 'Петров' },
    { name: 'Пётр', surname: 'Петров' },
    { name: 'Пётр', surname: 'Васильев' },
    { name: 'Василий', surname: 'Петров' },
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    ]
    
    function filtrObjects(objects, name = 'Иван', surname = 'Иванов') {
        let filtredObject = [];

        for (let i = 0; i < objects.length; i++) {
            let object = objects[i];
            if (object.name === name && object.surname === surname) {
                 filtredObject.push(object);
            }
        }

        return filtredObject;
    };
    
    let result = filtrObjects(objects, 'Василий', 'Васильев');
    console.log(result);
    console.log(objects);