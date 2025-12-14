import type { NavigationGroups } from "../types/NavigationGroups";

export const navigationGroups: NavigationGroups[] = [
  {
    groupName: "新入生向け情報",
    consistPage: [
      {
        pageName: "イベント情報",
        pagePath: "/events-info",
      },
      {
        pageName: "シールラリー特設サイト",
        pagePath: "/seal-rally",
      },
      {
        pageName: "電通大リンク集",
        pagePath: "/links",
      },
      {
        pageName: "電通大用語辞典",
        pagePath: "/dictionary",
      },
      {
        pageName: "Q&A",
        pagePath: "/faq",
      },
    ],
  },
  {
    groupName: "新歓委員会とは",
    consistPage: [
      {
        pageName: "学友会について",
        pagePath: "/about-gakuyukai",
      },
      {
        pageName: "新歓委員会について",
        pagePath: "/about",
      },
    ],
  },
  {
    groupName: "サークル紹介",
    consistPage: [
      {
        pageName: "サークル紹介冊子",
        pagePath: "/circle-booklet",
      },
    ],
  },
  {
    groupName: "その他",
    consistPage: [
      {
        pageName: "新歓規則",
        pagePath: "/rules",
      },
      {
        pageName: "ご質問・ご要望",
        pagePath: "/contact",
      },
    ],
  },
];
