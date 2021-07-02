function testEqual(val)
{
    if(val == 12) //type conversion
        return "Equal";
    else
        return "Not Equal"
}

console.log(testEqual("12"));

function testStrictEqual(val)
{
    if(val === 12) //No type conversion
        return "Equal";
    else
        return "Not Equal"
}

console.log(testStrictEqual("12"));

function testNotEqual(val)
{
    if(val != 12) //type conversion
        return "Not Equal";
    else
        return "Equal"
}

console.log(testNotEqual("12"));

function testNotStrictEqual(val)
{
    if(val !== 12) //No type conversion
        return "Not Equal";
    else
        return "Equal"
}

console.log(testNotStrictEqual("12"));

// < > <= >= && || work just like C++
