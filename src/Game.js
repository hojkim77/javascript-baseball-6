import { Answer } from "./Model/Answer";
import { IO } from "./View/IO";
/**
 * 게임 진행과 관련된 클래스
 */
export class Game {
  //* game의 한 사이클
  async game() {
    const answer = new Answer();
    const io = new IO();

    //? 올바른 형식(3자리 숫자)이 입력되었다면
    if (io.getInput()) {
      //? 사용자 입력과 정답을 비교합니다
      answer.compareAnswer(io.userInput);
    }
  }
}
