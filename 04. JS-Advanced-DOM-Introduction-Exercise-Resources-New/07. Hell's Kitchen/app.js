function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   let input = document.querySelector('#inputs>textarea');

   const bestRestP = document.querySelector('#bestRestaurant>p');
   const bestWorkesrs = document.querySelector('#workers>p');
   function onClick() {
      let arr = JSON.parse(input.value);

      let restaurants = {};

      arr.forEach(line => {
         const tokens = line.split(' - ');
         const restName = tokens[0];
         const workersArr = tokens[1].split(', ');

         let workers = []
         0;
         for (const worker of workersArr) {
            let tokens = worker.split(' ');
            const salary = Number(tokens[1]);
            workers.push({
               name: tokens[0],
               salary: salary
            })
         }
         if (restaurants[restName]) {
            workers = workers.concat(restaurants[restName].workers);
         }

         workers.sort((a, b) => b.salary - a.salary);

         const bestSalary = workers[0].salary;
         const averageSalary = workers.reduce((acc, curW) => {
            return acc + curW.salary;
         }, 0) / workers.length;

         restaurants[restName] = {
            workers,
            averageSalary,
            bestSalary
         }
      })

      let bestRestaurantSalary = 0;
      let bestRestaurant = undefined;
      for (const name in restaurants) {
         if (restaurants[name].averageSalary > bestRestaurantSalary) {
            bestRestaurant = {
               name, workers: restaurants[name].workers,
               bestSalary: restaurants[name].bestSalary,
               averageSalary: restaurants[name].averageSalary
            }
            bestRestaurantSalary = restaurants[name].averageSalary;
         }
      }

      let workersResult = [];
      bestRestaurant.workers.forEach(worker => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
      })


      bestRestP.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
      bestWorkesrs.textContent = workersResult.join(' ');
   }
}