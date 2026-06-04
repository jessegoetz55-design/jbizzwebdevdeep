import React, { useState } from 'react';

const PortfolioGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const projects = [
    {
      id: 1,
      title: "Miami Luxury Realty",
      category: "realtor",
      description: "AI chatbot + lead scoring → 142 leads in first month",
      result: "+340% leads"
    },
    {
      id: 2,
      title: "Elite Roofing FL",
      category: "contractor",
      description: "Emergency call system + instant quote engine",
      result: "12 hot leads/week"
    },
    {
      id: 3,
      title: "Success Coaching Inc",
      category: "coach",
      description: "Course funnel + automated webinar registration",
      result: "3x conversion rate"
    },
    {
      id: 4,
      title: "Orlando Real Estate Group",
      category: "realtor",
      description: "IDX integration + AI property recommendations",
      result: "89 qualified buyers"
    },
    {
      id: 5,
      title: "Precision Construction",
      category: "contractor",
      description: "Project estimator + client portal",
      result: "$2.1M in bids"
    },
    {
      id: 6,
      title: "Business Growth Academy",
      category: "coach",
      description: "Membership site + community platform",
      result: "500+ members"
    }
  ];

  const categories = ["all", "realtor", "contractor", "coach"];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "all") return true;
    return project.category === activeCategory;
  });

  const getIcon = (category: string): string => {
    if (category === "realtor") return "🏠";
    if (category === "contractor") return "🔨";
    return "🎯";
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900" id="portfolio">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-bold uppercase tracking-wider mb-2">
            Real Work. Real Results.
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Portfolio That Prints</h2>
          <p className="text-gray-400 mt-4">
            See what happens when AI meets street-smart strategy.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all capitalize ${
                activeCategory === category
                  ? "bg-gold text-black shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gold/50 transition-all"
            >
              <div className="h-48 bg-gradient-to-br from-gold/20 to-purple-500/20 flex items-center justify-center">
                <span className="text-6xl">{getIcon(project.category)}</span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <span className="inline-block bg-gold/10 text-gold text-xs font-bold px-2 py-1 rounded">
                  📈 {project.result}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-gold text-gold px-8 py-3 rounded-full font-bold hover:bg-gold hover:text-black transition-all">
            View Full Portfolio →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;