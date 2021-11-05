// function addToCard(productName)
// {
//   console.log("Sepete eklendi"+productName)
// }


// function addToCard2(productName,quantity,price) {

// }


// addToCard("Elma",5,19)
// addToCard("Armut",2,20)


// function addToCard3(product){
//  console.log("Ürün: "+product.productName)
//  console.log("Ürün: "+product.unitPrice)
//  console.log("Ürün: "+product.quantity)
// }

// let product1= {productName:"Elma",unitPrice:10,quantity:5}
// let product2= {productName:"Armut",unitPrice:10,quantity:5}
// let product3= {productName:"Karpuz",unitPrice:10,quantity:5}
// product2=product3

// addToCard3(product3)


// function addToCard4(x) {
//     console.log(x)
//   }
  
//   let products=[
//       {productName:"Elma",quantity:5,unitPrice:7},
//       {productName:"Armut",quantity:7,unitPrice:8},
//       {productName:"Ayva",quantity:12,unitPrice:6}
//   ]
  
//   addToCard4(products)

//   function add(number1,number2){
//         console.log(number1+number2)
//   }

//   add(20,30)

//   function add1(bisey,...numbers){//rest operatoru
//       let total=0
//       for (let i=0;i<numbers.length;i++){
//           total=total+numbers[i]
//         console.log(total)
//         console.log(bisey)
//       }
//   }

//   add1(20,30,40,50)


  //  let numbers=[30,10,300,500,1200,12]
  //  console.log(Math.max(...numbers))

// 

function findPrime(...numbers) {
  //let prime=0;
  for (let i=0;i<numbers.length;i++)
  {
    let prime=1;
    if(numbers[i]==0 || numbers[i]==1) 
    {
      prime=0;
    }
    else
    {  
      for (let j=2;j<numbers[i];j++)
      {
         if (numbers[i] % j == 0)
          {
            prime=0;
            break;
          }
       }
    }
    
    if (prime==1) {
      console.log(numbers[i]+ " is prime.");
    }
    else {
      console.log(numbers[i]+ " is NOT prime!.");
    }
    
  }

}

findPrime(0,2,4,5,7,8)


