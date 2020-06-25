import React, { forwardRef } from "react";
import { NavLink as RouterLink } from "react-router-dom";

export const CustomRouterLink = forwardRef((props: any, ref: any) => (
    <span ref={ref} >
        <RouterLink {...props} />
    </span>
));
