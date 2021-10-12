import { Injectable, OnDestroy } from "@angular/core";
import { WebSocketMessage } from "../model/WebSocketMessage";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService implements OnDestroy {
  socket: WebSocket;

  constructor() {
    this.socket = new WebSocket('ws://localhost:8080/chat');
  }

  ngOnDestroy(): void {
    this.socket.close()
  }

  sendMessage(message: WebSocketMessage): void {
    this.socket.send(JSON.stringify(message));
  }
}
