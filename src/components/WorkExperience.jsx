import { experience } from '../data/mockData';

export default function WorkExperience() {
	return (
		<section
			id="experience"
			className="section-divider relative py-24 overflow-hidden"
		>
			{/* Right kente accent */}
			<div
				className="absolute right-0 top-0 bottom-0 w-16 kente-pattern-subtle pointer-events-none"
				aria-hidden="true"
			/>

			<div className="max-w-7xl mx-auto px-6 md:px-16">
				{/* Section label */}
				<p className="font-mono text-xs uppercase tracking-widest text-outline mb-4">
					05 / Experience
				</p>

				{/* Section headline with ambient glow */}
				<div className="exp-headline-wrap mb-20">
					<div className="exp-headline-glow" aria-hidden="true" />
					<h2
						className="font-headline font-black leading-tight"
						style={{
							fontSize: 'clamp(2.5rem, 6vw, 5rem)',
							letterSpacing: '-0.03em',
						}}
					>
						<span className="text-on-background">Where I've</span>
						<br />
						<span className="exp-headline-built text-primary-container">
							Built
						</span>
					</h2>
				</div>

				{/* Timeline entries */}
				<div className="space-y-16">
					{experience.map((job, idx) => (
						<div
							key={job.company}
							className="exp-row grid grid-cols-1 lg:grid-cols-[200px_1px_1fr] gap-0 items-start p-2 -m-2"
							style={{ animationDelay: `${idx * 150}ms` }}
						>
							{/* Date */}
							<div className="pb-4 lg:pb-0 lg:pr-8 lg:text-right">
								<span className="exp-date font-mono text-xs uppercase tracking-widest">
									{job.period}
								</span>
							</div>

							{/* Timeline spine */}
							<div className="hidden lg:flex flex-col items-center">
								<div className="exp-spine" />
								<div className="exp-node" aria-hidden="true" />
							</div>

							{/* Content */}
							<div className="exp-content space-y-4">
								{/* Role */}
								<p className="exp-role font-mono text-xs uppercase tracking-widest text-primary-container">
									{job.role}
								</p>

								{/* Company */}
								<h3
									className="exp-company font-headline font-black text-on-background leading-none"
									style={{
										fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
										letterSpacing: '-0.02em',
									}}
								>
									{job.company}
								</h3>

								{/* Location */}
								{job.location && (
									<p className="font-mono text-xs uppercase tracking-widest text-outline">
										{job.location}
									</p>
								)}

								{/* Quote */}
								<blockquote
									className="exp-quote font-body italic text-on-surface-variant"
									style={{ lineHeight: 1.7 }}
								>
									{job.quote}
								</blockquote>

								{/* Bullets */}
								{job.bullets && job.bullets.length > 0 && (
									<ul className="space-y-2">
										{job.bullets.map((bullet, i) => (
											<li
												key={i}
												className="edu-highlight font-body text-sm text-on-surface-variant"
												style={{ lineHeight: 1.65 }}
											>
												<span className="edu-highlight-dot" aria-hidden="true" />
												{bullet}
											</li>
										))}
									</ul>
								)}

								{/* Stack badges */}
								<div className="flex flex-wrap gap-2">
									{job.stack.map((tech) => (
										<span
											key={tech}
											className="exp-badge font-mono text-xs uppercase tracking-widest text-tertiary border border-outline-variant px-3 py-1"
											style={{
												backgroundColor: '#1c1b1b',
												borderRadius: '4px',
												letterSpacing: '0.08em',
											}}
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>

			</div>
		</section>
	);
}
