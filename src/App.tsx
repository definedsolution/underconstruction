import React from "react";
import Marquee from "./Marquee";
import Halo from "./HaloEffect";

const App: React.FC = () => {
	return (
		<>
			<div className="relative z-2">
				<header className="relative mx-auto flex flex-row items-center justify-between p-6 px-8 max-w-7xl">
					<img
						src="/logo.svg"
						className="max-w-[100px] max-h-[120px]"
					/>
					<button className="font-bold font-serif rounded text-sm">
						<span className="hidden sm:inline">Have New Idea?</span>{" "}
						<span className="text-primary underline-offset-4 hover:underline ml-1">
							GET A QUOTE
						</span>
					</button>
				</header>
				<main className="relative min-h-[72vh]">
					<div className="relative">
						<h1 className="absolute top-2/3 lg:top-3/4 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[10vw] md:text-[5vw] leading-none font-koulen">
							<span>Website</span> <br /> Under Construction.
						</h1>
						<Halo />
					</div>
				</main>
				<footer className="relative">
					<Marquee />
				</footer>
			</div>
		</>
	);
};

export default App;
