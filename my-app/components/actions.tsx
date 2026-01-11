"use client"

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";

interface ActionsProps {
    childern: React.ReactNode;
    side?: DropdownMenuContentProps["side"];
    sideOffset?: DropdownMenuContentProps["sideOffset"];
}

