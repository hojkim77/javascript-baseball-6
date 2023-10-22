import { Console } from "@woowacourse/mission-utils";
import { Messages } from "../Messages.js";
/**
 * 입력과 출력을 담당하는 클래스
 */
export class IO {
  constructor(userInput) {
    this.userInput = userInput;
  }

  //* 사용자에게 3자리 숫자 입력을 받습니다
  getInput() {
    Console.readLine(Messages.INPUT_MESSAGE, (input) => {
      this.inputValidator(input);
    });
  }

  //* 사용자에게 받은 입력의 validation을 확인합니다
  /**
   *
   * @param {string} userInput
   */
  inputValidator(userInput) {
    if (userInput.length !== 3) {
      throw new Error(Messages.INPUT_INVALID_FORMAT_MESSAGE);
    }

    Console.print(userInput);
    this.userInput = userInput;
    return true;
  }
}
