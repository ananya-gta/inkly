"use client"

import { UserButton, SignInButton, SignedIn, SignedOut, useOrganization } from "@clerk/nextjs"
import { Searchinput } from "./search-input"
import { OrganizationSwitcher } from "@clerk/nextjs"
import { InviteButton } from "./invite-button"

export const Navbar = () => {
    const organization = useOrganization();
    return (
        <div className="flex items-center gap-x-4 p-5 ">
            <div className="hidden lg:flex lg:flex-1">
                <Searchinput />
            </div>
            <div className="block lg:hidden flex-1">
                <OrganizationSwitcher hidePersonal appearance={{
                    elements: {
                        rootBox: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            maxWidth: "376px"
                        },
                        organizationSwitcherTrigger: {
                            padding: "6px",
                            width: "100%",
                            borderRadius: "8px",
                            border: "1px solid #E5E7EB",
                            justifyContent: "space-between",
                            backgroundColor: "white"
                        }
                    }
                }} />
            </div>

            <SignedOut>
                <SignInButton />
            </SignedOut>

            <SignedIn>
                {organization && <InviteButton />}
                <UserButton />
            </SignedIn>
        </div>
    )
}