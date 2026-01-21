import { LoaderCircle } from "lucide-react";
import React from "react";

type Props = {
  state: boolean;
  children: React.ReactNode;
};

const Loader = ({ state, children }: Props) => {
  return <>{state ? <LoaderCircle className="animate-spin" /> : children}</>;
};

export default Loader;
