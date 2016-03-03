define([], function () {

    "use strict";

    /**
     * Сортировка массива по заданному критерию
     * @param object - не ассоциативный массив
     * @param comparator
     * @constructor
     */
    function Sort( object, comparator ){

        this._sortedObject = [];

        this._object = object;
        this._func = comparator;

        this.sort = function(){

            this._doValidate();

            this._doSort(this._object)

            return this;
        }

        /**
         * Реализация сортировки с помощью хвостовой рекурсии
         * [?] или хвостовая рекурия - это когда return this._doSort(tail);
         *
         * @param shuffledArr
         * @private
         */
        this._doSort = function(shuffledArr){

            var i,
                elem, targetElem,
                tail,
                compareResult
                ;


            if( shuffledArr.length == 1 ){
                this._sortedObject.push( shuffledArr[0] )
                return;
            }

            targetElem = shuffledArr[0]
            tail = shuffledArr
            tail.splice(0,1)


            for( i = 0; i < tail.length; i++ ){
                compareResult = this._func( targetElem, tail[i] )
                if( compareResult == 1 ){
                    elem = targetElem
                    targetElem = tail[i]
                    tail[i] = elem
                }
            }

            this._sortedObject.push( targetElem )

            this._doSort( tail )
        }

        /**
         *
         * @private
         * TODO
         */
        this._doValidate = function(){

        }

        this.getResult = function(){
            return this._sortedObject
        }
    }

    return Sort;
});







