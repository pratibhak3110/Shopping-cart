import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {
    transform(value: Array<string>, args: any[] ): any{
        value= value || [];
        const sortField= args[0];
        const sortOrder= args[1];

        // let multiplier= 1;

        // if(sortOrder === 'desc'){
        //     multiplier = -1;
        // }

        value.sort((arrayFirstItem: any, arraySecondItem: any) => {
            //console.log(arrayFirstItem, arraySecondItem);
            if(arrayFirstItem[sortField] < arraySecondItem[sortField]){
                return -1;
            } else if(arrayFirstItem[sortField] > arraySecondItem[sortField]){
                return 1;
            } else{
                return 0;
            }
        });
        return value;
    }
}