import Image from "next/image";

type Props = {
  className?: string;
  size?: number;
};

const Logo = ({ className, size = 60 }: Props) => {
  return (
    <Image
      src="/logo.svg"
      alt="İslamimerci"
      width={size}
      height={size}
      className={className}
    />
  );
};

export default Logo;
