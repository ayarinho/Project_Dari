import { Component, OnDestroy, OnInit,Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessageDto } from 'src/app/models/chatMessageDto';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit,OnDestroy {



  constructor(public webSocketService: WebSocketService,private renderer: Renderer2) { }

  ngOnInit(): void {
    this.webSocketService.openWebSocket();

    this.addJsToElement().onload = () => {
      console.log('le script marche ');
  
}
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message);
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls.message.reset();
  }


  addJsToElement(): HTMLScriptElement {

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text= `$(document).ready(function($) {
	
      // Variables declarations
      var $wrapper = $('.main-wrapper');
      var $pageWrapper = $('.page-wrapper');
      var $slimScrolls = $('.slimscroll');
      var $sidebarOverlay = $('.sidebar-overlay');
     
      
      // Page wrapper height
      var pHeight = $(window).height();
      $pageWrapper.css('min-height', pHeight);
      $(window).resize(function() {
        var prHeight = $(window).height();
        $pageWrapper.css('min-height', prHeight);
      });
     
    }); `;



  this.renderer.appendChild(document.body, script);
  
  return script;
}
}

