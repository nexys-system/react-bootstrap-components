export interface ToggleLayoutProps {
  isEdit: boolean;
  setEdit: (edit: boolean) => void;
  children: JSX.Element | JSX.Element[];
}
