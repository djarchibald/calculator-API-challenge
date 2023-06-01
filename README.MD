You can test the API with HTTP GET requests to http://localhost:3000/api/calculate/[operation]/[num1]/[num2] where [operation] is add, subtract, multiply or divide, and [num1] and [num2] are any integers. 

The response will be a JSON object with the operation as a string and the result as a number, or an error message if the operation is invalid or an attempt was made to divide by zero.