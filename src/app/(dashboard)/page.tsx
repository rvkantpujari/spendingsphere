import Navbar from "@/components/Navbar";
import WelcomeMsg from "@/components/WelcomeMsg";
import React from "react";

function page() {
	return (
		<>
			<Navbar />
			<main className="h-[calc(100dvh-80px)] md:h-[calc(100dvh-70px)] min-w-full p-8">
				<WelcomeMsg />
			</main>
		</>
	);
}

export default page;
