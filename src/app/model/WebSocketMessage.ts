export class WebSocketMessage {
  type: string;
  sender: string;

  constructor(type: string, sender: string) {
    this.type = "chat";
    this.sender = "kuba";
  }


}
