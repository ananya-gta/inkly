"use client";

import { Button } from "@/components/ui/button"
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs";
import Image from "next/image"
import { toast } from "sonner";

export const EmptyBoards = () => {
    const { organization } = useOrganization();
    const { mutate, pending } = useApiMutation(api.board.create);
    const onClick = () => {
        if (!organization) return;
        mutate({
            orgId: organization.id,
            title: "Untitled"
        }).then((id) => {
            toast.success("Board created successfully!");
            //TODO: redirect to board/{id}
        }).catch(() => toast.error("Failed to create board"))
    }
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image src="/note.svg" height={110} width={110} alt="Empty" />
            <h2 className="text-2xl font-semibold mt-6">Your workspace is empty!</h2>
            <p className="text-muted-foreground textg-sm mt-2">Create your first board to start collaborating</p>
            <div className="mt-6">
                <Button disabled={pending} onClick={onClick} size="lg">
                    Create board
                </Button>
            </div>
        </div>
    )
}