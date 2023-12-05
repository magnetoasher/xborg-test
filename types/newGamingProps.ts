export interface NewGamingProps {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  targetRef: React.RefObject<HTMLDivElement>;
}
