import { Star, Quote } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const testimonials = [
	{
		name: "Sarah Chen",
		role: "Marketing Director",
		company: "TechFlow Inc.",
		image: "https://media.istockphoto.com/id/1710527752/photo/headshot-portrait-of-smiling-businessman-posing-in-office.jpg?s=612x612&w=0&k=20&c=Ejt8NfKrUsMQHesp5nKjRbH7beE4UullC3fvDKkH_1U=",
		rating: 5,
		content:
			"ADmyBRAND AI Suite transformed our marketing strategy completely. We saw a 300% increase in engagement and 150% boost in conversions within just 3 months. The AI-generated content is indistinguishable from our best copywriters.",
	},
	{
		name: "Marcus Rodriguez",
		role: "CEO",
		company: "GrowthLab",
		image: "https://media.istockphoto.com/id/2194078950/photo/profile-picture-of-smiling-confident-arabic-businessman.jpg?s=612x612&w=0&k=20&c=hFoHVfmAgOET8r1unu8uoPvgwLzaFllpz9jeOdBxSgE=",
		rating: 5,
		content:
			"The automation capabilities are incredible. What used to take our team 20 hours per week now takes 2 hours. The ROI optimization alone has saved us over $50K in ad spend while improving our results dramatically.",
	},
	{
		name: "Emily Watson",
		role: "Digital Marketing Manager",
		company: "BrandForge",
		image: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY=",
		rating: 5,
		content:
			"I was skeptical about AI marketing tools, but ADmyBRAND proved me wrong. The insights are incredibly accurate, and the content generation saves us countless hours while maintaining our brand voice perfectly.",
	},
	{
		name: "David Kim",
		role: "Founder",
		company: "StartupBoost",
		image: "https://media.istockphoto.com/id/1501770003/photo/happy-handsome-young-indian-man-head-shot-front-portrait.jpg?s=612x612&w=0&k=20&c=P2toTbaknymA7vf28IQNa-3xrlUjPXLFqvN2Zra8_nw=",
		rating: 5,
		content:
			"As a startup, we needed enterprise-level marketing capabilities on a budget. ADmyBRAND delivered exactly that. Our customer acquisition cost dropped by 40% while our conversion rates doubled.",
	},
	{
		name: "Lisa Thompson",
		role: "VP of Marketing",
		company: "ScaleUp Solutions",
		image: "https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.jpg?s=612x612&w=0&k=20&c=chnP70yMIsbzuyz1uVWn6mQ5GhZYH9_OL26TpgQAxyE=",
		rating: 5,
		content:
			"The multi-channel management feature is a game-changer. We can now coordinate campaigns across 15+ channels seamlessly. The AI insights help us make data-driven decisions that actually move the needle.",
	},
	{
		name: "John Doe",
		role: "Product Manager",
		company: "InnovateX",
		image: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?s=612x612&w=0&k=20&c=uP9rKidKETywVil0dbvg_vAKyv2wjXMwWJDNPHzc_Ug=",
		rating: 5,
		content:
			"ADmyBRAND's platform made campaign management effortless. The insights and automation tools are top-notch, and the support team is always there when you need them.",
	},
]

export function Testimonials() {
	return (
		<section className="py-24 px-4 relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10" />

			<div className="relative z-10 max-w-7xl mx-auto">
				<div className="text-center mb-16 animate-on-scroll">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-sm mb-6">
						<Star className="w-4 h-4 text-blue-400" />
						<span className="text-sm font-medium text-blue-300">
							Customer Success
						</span>
					</div>

					<h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
						Loved by Marketing
						<br />
						Teams Worldwide
					</h2>

					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						Join thousands of successful businesses that have transformed their
						marketing with ADmyBRAND AI Suite.
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
					{testimonials.map((t, i) => (
						<GlassCard
							key={i}
							className="p-6 flex flex-col h-full animate-on-scroll"
						>
							<div className="flex items-center justify-between mb-4">
								<Quote className="w-7 h-7 text-blue-400/30" />
								<div className="flex gap-1">
									{[...Array(t.rating)].map((_, idx) => (
										<Star
											key={idx}
											className="w-4 h-4 fill-yellow-400 text-yellow-400"
										/>
									))}
								</div>
							</div>
							<blockquote className="text-base md:text-lg text-gray-200 leading-relaxed mb-4 flex-1">
								"{t.content}"
							</blockquote>
							<div className="flex items-center gap-3 mt-4">
								<img
									src={t.image || "/placeholder.svg"}
									alt={t.name}
									className="w-12 h-12 rounded-full object-cover"
								/>
								<div>
									<div className="font-semibold text-white">{t.name}</div>
									<div className="text-sm text-gray-300">
										{t.role} at {t.company}
									</div>
								</div>
							</div>
						</GlassCard>
					))}
				</div>
			</div>
		</section>
	)
}
