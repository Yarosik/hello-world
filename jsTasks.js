//Задача 3.1
mas();
	function mas(){
		var a=[10,25,38,'lol','Yarik',"Nik"];
		var c = [];
		var b=[4,5];
		b.forEach(function(item)
		{
			c.push(a[item])
		});
		return c;
	}

//Задача 2
function FizzBuz(){
	for(var i=1;i<101;i++){
		 if(i%5==0 && i%3==0)
			console.log("FizzBuzz");
			
		else if(i%3==0)
			console.log("Fizz");
			
		else if(i%5==0)
			console.log("Buzz");
			
			else 
				console.log(i);
			
	}	
}
FizzBuz();

//Задача 1
function rev(text)
{
    var text2 = ' ';
    for(var i = text.length - 1; i >=0; i--)
    {
        text2 = text2 + text[i];
    }
    return text2;
}
rev("УОРАД");

function ucFirst(str)
{
	return str[0].toUpperCase() + str.slice(1);
}
ucFirst('his');
	
function ucWords(str)
{
	var str2 = ' ';
	for(var i = 0; i < str.length; i++)
	{
		if(str[i - 1] === ' ' || i === 0){
            str2 += str[i].toUpperCase();
        }
        else{
            str2 += str[i];
        }
    }
    return str2;
}
ucWords('uc words');