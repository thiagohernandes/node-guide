var fs = require("fs");

fs.readFile('inputs.txt', function (err, data) {
   if (err){
      console.log('Erro Original -> ' + err.stack);
      return;
   }
   console.log(data.toString());
   console.log("Program Ended - inside callback");
});
console.log("Program Ended");