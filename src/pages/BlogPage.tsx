import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import machine from '@/assets/lab/machine.jpg';
import lab1 from '@/assets/lab/lab1.jpg';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Breakthrough in Phage Therapy for Cystic Fibrosis Patients",
      excerpt: "Our latest clinical trial shows promising results for treating Pseudomonas aeruginosa infections in CF patients using personalized phage cocktails.",
      content: "In a groundbreaking study published this month, our research team has demonstrated significant success in treating chronic Pseudomonas aeruginosa infections in cystic fibrosis patients...",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      category: "Clinical Research",
      tags: ["Phage Therapy", "Cystic Fibrosis", "Clinical Trial"],
      readTime: "5 min read",
      image: machine,
      featured: true
    },
    {
      id: 2,
      title: "Understanding Phage-Bacteria Co-evolution in Clinical Settings",
      excerpt: "New insights into how bacteriophages and their bacterial hosts evolve together during treatment, and implications for therapy design.",
      content: "The dynamic relationship between bacteriophages and bacteria presents both opportunities and challenges in therapeutic applications...",
      author: "Dr. Michael Chen",
      date: "2024-01-10",
      category: "Basic Research",
      tags: ["Evolution", "Resistance", "Microbiology"],
      readTime: "7 min read",
      image: machine,
      featured: false
    },
    {
      id: 3,
      title: "Regulatory Pathways for Phage Therapy Approval",
      excerpt: "Navigating the complex regulatory landscape for bacteriophage therapeutics and recent FDA guidance updates.",
      content: "The regulatory approval process for phage therapy presents unique challenges that differ significantly from traditional pharmaceuticals...",
      author: "Dr. Emily Rodriguez",
      date: "2024-01-05",
      category: "Regulatory Affairs",
      tags: ["FDA", "Regulation", "Approval Process"],
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 4,
      title: "Phage Manufacturing: Scaling Up for Clinical Use",
      excerpt: "Challenges and solutions in producing high-quality, consistent bacteriophage preparations for large-scale clinical applications.",
      content: "Manufacturing bacteriophages at scale while maintaining quality and consistency requires innovative approaches to traditional pharmaceutical production...",
      author: "Dr. James Park",
      date: "2023-12-28",
      category: "Manufacturing",
      tags: ["Production", "Quality Control", "Scaling"],
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 5,
      title: "Patient Stories: Life-Changing Phage Therapy Outcomes",
      excerpt: "Real stories from patients who have benefited from experimental phage therapy treatments for antibiotic-resistant infections.",
      content: "Behind every clinical trial and research paper are real patients whose lives have been transformed by innovative phage therapy treatments...",
      author: "Dr. Lisa Wang",
      date: "2023-12-20",
      category: "Patient Stories",
      tags: ["Patient Outcomes", "Success Stories", "Testimonials"],
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 6,
      title: "The Future of Personalized Phage Medicine",
      excerpt: "Exploring how advances in genomics and AI are enabling truly personalized bacteriophage treatments tailored to individual patients.",
      content: "The convergence of genomic sequencing, artificial intelligence, and phage biology is opening new frontiers in personalized medicine...",
      author: "Dr. Robert Garcia",
      date: "2023-12-15",
      category: "Future Trends",
      tags: ["Personalized Medicine", "AI", "Genomics"],
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1559757175-7c498cc9db7c?auto=format&fit=crop&w=800&q=80",
      featured: false
    }
  ];

  const categories = ["All", "Clinical Research", "Basic Research", "Regulatory Affairs", "Manufacturing", "Patient Stories", "Future Trends"];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Research Blog & News
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest discoveries, insights, and developments 
            in bacteriophage research and therapy.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <Card className="shadow-hero overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-primary/10 text-primary border-primary/20">
                    Featured Post
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild>
                    <Link to={`/blog/${featuredPost.id}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.id} className="shadow-card hover:shadow-hover transition-smooth overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-smooth"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl leading-tight line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>

                  <Button asChild variant="ghost" className="w-full justify-between p-0 h-auto">
                    <Link to={`/blog/${post.id}`} className="py-2">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="mt-16 bg-muted rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest research updates, 
            breakthrough discoveries, and insights from our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="px-6">Subscribe</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;