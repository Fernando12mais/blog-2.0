import { Button } from "react-bootstrap";

type TButton = {
  children: string;
  onClick: () => void;
};

export default ({ children, onClick }: TButton) => (
  <Button onClick={onClick} variant="outline-info">
    {children}
  </Button>
);
