// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Posts } from "../../store/user/constants/types";

const posts: Posts = [
  {
    id: 1,
    title: "마우스를 따라 움직이는 조명 효과 구현하기",
    subtitle: "CSS, JS 활용하여 스포트라이트 효과 만들기",
    date: new Date().toString(),
  },
  {
    id: 2,
    title: "Javascript로 원형 div를 화면에서 벗어나지 않게 출력하기",
    subtitle: "요소를 화면 밖으로 나가지 않게 하고 화면 크기에 맞춰 조절하기",
    date: new Date("2021-11-15 12:23:43").toString(),
  },
  {
    id: 3,
    title: "코딩테스트를 위한 Python 정리",
    subtitle: "코딩테스트 문제를 해결하면서 정리한 Cheat Sheet",
    date: new Date("2021-10-21 15:23:43").toString(),
  },
  {
    id: 4,
    title: "회원가입 페이지 구현하기 : input 유효성 검사와 에러 메세지 출력",
    subtitle:
      "HTML, CSS, VanillaJS 토이 프로젝트 : 아이디, 비밀번호 유효성 검사 결과에 따라 에러 메세지 출력하기",
    date: new Date("2021-07-05 18:24:54").toString(),
  },
  {
    id: 5,
    title: "회원가입 페이지 구현하기 : select로 이메일과 생년월일 입력",
    subtitle:
      "HTML, CSS, VanillaJS 토이 프로젝트 : select 태그, option 동적 생성, 생년월일 유효성 검사까지",
    date: new Date("2021-05-28 12:23:43").toString(),
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Posts>
) {
  res.status(200).json(posts);
}
