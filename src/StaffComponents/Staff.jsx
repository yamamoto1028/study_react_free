import React from "react";
import "./Staff.css";
import Member from "./Member";

export const Staff = () => {
  const members = [
    {
      post: "代表",
      Department: "代表取締役",
      name: "開発  桃太郎",
      career:
        "経歴のテキスト。経歴のテキスト。経歴のテキスト。経歴のテキスト。",
      berief:
        "想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。",
      excited: "おもしろテキスト。おもしろテキスト。おもしろテキスト。",
      staffImage: "代表の写真",
    },
    {
      post: "社員",
      Department: "営業",
      name: "開発  イヌ太郎",
      career:
        "経歴のテキスト。経歴のテキスト。経歴のテキスト。経歴のテキスト。",
      berief:
        "想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。",
      excited: "おもしろテキスト。おもしろテキスト。おもしろテキスト。",
      staffImage: "いぬ",
    },
    {
      post: "",
      Department: "営業",
      name: "開発  サル太郎",
      career:
        "経歴のテキスト。経歴のテキスト。経歴のテキスト。経歴のテキスト。",
      berief:
        "想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。",
      excited: "おもしろテキスト。おもしろテキスト。おもしろテキスト。",
      staffImage: "さる",
    },
    {
      post: "",
      Department: "営業",
      name: "開発  キジ太郎",
      career:
        "経歴のテキスト。経歴のテキスト。経歴のテキスト。経歴のテキスト。",
      berief:
        "想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。",
      excited: "おもしろテキスト。おもしろテキスト。おもしろテキスト。",
      staffImage: "きじ",
    },
    {
      post: "",
      Department: "営業",
      name: "開発 オニ太郎",
      career:
        "経歴のテキスト。経歴のテキスト。経歴のテキスト。経歴のテキスト。",
      berief:
        "想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。想いのテキスト。",
      excited: "おもしろテキスト。おもしろテキスト。おもしろテキスト。",
      staffImage: "おに",
    },
  ];
  return (
    <div>
      {members.map((member, index) => (
        <Member
          key={index}
          post={member.post}
          Department={member.Department}
          name={member.name}
          career={member.career}
          berief={member.berief}
          excited={member.excited}
          staffImage={member.staffImage}
        />
      ))}
    </div>
  );
};
