import Image from "next/image";

export const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="w-20 h-20 relative animate-spin">
                <Image
                    alt="loading1"
                    fill
                    src="/loading1.png"
                />
            </div>
            <p className="text-sm text-muted-forground">
                Genius is think...
            </p>
        </div>
    );
};