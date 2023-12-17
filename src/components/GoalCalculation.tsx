export function GoalCalculation() {
    return (
        <div className="container flex flex-col items-center mx-auto pt-[100px]">
            <h2 className="text-4xl text-center mb-[24px]">Well Done Khaled.<br />You Have Successfully Created Your Goal.</h2>
            <p className="text-sm text-center mx-auto max-w-[500px] font-light">
                We took all of your inputs and created a plan for you. Its pretty simple, to get to
                <span className="font-medium"> $170,000</span> savings in the next <span className="font-medium">70 years</span>
                , you need to invest <span className="font-medium">$2,000 now</span> and <span className="font-medium">$200 every month </span>
                for the next 70 years.
            </p>
            <button className="flex gap-1 text-zinc-500 py-2 px-5 text-xs rounded-full items-center mt-[24px]">
                Recalculate
            </button>
        </div>
    );
}