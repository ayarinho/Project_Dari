import { Component, OnInit ,Renderer2} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  
  ngOnInit(): void {

    this.addJsToElement().onload = () => {
      console.log('le script marche ');
  
}

  }


  

  addJsToElement(): HTMLScriptElement {

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text= `
    
      const numb=document.querySelector('.numb');
      let counter = 0;
   
      setInterval(()=>{
        if(counter == 100){
          clearInterval();
        }else{
          counter+=1;
          numb.textContent = counter + "%";
        }
      }, 80);
    
    `;


  this.renderer.appendChild(document.body, script);
  
  return script;
}

}
