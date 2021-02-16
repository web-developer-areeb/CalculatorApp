$(document).ready(function(){

    console.log('index.js is working.');
    
    let inputArr = [];
    let number = '';

    
    $('.btn__number').click(function(){
        let numStr = $(this).text();
        
        number = number + numStr;
        $('#result').html(numStr);
    });


    // Operators
    $('.btn__operator').click(function(){
        const operator = $(this).text();

        inputArr.push(parseFloat(number));
        inputArr.push(operator);
        $('#result').html(operator);
        number = '';
        console.log(inputArr);
    });

    $('.btn__clear').click(function clear);

    // Equal to Operator
    $('.btn__operator--equal-to').click(function(){
        const operator = $(this).text();

        // Pushing the last entry into the array
        inputArr.push(parseFloat(number));
        number = '';

        console.log(inputArr);
        
        // Dividing numbers
        for(i=0; i<=inputArr.length; i++){
            if(inputArr[i] === '÷'){
                let division;

                division = inputArr[i-1]/inputArr[i+1];

                inputArr.splice(i-1, 3, division);
                console.log(inputArr);
            }
        }

        // Multiplying numbers
        for(i=0; i<=inputArr.length; i++){
            if(inputArr[i] === '×'){
                let multiplication;

                multiplication = inputArr[i-1] * inputArr[i+1];

                inputArr.splice(i-1, 3, multiplication);
                console.log(inputArr);
            }
        }

        //Adding numbers
        for(i=0; i<=inputArr.length; i++){
            if(inputArr[i] === '+'){
                let sum;

                sum = inputArr[i-1] + inputArr[i+1];

                inputArr.splice(i-1, 3, sum);
                console.log(inputArr);
            }
        }

        // Subtracting numbers
        for(i=0; i<=inputArr.length; i++){
            if(inputArr[i] === '−'){
                let subtraction;

                subtraction = inputArr[i-1] - inputArr[i+1];

                inputArr.splice(i-1, 3, subtraction);

                //test
                console.log(inputArr);
            }
        }
        clearScreen();
        result();
        clearArr();
    });

    function clearScreen(){
        // Removing old result 
         $('#result').html(0);
    };

    function result() {
        // Showing result here
        $('#result').text(inputArr[0]);
    
        console.log(inputArr);
    };

    function clearArr() {
        // Cleaning data from array for next calculation
        inputArr.splice(0, inputArr.length);
    };

    
    
    
    

    
    // elements.shopping.addEventListener('click', e=>{
    //     const id = e.target.closest('.shopping__item').dataset.itemid;
    
    //     // Handle the delete button
    //     if (e.target.matches('.shopping__delete, .shopping__delete *')) {
    //         //Delete from state
    //         state.list.deleteItem(id);
    //         //Delete from UI
    //         listView.deleteItem(id);
    
    //         // Handle the count update
    //     } else if(e.target.matches('.shopping__count-value')) {
    //         const val = parseFloat(e.target.value, 10);
    //         state.list.updateItem(id, val);
    //     }    
    // });


});
