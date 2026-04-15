import graduationImg from '../assets/graduation.jpg';

export default function About() {
	return (
		<section
			id="about"
			className="section-divider relative py-24 overflow-hidden"
		>
			{/* Left kente accent */}
			<div
				className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container"
				aria-hidden="true"
			/>
			<div
				className="absolute left-0 top-0 bottom-0 w-12 kente-pattern-subtle pointer-events-none"
				aria-hidden="true"
			/>

			<div className="max-w-7xl mx-auto px-6 md:px-16">
				{/* Two-column layout */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* LEFT — Portrait */}
					<div className="relative">
						<div
							className="aspect-[4/5] bg-surface-container flex items-center justify-center overflow-hidden"
							style={{ borderRadius: '2px' }}
						>
							{/* Portrait placeholder with warm overlay */}

							<div className="w-full h-full relative">
								<img src={graduationImg} alt="Profile" className="w-full h-full object-cover object-top" />
								<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface-container-lowest opacity-60 z-10" />
								<div
									className="absolute inset-0 opacity-20 z-20"
									style={{ background: 'rgba(193,68,14,0.15)' }}
								/>

								<div className="w-full h-full bg-surface-container-high flex items-end justify-start p-4"></div>
							</div>
						</div>
					</div>

					{/* RIGHT — Copy */}
					<div className="space-y-6">
						{/* Section label */}
						<p className="font-mono text-xs uppercase tracking-widest text-outline">
							02 / About
						</p>

						{/* Headline */}
						<h2
							className="font-headline font-bold text-on-background leading-tight"
							style={{
								fontSize: 'clamp(2rem, 4vw, 3.5rem)',
								letterSpacing: '-0.02em',
							}}
						>
							Engineer.
							<br />
							Athlete.
							<br />
							Builder.
						</h2>

						{/* Terracotta rule */}
						<div className="w-12 h-px bg-primary-container" />

						{/* Pull-quote */}
						<blockquote
							className="font-body italic text-secondary"
							style={{
								fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
								lineHeight: 1.6,
							}}
						>
							"Born in Guinea, raised in Canada — I build like I compete."
						</blockquote>

						{/* Body */}
						<div
							className="space-y-4 font-body text-on-surface-variant"
							style={{ lineHeight: 1.75 }}
						>
							<p>
								As a Canadian software engineer of Guinean heritage, my work
								exists at the intersection of high-performance technical
								architecture and profound cultural identity. I approach every
								codebase with the same tactical precision I honed as a
								competitive athlete.
							</p>
							<p>
								To me, building is not just about execution — it is about
								lineage. It is about translating the resilience of my West
								African roots into digital systems that are as enduring as they
								are elegant. My focus remains unwavering: creating products that
								resonate with human purpose and technical excellence.
							</p>
						</div>

						{/* Download link */}
						<a
							href="#contact"
							className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary-container hover:text-secondary transition-colors"
						>
							Download Manifest
							<span aria-hidden="true" className="text-outline">
								——
							</span>
							<span>↗</span>
						</a>
					</div>
				</div>
			</div>

			{/* Bottom separator */}
			<div className="absolute bottom-0 left-0 right-0 h-px bg-primary-container opacity-30" />
		</section>
	);
}
