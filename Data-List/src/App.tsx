import { Plus } from "lucide-react";

export function App() {
    return (
        <div className="py-10 space-y8">
            <div>header</div>
            <main className="max-w-6xl mx-auto space-y-5">
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-bold">Tags</h1>
                    <button className="inline-flex items-center gap-1.5 text-xs bg-teal-300 text-teal-950 font medium rounded-full p-2 hover:bg-teal-500 transition-colors">
                        <Plus className="size-5" />
                        Create new
                    </button>
                </div>
            </main>
        </div>
    );
}
