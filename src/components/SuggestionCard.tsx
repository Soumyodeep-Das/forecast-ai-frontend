import { Card, CardContent } from "@/components/ui/card";
import { Shirt, Footprints, Sun, Backpack } from "lucide-react";

export default function SuggestionCard({
  suggestions,
  context,
}: {
  suggestions: string[];
  context: string;
}) {
  const categories = [
    { icon: <Shirt className="w-5 h-5 mr-2" />, title: "Clothing-Upper", items: suggestions[0] },
    { icon: <Footprints className="w-5 h-5 mr-2" />, title: "Clothing-Lower", items: suggestions[1] },
    { icon: <Sun className="w-5 h-5 mr-2" />, title: "Accessories", items: suggestions[2] },
    { icon: <Backpack className="w-5 h-5 mr-2" />, title: "Essentials", items: suggestions[3] },
  ];

  return (
    <Card className="w-full shadow-lg max-w-2xl mx-auto p-4 mt-6 bg-muted">
      <CardContent>
        <h2 className="text-2xl font-bold mb-4">🌤️ AI Suggestions for the Day</h2>
        <p className="text-sm text-muted-foreground italic mb-6">{context}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="bg-background rounded-xl p-4 border">
              <div className="flex items-center mb-2 font-semibold text-lg">
                {category.icon}
                {category.title}
              </div>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                {category.items.split(",").map((item, i) => (
                  <li key={i}>{item.trim()}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
