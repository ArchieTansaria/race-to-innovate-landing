import React from "react";
import SectionHeading from "./SectionHeading";
import AnimatedReveal from "./AnimatedReveal";
import { Target, Trophy, Users } from "lucide-react";

const AboutFeatures = [
	{
		icon: <Target className="w-6 h-6 text-hackathon-aqua" />,
		title: "Design Challenges",
		description:
			"Solve design riddles and puzzles to unlock product features in real-time",
	},
	{
		icon: <Users className="w-6 h-6 text-hackathon-aqua" />,
		title: "Team Collaboration",
		description:
			"Form teams of 1-4 participants and showcase your collective creativity",
	},
	{
		icon: <Trophy className="w-6 h-6 text-hackathon-aqua" />,
		title: "Competitive Scoring",
		description:
			"Earn points for creativity, foresight, and problem-solving throughout the event",
	},
];

const About = () => {
	return (
		<section id="about" className="py-20 px-4 relative">
			<div className="container mx-auto max-w-6xl relative z-10">
				<AnimatedReveal>
					<SectionHeading
						title="About the Hackathon"
						description="Race to Innovate is a unique prototype design competition where ingenuity meets challenge"
					/>
				</AnimatedReveal>

				<AnimatedReveal delay={200}>
					<div className="grid md:grid-cols-3 gap-8 mt-12">
						{AboutFeatures.map((feature, index) => (
							<div
								key={index}
								className="glass rounded-xl p-6 shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:border-hackathon-aqua/20 hover:translate-y-[-5px]"
							>
								<div className="rounded-full bg-hackathon-black/5 w-12 h-12 flex items-center justify-center mb-4">
									{feature.icon}
								</div>
								<h3 className="text-xl font-semibold mb-2">
									{feature.title}
								</h3>
								<p className="text-gray-600">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</AnimatedReveal>

				<AnimatedReveal delay={400}>
					<div className="mt-16 gradient-border">
						<div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-xl">
							<div className="grid md:grid-cols-2 gap-10">
								<div>
									<h3 className="text-2xl font-semibold mb-4">
										Competition Format
									</h3>
									<p className="text-gray-600 mb-4">
										Race to Innovate is a two-stage
										competition designed to test both your
										theoretical knowledge and practical
										skills:
									</p>
									<ul className="space-y-3 text-gray-600">
										<li className="flex items-start">
											<span className="inline-block w-2 h-2 bg-hackathon-purple rounded-full mt-2 mr-2"></span>
											<span>
												<strong>Round 1:</strong>{" "}
												Quiz-based elimination to select
												the top 12 teams
											</span>
										</li>
										<li className="flex items-start">
											<span className="inline-block w-2 h-2 bg-hackathon-aqua rounded-full mt-2 mr-2"></span>
											<span>
												<strong>Round 2:</strong>{" "}
												Prototype development with
												feature reveals through riddles
											</span>
										</li>
										<li className="flex items-start">
											<span className="inline-block w-2 h-2 bg-hackathon-purple rounded-full mt-2 mr-2"></span>
											<span>
												<strong>Final:</strong>{" "}
												Presentation and evaluation
												based on design quality and
												implementation
											</span>
										</li>
									</ul>
								</div>
								<div>
									<h3 className="text-2xl font-semibold mb-4">
										Registration Details
									</h3>
									<p className="text-gray-600 mb-4">
										Join this exciting challenge and
										showcase your design capabilities:
									</p>
									<ul className="space-y-3 text-gray-600">
										<li className="flex items-start">
											<span className="inline-block w-2 h-2 bg-hackathon-purple rounded-full mt-2 mr-2"></span>
											<span>
												Team size: 1-4 members per team
											</span>
										</li>
										<li className="flex items-start">
											<span className="inline-block w-2 h-2 bg-hackathon-aqua rounded-full mt-2 mr-2"></span>
											<span>
												Registration fee: ₹100 per team
												(only for selected teams)
											</span>
										</li>
										<li className="flex items-start">
											<span className="inline-block w-2 h-2 bg-hackathon-purple rounded-full mt-2 mr-2"></span>
											<span>
												All participants receive a
												certificate of participation
											</span>
										</li>
										<li className="flex items-start">
											<span className="inline-block w-2 h-2 bg-hackathon-aqua rounded-full mt-2 mr-2"></span>
											<span>
												Top 12 teams qualify for the
												final offline round
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</AnimatedReveal>
			</div>
		</section>
	);
};

export default About;
