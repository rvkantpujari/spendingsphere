import { Logo, LogoMobile } from "@/components/Logo";

export default function Home() {
	return (
		<main className="h-[calc(100dvh-80px)] md:h-[calc(100dvh-70px)] min-w-full flex flex-col gap-8 justify-center items-center">
			<Logo />
			<LogoMobile />
		</main>
	);
}
