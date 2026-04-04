// Find number is Prime Number or composit (Using for Loop)


let n=13; let count=0;

for(let i=1;i<=n;i++)
{
    if(n%i==0)
    {
        count=count+1;
    }
}

if(count==2)
{
    console.log(n + ' is prime')
}
else
{
    console.log(n + ' is composite')
}
