type ConsistPage = {
  pageName: string;
  pagePath: string;
};

export type NavigationGroups = {
  groupName: string;
  consistPage: ConsistPage[];
};
