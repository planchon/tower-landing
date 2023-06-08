import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen text-white flex-col p-12 bg-[#1d1d1d]">
            <div className="w-full flex flex-col items-center">
                <Image
                    src="/tower.png"
                    width={100}
                    height={100}
                    alt="Tower logo"
                />
                <h1 className="pt-12 text-xl font-mono w-[350px] text-center">
                    Tower is the next generation tool for developers
                </h1>
                <a
                    className="bg-white p-3 text-[#1d1d1d] rounded-md mt-12"
                    href="https://github.com/brumecloud/tower"
                >
                    Download now
                </a>
                <Image
                    src="/main.png"
                    width={1000}
                    height={800}
                    alt="Main Tower image"
                    className="pt-6"
                />
                <p className="pt-0">
                    Inspect logs from all your sources: docker, kubernetes and
                    more to come
                </p>
                <Image
                    src="/cmk.png"
                    width={1000}
                    height={800}
                    alt="Main Tower image"
                    className="pt-6 mb-2"
                />
                <p className="pt-0">
                    Use{" "}
                    <span className="font-mono bg-white text-[#1d1d1d] border p-1 rounded mx-1">
                        command K
                    </span>{" "}
                    everywhere. Maximum productivity!
                </p>
                <Image
                    src="/tabs.png"
                    width={1200}
                    height={800}
                    alt="Main Tower image"
                    className="pt-6 mb-2"
                />
                <p className="pt-0">
                    create as many tabs as you want, no more{" "}
                    <span className="font-mono bg-white text-[#1d1d1d] border p-1 rounded mx-1">
                        kubectl logs
                    </span>{" "}
                    or{" "}
                    <span className="font-mono bg-white text-[#1d1d1d] border p-1 rounded mx-1">
                        docker logs
                    </span>{" "}
                    in differents terminals. Everything unified
                </p>
                <div className="text-sm font-thin pt-20">
                    made with ❤️ in 🇫🇷 - (c) Paul Planchon & Brume Cloud 2023
                </div>
            </div>
        </main>
    );
}
