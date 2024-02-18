/*
Exercise:
Write a function that filters an array of objects based on a property value. 
The array, property name, and desired value must be passed as arguments.
*/

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
    ]
    
    // fn - функция, которую нужно написать (хорошее название тоже нужно придумать)
    let result = fn(objects, 'name', 'Иван') {

    };
    
    console.log(result)
    
    /*
    Результат выполнения должен быть:

    [
    { name: 'Иван', surname: 'Иванов' }
    ]

    Не забывайте о том, что массивы и объекты передаются по ссылке. 
    Поэтому для формирования массива-результата нужно создать новый отдельный массив, 
    а не изменять старый, который пришёл в качестве параметра.*/