var myGlobal = 10;

function fun1()
{

}

function fun2()
{
    var output = "";
    if ( typeof myGlobal != "undefined")
    {
        output += "myGlobal: " + myGlobal;
    }

    console.log(output);

}

fun2();
