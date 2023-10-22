import { Console } from "@woowacourse/mission-utils";
import { Messages } from "./Messages.js";
import { Game } from "./Game.js";

class App {
  async play() {
    const game = new Game();

    //* 게임 첫 시작 메시지
    Console.print(Messages.GAME_START_MESSAGE);

    game.game();
  }
}

const app = new App();
app.play();

export default App;
