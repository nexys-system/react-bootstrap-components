export interface BtnCoreProps {
  link?: string;
  onClick?: () => void | Promise<void>;
}

export type Action = "back" | "edit";
