//********   Odev 1   ********
//her sayı için çıktı olarak 
//asal olup olmadığını yazınız. 
//****************************
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


//********   Odev 2   ********/
//Parametre olarak girilen iki sayının 
//arkadaş sayılar olup olmadığını bulan 
//programı yazınız. 
//****************************/
function AreAmicable(num1,num2) {
  if (sumOfDivisors(num1)==num2 &&
             sumOfDivisors(num2)==num1)
  {
      console.log(num1 +" ve "+ num2+ " arkadaş sayılardır.")
  }
  else
  {
    console.log(num1 +" ve "+ num2+ " arkadaş sayı DEĞİLDİR!") 
  }
}

function sumOfDivisors(num)
{
    let sum=0;
    for (let i=0;i<num;i++)
    {
         if (num%i==0) { sum +=i; }
    }
    return sum;
}

AreAmicable(2,34)
AreAmicable(220,284)

//********   Odev 3   ********/
// 1000'e kadarki tüm mükemmel
// sayıları listeleyen programı yazınız.
// Odev 2 deki sumOfDivisor fonksiyonu kullanıldı.
//****************************/
function findPerfectNumbers(lower, upper)
 {
    for (let i=lower;i<=upper;i++)
    {
        if (sumOfDivisors(i)==i) 
        {
         console.log(i + " --> Mükemmel sayı.")
        }
    }

 }

 findPerfectNumbers(1,1000)

//******   Odev 4   ******
// 1000'e kadarki tüm 
// asal sayıları listeleyen
// programı yazınız.
//************************
function findPrime(lower,upper) {
    for (let i=lower;i<=upper;i++)
    {
      let prime=1;
      if(i==0 || i==1) 
      {
        prime=0;
      }
      else
      {  
        for (let j=2;j<i;j++)
        {
           if (i % j == 0)
            {
              prime=0;
              break;
            }
         }
      }
      
      if (prime==1) {
        console.log(i+ " is prime.");
      }
         
    }
  
  }

  findPrime(1,1000)