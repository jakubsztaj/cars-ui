export class WebSocketMessage {
  type: string;
  content: string;
  sender: string;
  time: string;


  constructor(content: string) {
    this.content = content;
    this.type = "chat";
    this.sender = "kuba";
    this.time = new Date().toISOString()
  }
}
