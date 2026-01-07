import Image from "next/image"

export const EmptyFavorites = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image src="/empty-favorites.svg" height={140} width={140} alt="Empty" />
            <h2 className="text-2xl font-semibold mt-6">No favorites yet!</h2>
            <p className="text-muted-foreground textg-sm mt-2">Favorite boards will show up here for quick access</p>
        </div>
    )
}