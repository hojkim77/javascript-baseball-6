import { Random } from "@woowacourse/mission-utils";
/**
 * 정답 생성 및 비교와 관련된 클래스
 */
export class Answer {
  constructor() {
    this.answer = this.makeAnswer();
  }

  //* 랜덤하게 정답을 생성합니다
  makeAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) answer.push(number);
    }
    return answer.join("");
  }
}
