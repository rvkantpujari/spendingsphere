"use client";

import { ClerkLoaded, SignedIn, useUser } from "@clerk/nextjs";
import React from "react";

function WelcomeMsg() {
	const { user, isLoaded } = useUser();
	return (
		<ClerkLoaded>
			<SignedIn>
				<section className="space-y-2 mb-4">
					<h2 className="text-2xl lg:text-4xl font-medium">
						Welcome{isLoaded ? ", " : " "} {user?.firstName} ✋🏻
					</h2>
					<h3 className="text-sm lg:text-base text-secondary-foreground">
						Here is your financial overview!
					</h3>
				</section>
			</SignedIn>
		</ClerkLoaded>
	);
}

export default WelcomeMsg;
