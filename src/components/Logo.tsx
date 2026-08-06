import { NavLink } from "react-router-dom";

type LogoProps = {
  className?: string;
  onClick?: () => void;
};

const Logo = ({ className = "", onClick }: LogoProps) => {
  return (
    <NavLink
      to="/"
      onClick={onClick}
      className={`flex flex-col leading-none ${className}`}
    >
      <span className="text-xl font-bold text-blue-700">DE-INES</span>
      <span className="text-[11px] tracking-wider text-slate-500">
        PHYSIOTHERAPY
      </span>
    </NavLink>
  );
};

export default Logo;
