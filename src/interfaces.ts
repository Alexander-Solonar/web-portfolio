export interface ContextProps {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Project {
  githubLink: string;
  id: null | number;
  image: string;
  imgProject: string;
  livePageLink: string;
  name: string;
  tag: string;
  text: string;
}

export interface Skill {
  description: string;
  id: number;
  name: string;
  tag: string;
}

export interface FormFeedbackValues {
  name: string;
  telegram: string;
  email: string;
  message: string;
}
