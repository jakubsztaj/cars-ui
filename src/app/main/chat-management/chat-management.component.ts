import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebSocketService } from "../../service/websocket.service";
import { NgForm } from "@angular/forms";
import { WebSocketMessage } from "../../model/WebSocketMessage";


@Component({
  selector: 'app-chat-management',
  templateUrl: './chat-management.component.html',
  styleUrls: ['./chat-management.component.css']
})
export class ChatManagementComponent implements OnInit, OnDestroy {

  constructor(public webSocketService: WebSocketService) {
  }

  ngOnInit(): void {
    this.webSocketService.openWebSocket()
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket()
  }

  sendMessage(sendForm: NgForm) {
    const webSocketMessage = new WebSocketMessage(sendForm.value.type, sendForm.value.sender)
    this.webSocketService.sendMessage(webSocketMessage);
    sendForm.controls.type.reset();
  }
}
