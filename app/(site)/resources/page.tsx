import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  HelpCircle, 
  Newspaper, 
  BookOpen, 
  User,
  ArrowRight
} from "lucide-react";
import blogData from "@/content/blog.json";
import faqsData from "@/content/faqs.json";
import pressData from "@/content/press.json";
import whitepapersData from "@/content/whitepapers.json";

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Resources"
        description="Knowledge hub for healthcare technology, best practices, and industry insights"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Resources" }
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="blog" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="blog" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Blog
              </TabsTrigger>
              <TabsTrigger value="faqs" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                FAQs
              </TabsTrigger>
              <TabsTrigger value="whitepapers" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Reports
              </TabsTrigger>
              <TabsTrigger value="press" className="flex items-center gap-2">
                <Newspaper className="h-4 w-4" />
                Press
              </TabsTrigger>
            </TabsList>

            {/* Blog Tab */}
            <TabsContent value="blog">
              <div className="mb-8">
                <h2 className="text-3xl font-bold font-heading text-ink mb-4">
                  Latest Insights
                </h2>
                <p className="text-gray-600">
                  Stay updated with the latest trends, innovations, and best practices in healthcare technology
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogData.map((post, index) => (
                  <Card key={index} className="card-rounded shadow-subtle hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-sm text-gray-500">{post.date}</span>
                      </div>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <CardDescription className="text-base">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <Button variant="outline" className="w-full">
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* FAQs Tab */}
            <TabsContent value="faqs">
              <div className="mb-8">
                <h2 className="text-3xl font-bold font-heading text-ink mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600">
                  Find answers to common questions about our solutions and services
                </p>
              </div>

              <div className="space-y-4">
                {faqsData.map((faq, index) => (
                  <Card key={index} className="card-rounded shadow-subtle">
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {faq.answer}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Whitepapers Tab */}
            <TabsContent value="whitepapers">
              <div className="mb-8">
                <h2 className="text-3xl font-bold font-heading text-ink mb-4">
                  Whitepapers & Reports
                </h2>
                <p className="text-gray-600">
                  In-depth research and analysis on healthcare technology trends and solutions
                </p>
              </div>

              {whitepapersData.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {whitepapersData.map((paper, index) => (
                    <Card key={index} className="card-rounded shadow-subtle hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                          <BookOpen className="h-6 w-6 text-brand" />
                        </div>
                        <CardTitle className="text-xl">{paper.title}</CardTitle>
                        <CardDescription>
                          {paper.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" className="w-full">
                          Download PDF
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">Coming Soon</h3>
                  <p className="text-gray-500">
                    We&apos;re working on comprehensive reports and whitepapers. Check back soon!
                  </p>
                </div>
              )}
            </TabsContent>

            {/* Press Tab */}
            <TabsContent value="press">
              <div className="mb-8">
                <h2 className="text-3xl font-bold font-heading text-ink mb-4">
                  Press & Media
                </h2>
                <p className="text-gray-600">
                  Latest news coverage and media mentions about Ubuntu AfyaLink
                </p>
              </div>

              {pressData.length > 0 ? (
                <div className="space-y-6">
                  {pressData.map((article, index) => (
                    <Card key={index} className="card-rounded shadow-subtle">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-xl">{article.title}</CardTitle>
                            <CardDescription className="mt-2">
                              {article.source} • {article.date}
                            </CardDescription>
                          </div>
                          <Badge variant="outline">{article.source}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{article.description}</p>
                        <Button variant="outline" asChild>
                          <a href={article.url} target="_blank" rel="noopener noreferrer">
                            Read Article
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Newspaper className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No Press Coverage Yet</h3>
                  <p className="text-gray-500">
                    We&apos;re working on getting our story out there. Stay tuned for updates!
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-brand/5 to-accent/5 p-8 rounded-2xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold font-heading text-ink mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest insights, updates, and resources 
                delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                />
                <Button className="bg-brand hover:bg-brand-700 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

