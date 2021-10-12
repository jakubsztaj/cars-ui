import { Component } from '@angular/core';
import { WebsocketService } from "../../service/websocket.service";
import { WebSocketMessage } from "../../model/WebSocketMessage";
@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {
  chatContent = ""
  messageContent = ""


  constructor(private webSocketService: WebsocketService) {
    webSocketService.socket.addEventListener('message', function (event) {
      console.log('Message from server ', event.data);
    });
  }

  sendChatMessage(): void {
  const message = new WebSocketMessage(this.messageContent)
    this.webSocketService.sendMessage(message);
  }
}
