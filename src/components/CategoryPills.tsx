import { Button } from "./Button"

type CategoryPillProps = {
    categories: string[]
}
const CategoryPills = ({ categories }: CategoryPillProps) => {
    return (
        <div className="overflow-x-hidden relative">
            <div className="flex whitespace-normal gap-3 transition-transform w-[max-content]">
                {categories.map((category) => <Button key={category} className="py-1 px-3 rounded-lg whitespace-nowrap">
                    {category}
                </Button>
                )
                }
            </div>
        </div>
    )
}

export default CategoryPills
