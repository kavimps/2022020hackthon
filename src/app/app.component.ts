import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'recruitment';
  public inputvaild ='';
  public show = false;
    
  public valuechange(e)
  {
    console.log(event.target)

  }

  public radionumber(name)
    {
      this.show = false;
     if(name=='number')
     {
       console.log(this.inputvaild);
       console.log((/[^a-zA-Z]/.test(this.inputvaild)));      
      if (!(/[^0-9]/.test(this.inputvaild))) { 
         console.log("numberalone");              
        return true;
      }
    }     
    else {
      if (/[^a-zA-Z]/.test(this.inputvaild)) 
      console.log("textinside");
      console.log( this.show );
      this.show = true;     
      return false;
    }
    if(name=='text')
    {
      this.show =false;
      if ((/[^a-zA-Z]/.test(this.inputvaild)))
      {
        console.log("textalone"); 
        this.show =true;
        return true;
      }else
      {
         return false;
      }
    }
    if(name=='password')
    {
      this.show =false;
      if ((/[^a-zA-Z]/.test(this.inputvaild)))
      {
        console.log("passwordalone"); 
        this.show =true;
        return true;
      } else
      {
         return false;
      }
    }
    return true;
     }


    

  }




