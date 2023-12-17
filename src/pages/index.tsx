import {
    Hero,
    GoalCalculation,
    InvestmentForecast,
    Conclusion,
    Footer,
    Testimonial,
    ActionSteps,
    PortfolioStats,
    PremiumUpgrade,
    Allocation
} from "@/components";

export default function Home() {
    return (
        <div className="w-full">
            <Hero />
            <GoalCalculation />
            <InvestmentForecast />
            <PremiumUpgrade />
            <Allocation />
            <Testimonial />
            <ActionSteps />
            <PortfolioStats />
            <Conclusion />
            <Footer />
        </div>
    );
}