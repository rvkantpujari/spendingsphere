"use client";

import React, { useState } from "react";
import { Logo, LogoMobile } from "./Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { ThemeSwitcherButton } from "./ThemeSwitcherButton";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { ClerkLoaded, SignedOut, UserButton } from "@clerk/nextjs";

function Navbar() {
	return (
		<>
			<DesktopNavbar />
			<MobileNavbar />
		</>
	);
}

const navLinks = [
	{ label: "Home", link: "/" },
	{ label: "About Us", link: "/about-us" },
	{ label: "Contact Us", link: "/contact-us" },
];

function MobileNavbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<section className="block border-separate bg-background md:hidden">
			<nav className="container flex items-center justify-between">
				<section className="flex h-[70px] min-h-[60px] items-center gap-x-4 px-2">
					<LogoMobile />
				</section>
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild>
						<Button variant={"ghost"} size={"icon"}>
							<Menu />
						</Button>
					</SheetTrigger>
					<SheetContent
						className="w-[400px] sm:w-[540px]"
						side="right"
					>
						<section className="flex flex-col items-end gap-1 pt-6 pr-4">
							{navLinks.map((navLink) => (
								<NavbarItem
									key={navLink.label}
									link={navLink.link}
									label={navLink.label}
									clickCallback={() =>
										setIsOpen((prev) => !prev)
									}
								/>
							))}
							<SignedOut>
								<NavbarItem
									key="Sign-in"
									link="/sign-in"
									label="Sign In"
								/>
							</SignedOut>
						</section>
					</SheetContent>
				</Sheet>
				<section className="flex items-center gap-2">
					<ThemeSwitcherButton />
					<UserButton afterSwitchSessionUrl="/sign-in" />
				</section>
			</nav>
		</section>
	);
}

function DesktopNavbar() {
	return (
		<section className="hidden container border-separate border-b bg-background md:block md:mx-auto">
			<section className="container flex items-center justify-between px-8">
				<Logo />
				<nav className="flex">
					<section className="flex h-[65px] min-h-[50px] items-center gap-x-4">
						<section className="flex h-full">
							{navLinks.map((navLink) => (
								<NavbarItem
									key={navLink.label}
									link={navLink.link}
									label={navLink.label}
								/>
							))}

							<ClerkLoaded>
								<SignedOut>
									<NavbarItem
										key="Sign-in"
										link="/sign-in"
										label="Sign In"
									/>
								</SignedOut>
							</ClerkLoaded>
						</section>
					</section>
					<section className="flex items-center gap-6 ml-12">
						<ThemeSwitcherButton />
						<UserButton afterSwitchSessionUrl="/sign-in" />
					</section>
				</nav>
			</section>
		</section>
	);
}

function NavbarItem({
	label,
	link,
	clickCallback,
}: {
	label: string;
	link: string;
	clickCallback?: () => void;
}) {
	const pathname = usePathname();
	const isActive = pathname === link;
	return (
		<section className="relative flex items-center">
			<Link
				href={link}
				className={cn(
					buttonVariants({ variant: "ghost" }),
					"w-full justify-start text-lg text-muted-foreground hover:text-foreground",
					isActive && "text-foreground"
				)}
				onClick={() => {
					if (clickCallback) clickCallback();
				}}
			>
				{label}
			</Link>

			{isActive && (
				<section className="absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block"></section>
			)}
		</section>
	);
}

export default Navbar;
