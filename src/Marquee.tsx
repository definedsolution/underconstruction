/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import services from "./utilities/services";
import { gsap } from "gsap";

const Marquee: React.FC = () => {
	React.useEffect(() => {
		animate();
	}, []);
	const animate = () => {
		// desired effect, but needs to be seamless
		// splash animation

		// marquee timeline animation
		const tl1 = gsap.timeline({
			// repeat: -1,
			defaults: {
				ease: "none",
			},
		});
		const tl2 = gsap.timeline({
			// repeat: -1,
			defaults: {
				ease: "none",
			},
		});
		const tl3 = gsap.timeline({
			// repeat: -1,
			defaults: {
				ease: "none",
			},
		});
		tl1.fromTo(
			".card-1",
			{
				x: 0,
				duration: 40,
			},
			{
				duration: 40,
				x: document.getElementById("mrq-1")?.scrollWidth || 0,
				onComplete: () => {
					if (tl1.reversed()) {
						tl1.play(0);
					} else {
						tl1.reverse(40);
					}
				},
				onReverseComplete: () => {
					if (tl1.reversed()) {
						tl1.play(0);
					} else {
						tl1.reverse(40);
					}
				},
			}
		);
		tl2.fromTo(
			".card-2",
			{
				x: document.getElementById("mrq-2")?.scrollWidth || 0,
				duration: 45,
			},
			{
				x: 0,
				duration: 45,
				onComplete: () => {
					if (tl2.reversed()) {
						tl2.play(0);
					} else {
						tl2.reverse(45);
					}
				},
				onReverseComplete: () => {
					if (tl2.reversed()) {
						tl2.play(0);
					} else {
						tl2.reverse(45);
					}
				},
			}
		);
		tl3.fromTo(
			".card-3",
			{
				x: 0,
				duration: 50,
			},
			{
				x: document.getElementById("mrq-3")?.scrollWidth || 0,
				duration: 50,
				onComplete: () => {
					if (tl3.reversed()) {
						tl3.play(0);
					} else {
						tl3.reverse(50);
					}
				},
				onReverseComplete: () => {
					if (tl3.reversed()) {
						tl3.play(0);
					} else {
						tl3.reverse(50);
					}
				},
			}
		);
	};

	return (
		<div className="hero-marquee flex flex-col overflow-hidden relative mix-blend-lighten">
			<div className="absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-r from-background to-background via-transparent from-10% to-90%" />
			<div
				id="mrq-1"
				className="flex flex-row justify-end overflow-hidden gap-3 py-[6px] font-serif tracking-widest text-xs sm:text-sm"
			>
				{services?.services?.slice?.(0, 20)?.map?.((service: any) => (
					<p
						key={service}
						className={`card-1 whitespace-nowrap px-4 font-bold py-2 ${
							service.at(-1) === "y"
								? "bg-primary text-background font-bold"
								: service.at(-1) === "y" || service.at(-1) === "e"
								? "bg-secondary text-background font-bold"
								: "bg-[#202730]"
						}  rounded shadow shadow-black`}
					>
						{service}
					</p>
				))}
			</div>
			<div
				id="mrq-2"
				className=" flex flex-row justify-end overflow-hidden gap-3 py-[6px] font-serif tracking-widest text-xs sm:text-sm"
			>
				{services?.services?.slice?.(20, 50)?.map?.((service: any) => (
					<p
						key={service}
						className={`card-2 whitespace-nowrap px-4 font-bold py-2 ${
							service.at(-1) === "t"
								? "bg-primary text-background font-bold"
								: service.at(-1) === "y" || service.at(-1) === "e"
								? "bg-secondary text-background font-bold"
								: "bg-[#202730]"
						}  rounded shadow shadow-black`}
					>
						{service}
					</p>
				))}
			</div>
			<div
				id="mrq-3"
				className="flex flex-row justify-end overflow-hidden gap-3 py-[6px] font-serif tracking-widest text-xs sm:text-sm"
			>
				{services?.services?.slice?.(50)?.map?.((service: any) => (
					<p
						key={service}
						className={`card-3 whitespace-nowrap px-4 font-bold py-2 ${
							service.at(-1) === "t"
								? "bg-primary text-background font-bold"
								: service.at(-1) === "y" || service.at(-1) === "e"
								? "bg-secondary text-background font-bold"
								: "bg-[#202730]"
						}  rounded shadow shadow-black`}
					>
						{service}
					</p>
				))}
			</div>
		</div>
	);
};

export default Marquee;
