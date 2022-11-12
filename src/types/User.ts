export type UserProps = {
  id: number;
  full_name: string;
  owner: {
    avatar_url: string;
  };
  language: string;
  description: string;
  stargazers_count: number;
  html_url: string;
  isFavorited: boolean;
};
