import { ComponentType, useState } from "react";

export interface IToggleProps {
  isVisible: boolean;
  toggle: () => void;
}

export default function withToggle<T extends IToggleProps>(Component: ComponentType<T>) {
  return (props: any) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    function toggleVisibility(): void {
      setIsVisible(!isVisible);
    }

    return <Component {...props} isVisible={isVisible} toggle={toggleVisibility} />
  }
}
