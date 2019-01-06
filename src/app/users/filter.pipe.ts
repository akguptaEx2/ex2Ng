import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: User[], searchText?: string): User[] {
    if(!users)
    return [];
    if(!searchText)
    return users;
    
    searchText = searchText.toLowerCase();
    return users.filter(user=>
      user.first_name.toLowerCase().includes(searchText) ||
      (user.last_name && user.last_name.toLowerCase().includes(searchText))||
      user.email.includes(searchText)
    );
  }

}
