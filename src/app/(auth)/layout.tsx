import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
	return (
		<section className="relative flex h-screen w-full flex-col items-center justify-center">
			<section className="mt-12">{children}</section>
		</section>
	);
}

export default layout;
