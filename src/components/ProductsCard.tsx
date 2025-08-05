import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  Shirt, 
  Crown, 
  Watch, 
  Glasses, 
  Footprints,
  Package,
  ExternalLink,
  Star,
  Sparkles
} from "lucide-react";

type ProductsCardProps = {
  products: string[];
  context: string;
};

const generateSearchLink = (platform: string, query: string) => {
  const encodedQuery = encodeURIComponent(query);
  switch (platform) {
    case "amazon":
      return `https://www.amazon.in/s?k=${encodedQuery}`;
    case "flipkart":
      return `https://www.flipkart.com/search?q=${encodedQuery}`;
    case "myntra":
      return `https://www.myntra.com/${encodedQuery}`;
    default:
      return "#";
  }
};

const getProductIcon = (product: string) => {
  const item = product.toLowerCase();
  
  if (item.includes('shirt') || item.includes('top') || item.includes('blouse') || 
      item.includes('jacket') || item.includes('sweater') || item.includes('hoodie')) {
    return <Shirt className="w-6 h-6" />;
  }
  if (item.includes('shoe') || item.includes('sneaker') || item.includes('boot') || 
      item.includes('sandal') || item.includes('heel') || item.includes('loafer')) {
    return <Footprints className="w-6 h-6" />;
  }
  if (item.includes('watch') || item.includes('bracelet') || item.includes('ring')) {
    return <Watch className="w-6 h-6" />;
  }
  if (item.includes('glasses') || item.includes('sunglasses') || item.includes('specs')) {
    return <Glasses className="w-6 h-6" />;
  }
  if (item.includes('hat') || item.includes('cap') || item.includes('crown') || 
      item.includes('headband') || item.includes('accessories')) {
    return <Crown className="w-6 h-6" />;
  }
  if (item.includes('bag') || item.includes('purse') || item.includes('wallet') || 
      item.includes('backpack') || item.includes('essentials')) {
    return <Package className="w-6 h-6" />;
  }
  
  return <Sparkles className="w-6 h-6" />;
};

const getProductImage = (product: string) => {
  const item = product.toLowerCase();
  
  if (item.includes('shirt') || item.includes('top') || item.includes('blouse')) {
    return "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center&sat=-100";
  }
  if (item.includes('jacket') || item.includes('coat')) {
    return "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=400&fit=crop&crop=center&sat=-100";
  }
  if (item.includes('dress')) {
    return "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop&crop=center&sat=-100";
  }
  if (item.includes('jeans') || item.includes('pants') || item.includes('trouser')) {
    return "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop&crop=center&sat=-100";
  }
  if (item.includes('shoe') || item.includes('sneaker')) {
    return "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center&sat=-100";
  }
  if (item.includes('boot')) {
    return "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop&crop=center&sat=-100";
  }
  if (item.includes('watch')) {
    return "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop&crop=center&sat=-100";
  }
  if (item.includes('glasses') || item.includes('sunglasses')) {
    return "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop&crop=center&sat=-100";
  }
  if (item.includes('bag') || item.includes('purse')) {
    return "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center&sat=-100";
  }
  if (item.includes('hat') || item.includes('cap')) {
    return "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=400&fit=crop&crop=center&sat=-100";
  }
  
  // Default fashion item image
  return "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop&crop=center&sat=-100";
};

const ProductsCard: React.FC<ProductsCardProps> = ({ products, context }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black dark:bg-white mb-4">
          <ShoppingCart className="w-8 h-8 text-white dark:text-black" />
        </div>
        <h2 className="text-3xl font-bold text-black dark:text-white mb-2">
          Curated Fashion Picks
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {context}
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((item, index) => (
          <Card key={index} className="group hover:shadow-2xl transition-all duration-10 border-1 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white bg-white dark:bg-black overflow-hidden">
            <div className="relative">
              {/* Product Image */}
              <div className="aspect-square w-full overflow-hidden bg-gray-100 dark:bg-black">
                <img
                  src={getProductImage(item)}
                  alt={item}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-black text-gray-600 dark:text-gray-400">
                  {getProductIcon(item)}
                </div>
              </div>
              
              {/* Overlay Badge */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/95 dark:bg-black/95 text-black dark:text-white shadow-lg backdrop-blur-sm border border-gray-300 dark:border-gray-600">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Premium Pick
                </Badge>
              </div>
            </div>

            <CardContent className="p-6">
              {/* Product Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-black dark:bg-white text-white dark:text-black">
                  {getProductIcon(item)}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-black dark:text-white leading-tight">
                    {item}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Handpicked for you
                  </p>
                </div>
              </div>

              {/* Shopping Links */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                  Shop from trusted retailers:
                </p>
                
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-2 border-gray-300 dark:border-gray-600 hover:border-black dark:hover:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 group/btn"
                  >
                    <a
                      href={generateSearchLink("amazon", item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1"
                    >
                      Amazon
                      <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-2 border-gray-300 dark:border-gray-600 hover:border-black dark:hover:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 group/btn"
                  >
                    <a
                      href={generateSearchLink("flipkart", item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1"
                    >
                      Flipkart
                      <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-2 border-gray-300 dark:border-gray-600 hover:border-black dark:hover:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 group/btn"
                  >
                    <a
                      href={generateSearchLink("myntra", item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1"
                    >
                      Myntra
                      <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-8 p-6 rounded-2xl">
        <div className="flex items-center justify-center gap-2 text-sm text-black dark:text-white">
          <Sparkles className="w-4 h-4" />
          @Soumyodeep-Das
          <Sparkles className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;


// Demo usage
/*
export const DemoProductsCard = () => {
  const sampleProducts = [
    "Classic White Button-Down Shirt",
    "Comfortable Denim Jeans",
    "Leather Ankle Boots",
    "Silver Minimalist Watch"
  ];
  
  const sampleContext = "Based on today's weather and your style preferences, here are some curated fashion recommendations that blend comfort with elegance.";
  
  return (
    <div className="min-h-screen bg-white dark:bg-black p-4">
      <ProductsCard products={sampleProducts} context={sampleContext} />
    </div>
  );
}
  */