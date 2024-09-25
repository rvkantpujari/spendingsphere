import { ChartPie } from "lucide-react";
import Link from "next/link";
import React from "react";

export function Logo() {
	return (
		<Link href="/" className="flex items-center gap-2">
			<ChartPie className="stroke h-10 w-10 stroke-purple-500 stroke-[2]" />
			<p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-[1.5rem] font-bold leading-tight tracking-tighter text-transparent">
				SpendingSphere
			</p>
		</Link>
	);
}

export function LogoMobile() {
	return (
		<Link href="/" className="flex items-center gap-2">
			<ChartPie className="stroke h-8 w-8 stroke-purple-500 stroke-[1.5]" />
			<p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-[1.3rem] font-bold leading-tight tracking-tighter text-transparent">
				SpendingSphere
			</p>
		</Link>
	);
}
