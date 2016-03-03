    // Need to include require.js first
    require(["sort"], function(sort) {


        var shuffledArray = [
            {name: "Vasya", age: 47},
            {name: "Misha", age: 54},
            {name: "Valya", age: 2},
            {name: "Alla", age: 23},
            {name: "Serge", age: 15},
        ];

        var comparator = function (a,b) {
            // Реализует сортировку по убыванию
            if(a.age > b.age) return -1;
            if(a.age < b.age) return 1;
            return 0;
        };

        var sortObj = new sort(shuffledArray, comparator );
        var sortedArray = sortObj.sort().getResult();
        console.log( sortedArray );
        

        });
