import{ Pipe,PipeTransform} from '@angular/core';

@Pipe({
// name:'sqrt'
name:'concat'

})

export class DemoPipe implements PipeTransform{

// transform(value:number):number{
// return Math.sqrt(value);

// }
//for squareroot function
transform(value:string,value1:string):string
{
return value.concat(value1.toString());
}

}
