import React, { ReactNode } from "react";
import { Link as CustomMuiLink, SxProps, Theme } from "@mui/material";
import { Link } from "@/lib/next";

interface MuiLinkProps {
  children: ReactNode;
  href: string;
  sx?: SxProps<Theme>;
}

const MuiLink: React.FC<MuiLinkProps> = ({ children, href, sx }) => {
  return (
    <CustomMuiLink className="CustomMuiLink" component={Link} href={href} sx={sx}>
      {children}
    </CustomMuiLink>
  );
};

export default MuiLink;
