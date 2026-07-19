// Function to check if a student has passed based on their marks
function pf(mark){
    if(mark<=100 && mark>=0)
    {
        if(mark>=35)
        {
            return "You have passed!";
        }
        else
        {
            return "You have failed.";
        }
    }
    else
    {
        return "Marks are out of range.";
    }
}

//take age of user and check if he is eligible to vote or not
function vote(age){
    if (age>=18)
    {
        return "You are eligible to vote.";
    }
    else
    {
        return "You are not eligible to vote."; 
    }
}

//cheack if a number is even or odd
function eo(num)
{
    if(num%2==0)
    {
        return "The number is even.";
    }
    else
    {
        return "The number is odd.";
    }
}

//no. is +ve or -ve
function pn(num)
{
    if(num>0)
    {
        return "The number is positive.";
    }
    else if(num<0)
    {
        return "The number is negative.";
    }
    else
    {
        return "The number is zero.";
    }
}

//find the greatest of 2 numbers
function greatest(num1, num2)
 {
    if (num1 > num2) {
        return num1 + " is the greatest number.";
    } 
    else if (num1 < num2) 
    {
        return num2 + " is the greatest number.";
    }
    else
    {
        return "Both numbers are equal.";
    }
}

//create calculator function to perform basic arithmetic operations
function cal(n1,n2,op)
{
    if(op=="+")
    {
        return n1+n2;
    }
    else if(op=="-")
    {
        return n1-n2;
    }
    else if(op=="*")
    {
        return n1*n2;
    }
    else if(op=="/")
    {
        return n1/n2;
    }
}

 