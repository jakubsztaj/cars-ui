import { Injectable} from "@angular/core";
import { WebSocketMessage } from "../model/WebSocketMessage";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocket: WebSocket;
  chatMessages: WebSocketMessage[] = [];


  constructor() {
    this.webSocket = new WebSocket('ws://localhost:8080/chat');
  }

  public openWebSocket() {
    this.webSocket = new WebSocket('ws://localhost:8080/chat');

    this.webSocket.onopen = (event) => {
      console.log('Open: ', event)
    }

    this.webSocket.onmessage = (event) => {
      const webSocketMessage = JSON.parse(event.data);
      this.chatMessages.push(webSocketMessage);
    }

    this.webSocket.onclose = (event) => {
      console.log("Close: ", event);
    }
  }

  public sendMessage(webSocketMessage: WebSocketMessage) {
    this.webSocket.send(JSON.stringify(webSocketMessage));
  }

  public closeWebSocket() {
    this.webSocket.close()
  }

}
